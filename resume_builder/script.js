document.getElementById('name').addEventListener('input', e => {
  document.getElementById('prev-name').textContent = e.target.value || 'Your Name';
});
document.getElementById('email').addEventListener('input', e => {
  document.getElementById('prev-email').textContent = e.target.value;
});
document.getElementById('phone').addEventListener('input', e => {
  document.getElementById('prev-phone').textContent = e.target.value;
});
document.getElementById('summary').addEventListener('input', e => {
  document.getElementById('prev-summary').textContent = e.target.value;
});

document.querySelectorAll('#skills-section input[type="checkbox"]').forEach(box => {
  box.addEventListener('change', () => {
    const selected = Array.from(document.querySelectorAll('#skills-section input:checked'))
      .map(cb => `<li>${cb.value}</li>`).join('');
    document.getElementById('prev-skills').innerHTML = selected;
  });
});

function addEducation() {
  const newEdu = document.createElement('input');
  newEdu.type = 'text';
  newEdu.placeholder = 'Degree, Year';
  newEdu.className = 'edu-entry';
  newEdu.addEventListener('input', updateEducation);
  document.getElementById('education-section').insertBefore(newEdu, document.getElementById('education-section').children[2]);
}
function updateEducation() {
  const entries = document.querySelectorAll('.edu-entry');
  document.getElementById('prev-education').innerHTML = Array.from(entries)
    .map(input => input.value ? `<li>${input.value}</li>` : '').join('');
}
document.querySelectorAll('.edu-entry').forEach(input => {
  input.addEventListener('input', updateEducation);
});

function addExperience() {
  const newExp = document.createElement('input');
  newExp.type = 'text';
  newExp.placeholder = 'Job Title, Years';
  newExp.className = 'exp-entry';
  newExp.addEventListener('input', updateExperience);
  document.getElementById('experience-section').insertBefore(newExp, document.getElementById('experience-section').children[2]);
}
function updateExperience() {
  const entries = document.querySelectorAll('.exp-entry');
  document.getElementById('prev-experience').innerHTML = Array.from(entries)
    .map(input => input.value ? `<li>${input.value}</li>` : '').join('');
}
document.querySelectorAll('.exp-entry').forEach(input => {
  input.addEventListener('input', updateExperience);
});

function addCertificate() {
  const newCert = document.createElement('input');
  newCert.type = 'text';
  newCert.placeholder = 'Certificate Title, Year';
  newCert.className = 'cert-entry';
  newCert.addEventListener('input', updateCertificates);
  document.getElementById('certificates-section').insertBefore(newCert, document.getElementById('certificates-section').children[2]);
}
function updateCertificates() {
  const entries = document.querySelectorAll('.cert-entry');
  document.getElementById('prev-certificates').innerHTML = Array.from(entries)
    .map(input => input.value ? `<li>${input.value}</li>` : '').join('');
}
document.querySelectorAll('.cert-entry').forEach(input => {
  input.addEventListener('input', updateCertificates);
});

function addProject() {
  const newProj = document.createElement('input');
  newProj.type = 'text';
  newProj.placeholder = 'Project Name, Description';
  newProj.className = 'proj-entry';
  newProj.addEventListener('input', updateProjects);
  document.getElementById('projects-section').insertBefore(newProj, document.getElementById('projects-section').children[2]);
}
function updateProjects() {
  const entries = document.querySelectorAll('.proj-entry');
  document.getElementById('prev-projects').innerHTML = Array.from(entries)
    .map(input => input.value ? `<li>${input.value}</li>` : '').join('');
}
document.querySelectorAll('.proj-entry').forEach(input => {
  input.addEventListener('input', updateProjects);
});

function clearPreview() {
  document.getElementById('prev-name').textContent = 'Your Name';
  document.getElementById('prev-email').textContent = '';
  document.getElementById('prev-phone').textContent = '';
  document.getElementById('prev-summary').textContent = '';
  document.getElementById('prev-education').innerHTML = '';
  document.getElementById('prev-experience').innerHTML = '';
  document.getElementById('prev-skills').innerHTML = '';
  document.getElementById('prev-certificates').innerHTML = '';
  document.getElementById('prev-projects').innerHTML = '';
}

function downloadPDF() {
  const element = document.getElementById('resume-preview');
  const opt = {
    margin: 0.5,
    filename: 'my_resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}
