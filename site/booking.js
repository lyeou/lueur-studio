'use strict';
document.querySelectorAll('.booking-preview-form').forEach(form => {
  form.addEventListener('submit', event => event.preventDefault());
  form.querySelector('.booking-review').addEventListener('click', () => {
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    form.querySelector('.booking-result').textContent = `Your preference: ${data.get('guests')} guest(s), ${data.get('date')} at ${data.get('time')} (London time). Preview only — nothing has been sent and no place is reserved.`;
  });
  form.addEventListener('input', () => { form.querySelector('.booking-result').textContent = ''; });
});
