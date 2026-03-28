import os
import re

# Base directory
base_dir = '/Users/ishitarathi/VsCode/Career guidance'

# New standard navbar
new_nav = """<nav>
    <div class="nav__bar">
      <div class="nav__logo">
        <a href="http://127.0.0.1:5500/"><img src="http://127.0.0.1:5500/logo.png" alt="logo" style="height: 70px; width:250px;"></a>
      </div>
      <ul class="nav__links">
        <li class="link"><a href="http://127.0.0.1:5500/">Home</a></li>
        <li class="link"><a href="http://127.0.0.1:5500/about.html">About Us</a></li>

        <!-- Services Dropdown -->
        <li class="link dropdown">
          <a href="#">Services ▾</a>
          <ul class="dropdown-menu">
            <li><a href="http://127.0.0.1:5000/">Take Assessment</a></li>
            <li><a href="http://127.0.0.1:5500/courses.html">Courses</a></li>
            <li><a href="http://127.0.0.1:5500/know-more.html">Know More</a></li>
          </ul>
        </li>

        <li class="link"><a href="http://127.0.0.1:5500/index.html#contact">Contact</a></li>
        <li class="link profile-link">
          <a href="http://127.0.0.1:5500/profile.html" aria-label="Profile">
            <i class="ri-user-line" style="font-size: 1.5rem; vertical-align: middle;"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>"""

# Required CSS for icons (Remix Icon & Material Symbols)
css_injections = [
    '<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />',
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />'
]

# Patterns
nav_pattern = re.compile(r'<nav>.*?</nav>', re.DOTALL)
head_end_pattern = re.compile(r'</head>', re.IGNORECASE)

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Replace or Inject <nav>
    if nav_pattern.search(content):
        content = nav_pattern.sub(new_nav, content)
    else:
        # If no <nav> exists, we inject it right after <body>
        body_pattern = re.compile(r'(<body[^>]*>)', re.IGNORECASE)
        content = body_pattern.sub(r'\1\n  ' + new_nav, content)
        
    # 2. Inject CSS if not present
    for css in css_injections:
        if 'remixicon' in css and 'remixicon' not in content:
            content = head_end_pattern.sub(f'  {css}\n</head>', content)
        if 'Material+Symbols' in css and 'Material+Symbols' not in content:
            content = head_end_pattern.sub(f'  {css}\n</head>', content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {file_path.replace(base_dir, '')}")

# Recursively search for HTML files
for root, dirs, files in os.walk(base_dir):
    # Exclude node_modules, .git, etc
    if 'node_modules' in root or '.git' in root or '.gemini' in root:
        continue
    
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))

print("Navbar replacement complete.")
