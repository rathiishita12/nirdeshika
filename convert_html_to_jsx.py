import sys
import re

def html_to_jsx(file_path, component_name, css_file):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract body content, excluding <nav> and anything before it, and excluding <script>
    # Note: Regex parsing of HTML is imperfect but works for simple templates
    body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
    if not body_match:
        return
    body_content = body_match.group(1)

    # Remove the <nav> block
    body_content = re.sub(r'<nav>.*?</nav>', '', body_content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove script tags
    body_content = re.sub(r'<script.*?>.*?</script>', '', body_content, flags=re.DOTALL | re.IGNORECASE)

    # Convert common HTML attributes to JSX
    body_content = body_content.replace('class=', 'className=')
    body_content = body_content.replace('for=', 'htmlFor=')
    body_content = body_content.replace('charset=', 'charSet=')
    
    # Self-closing tags fixing (basic)
    body_content = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', body_content)
    body_content = re.sub(r'<input(.*?)(?<!/)>', r'<input\1 />', body_content)
    body_content = re.sub(r'<br(.*?)(?<!/)>', r'<br\1 />', body_content)
    body_content = re.sub(r'<hr(.*?)(?<!/)>', r'<hr\1 />', body_content)

    # Convert style string to style object for JSX
    # E.g., style="min-width: 250px; margin-top: 20px;" -> style={{minWidth: '250px', marginTop: '20px'}}
    def repl_style(match):
        style_str = match.group(1)
        rules = [rule.strip() for rule in style_str.split(';') if rule.strip()]
        obj_props = []
        for rule in rules:
            if ':' in rule:
                key, val = rule.split(':', 1)
                key = key.strip()
                val = val.strip()
                # kebab-case to camelCase
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                val = val.replace("'", "\\'")
                obj_props.append(f"{key}: '{val}'")
        return 'style={{' + ', '.join(obj_props) + '}}'

    body_content = re.sub(r'style="([^"]*)"', repl_style, body_content)

    # Replace local asset paths if needed
    body_content = body_content.replace('"assets/', '"/assets/')

    jsx_file = f"""import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/{css_file}';

const {component_name} = () => {{
  return (
    <>
      <Navbar />
      {body_content}
      <Footer />
    </>
  );
}};

export default {component_name};
"""
    with open(f"frontend/src/pages/{component_name}.jsx", "w", encoding="utf-8") as f:
        f.write(jsx_file)

html_to_jsx("courses.html", "Courses", "courses.css")
html_to_jsx("know-more.html", "KnowMore", "know-more.css")
html_to_jsx("profile.html", "Profile", "profile.css")

print("Conversion complete.")
