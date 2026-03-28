import requests
import json

response = requests.get('https://www.arbeitnow.com/api/job-board-api', timeout=10)
print(f"Status Code: {response.status_code}")
data = response.json()
all_jobs = data.get('data', [])
print(f"Total Jobs Returned: {len(all_jobs)}")

count = 0
for job in all_jobs:
    title = job.get('title', '').lower()
    if 'software' in title:
        print(f"Found: {job.get('title')} at {job.get('company_name')} ({job.get('location')}) - Remote: {job.get('remote')}")
        count += 1
    if count >= 3:
        break
