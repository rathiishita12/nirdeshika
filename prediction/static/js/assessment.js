const skillsList = ['Python', 'Java', 'C++', 'JavaScript', 'Machine Learning', 'Data Analysis', 'Cloud Computing', 'UI/UX Design', 'SQL', 'Project Management'];

$(document).ready(function () {
  $('#skills').select2({
    data: skillsList.map(skill => ({ id: skill, text: skill })),
    placeholder: 'Select skills'
  });
});

document.getElementById('careerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    gender: document.getElementById('gender').value,
    education: document.getElementById('education').value,
    skills: $('#skills').val(),
    years_experience: document.getElementById('years').value,
    experience_level: document.getElementById('level').value,
    career_goals: document.getElementById('goals').value,
  };

  fetch('/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(async data => {
      // Try to update DB counter if there is an active logged-in user session
      try {
        const token = localStorage.getItem("token");
        if (token) {
          await fetch("http://127.0.0.1:3000/increment-assessment", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
        }
      } catch (e) { console.error("Could not record assessment stat"); }

      const queryParams = new URLSearchParams({
        main: data.recommendation,
        alt1: data.alternatives[0],
        alt2: data.alternatives[1],
        alt3: data.alternatives[2],
      });
      window.location.href = `/result?${queryParams.toString()}`;
    })
    .catch(err => {
      console.error(err);
      alert("Something went wrong. Try again later.");
    });
});
