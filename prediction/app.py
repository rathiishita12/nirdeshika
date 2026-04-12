# from flask import Flask, render_template, request, jsonify
# import pandas as pd
# from sklearn import svm
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import MultiLabelBinarizer

# app = Flask(__name__)

# # --------- TRAINING PHASE (Consider saving/loading the model in production) ---------
# df = pd.read_excel("Career_Dataset.xlsx")
# df = df.drop_duplicates()
# df = df.dropna(subset=['Skill', 'Career'])

# # Ensure skill entries are lists
# df['Skill'] = df['Skill'].apply(lambda x: [skill.strip() for skill in x.split(',')])

# # Encode multi-label skills
# mlb = MultiLabelBinarizer()
# X = pd.DataFrame(mlb.fit_transform(df['Skill']), columns=mlb.classes_)
# y = df['Career']

# # Train/test split
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Enable probability estimates
# model = svm.SVC(kernel='linear', probability=True)
# model.fit(X_train, y_train)

# # --------- ROUTES ---------
# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/predict', methods=['POST'])
# def predict():
#     formData = request.get_json()
#     input_skills = formData['skills']
#     skills_list = [skill.strip() for skill in input_skills]

#     # Create input dataframe with zero values
#     input_df = pd.DataFrame([[0] * len(mlb.classes_)], columns=mlb.classes_)
#     for skill in skills_list:
#         if skill in input_df.columns:
#             input_df.at[0, skill] = 1

#     # Predict probabilities
#     probas = model.predict_proba(input_df)[0]
#     top_n = 10
#     top_indices = probas.argsort()[-top_n:][::-1]
#     top_careers = [model.classes_[i] for i in top_indices]

#     return jsonify({'careers': top_careers})

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify
import pandas as pd
import requests
import os
from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MultiLabelBinarizer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# --- Load and Train Model ---
df = pd.read_excel("Career_Dataset.xlsx")
df = df.drop_duplicates()
df = df.dropna(subset=['Skill', 'Career'])

# Convert comma-separated string to list
df['Skill'] = df['Skill'].apply(lambda x: [skill.strip() for skill in x.split(',')])

# Encode skills
mlb = MultiLabelBinarizer()
X = pd.DataFrame(mlb.fit_transform(df['Skill']), columns=mlb.classes_)
y = df['Career']

# Train model (You can save it with joblib for production use)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = svm.SVC(kernel='linear', probability=True)
model.fit(X_train, y_train)

# --- Routes ---

@app.route('/')
def assessment_form():
    return render_template('assessment.html')

@app.route('/predict', methods=['POST'])
def predict():
    formData = request.get_json()
    input_skills = formData.get('skills', [])

    # Prepare input vector
    input_df = pd.DataFrame([[0] * len(mlb.classes_)], columns=mlb.classes_)
    for skill in input_skills:
        if skill in input_df.columns:
            input_df.at[0, skill] = 1

    # Predict top career options
    probabilities = model.predict_proba(input_df)[0]
    top_indices = probabilities.argsort()[-4:][::-1]
    top_careers = [model.classes_[i] for i in top_indices]

    return jsonify({
        'recommendation': top_careers[0],
        'alternatives': top_careers[1:]
    })

@app.route('/result')
def result():
    main = request.args.get('main', 'Unknown')
    alt1 = request.args.get('alt1', '')
    alt2 = request.args.get('alt2', '')
    alt3 = request.args.get('alt3', '')

    # Fetch jobs from Arbeitnow completely free API
    # We fetch recent jobs and filter by keywords for all recommendations
    job_categories = {
        main: [],
        alt1: [],
        alt2: [],
        alt3: []
    }
    # Remove empty alternative strings
    job_categories = {k: v for k, v in job_categories.items() if k}
    
    try:
        response = requests.get('https://jobicy.com/api/v2/remote-jobs', timeout=5)
        if response.status_code == 200:
            data = response.json()
            all_jobs = data.get('jobs', [])
            
            for category_name in job_categories.keys():
                search_keyword = category_name.lower()
                keywords = set(search_keyword.split())
                
                # Simple keyword matching across Job Title
                for job in all_jobs:
                    job_title = job.get('jobTitle', '').lower()
                    
                    # We do a loose match - if any keyword hits, we include it, up to 2 jobs per category
                    if any(word in job_title for word in keywords) or search_keyword in job_title:
                        job_categories[category_name].append({
                            'title': job.get('jobTitle', 'Position Available'),
                            'company': job.get('companyName', 'Tech Company'),
                            'location': job.get('jobGeo', 'Remote'),
                            'url': job.get('url', '#'),
                            'remote': True
                        })
                        if len(job_categories[category_name]) >= 2:
                            break
                            
                # If no direct keyword matches were found for a category, return general remote jobs
                # as placeholders so the section isn't empty, but only 1 so it doesn't clutter
                if not job_categories[category_name] and all_jobs:
                     for job in all_jobs[:1]:
                         job_categories[category_name].append({
                            'title': job.get('jobTitle', f'{category_name} (Remote)'),
                            'company': job.get('companyName', 'Global Company'),
                            'location': job.get('jobGeo', 'Worldwide'),
                            'url': job.get('url', '#'),
                            'remote': True
                        })
                        
    except Exception as e:
        print(f"Error fetching from Jobicy: {e}")

    # Fallback to display the UI correctly even if the API timeouts or is blocked
    for category_name in job_categories.keys():
        if not job_categories[category_name]:
            job_categories[category_name] = [
                {
                    'title': f'{category_name} Specialist',
                    'company': 'Global Tech Innovators',
                    'location': 'Worldwide',
                    'url': 'https://www.linkedin.com/jobs',
                    'remote': True
                },
                {
                    'title': f'Senior {category_name}',
                    'company': 'NextGen Solutions',
                    'location': 'New York, NY',
                    'url': 'https://www.indeed.com/',
                    'remote': False
                }
            ]

    return render_template('result.html', main=main, alt1=alt1, alt2=alt2, alt3=alt3, job_categories=job_categories)

# --- Main ---
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5050))
    debug_mode = os.environ.get('FLASK_ENV') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug_mode)
