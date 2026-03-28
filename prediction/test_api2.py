import requests

try:
    response = requests.get('https://www.arbeitnow.com/api/job-board-api', timeout=10)
    print(response.status_code)
    print(len(response.json().get('data', [])))
except Exception as e:
    print(f"Error: {e}")
