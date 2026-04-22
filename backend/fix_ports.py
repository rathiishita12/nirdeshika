import os

target_dir = '.'
old_string = 'http://127.0.0.1:5000/'
new_string = 'http://127.0.0.1:5050/'
count = 0

for root, dirs, files in os.walk(target_dir):
    for filename in files:
        if filename.endswith(".html"):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if old_string in content:
                content = content.replace(old_string, new_string)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Updated {count} HTML files.")
