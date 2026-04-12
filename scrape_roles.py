import os
import glob
import json
import re
from bs4 import BeautifulSoup

def scrape_roles(roles_dir, output_file):
    roles_data = {}
    html_files = glob.glob(os.path.join(roles_dir, "*.html"))
    
    print(f"Found {len(html_files)} html files...")
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        soup = BeautifulSoup(content, 'html.parser')
        
        # Get filename without extension to use as the ID key (also what KnowMore links to)
        filename = os.path.basename(filepath)
        role_id = os.path.splitext(filename)[0]
        
        title_element = soup.find('h1')
        title = title_element.get_text(strip=True) if title_element else role_id.replace('-', ' ')
        
        # We will iterate through h3 tags to find the sections
        data = {
            "id": role_id,
            "title": title,
            "description": "",
            "skills": [],
            "education": "",
            "duties": [],
            "salary": "",
            "organizations": []
        }
        
        sections = soup.find_all('section')
        for section in sections:
            h3 = section.find('h3')
            if not h3:
                continue
            heading = h3.get_text(strip=True).lower()
            
            if 'job description' in heading:
                p = section.find('p')
                if p: data['description'] = p.get_text(strip=True)
            elif 'skills' in heading:
                ul = section.find('ul')
                if ul: data['skills'] = [li.get_text(strip=True) for li in ul.find_all('li')]
            elif 'education' in heading:
                p = section.find('p')
                if p: data['education'] = p.get_text(strip=True)
            elif 'duties' in heading or 'responsibilities' in heading:
                ul = section.find('ul')
                if ul: data['duties'] = [li.get_text(strip=True) for li in ul.find_all('li')]
            elif 'salary' in heading:
                p = section.find('p')
                if p: data['salary'] = p.get_text(strip=True)
            elif 'organization' in heading:
                ul = section.find('ul')
                if ul: data['organizations'] = [li.get_text(strip=True) for li in ul.find_all('li')]
                
        roles_data[role_id] = data

    print(f"Processed {len(roles_data)} roles. Writing to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(roles_data, f, indent=4)
    print("Done!")

if __name__ == '__main__':
    roles_directory = './frontend/public/roles'
    output_json = './frontend/src/data/rolesData.json'
    
    # Ensure dir exists
    os.makedirs(os.path.dirname(output_json), exist_ok=True)
    
    scrape_roles(roles_directory, output_json)
