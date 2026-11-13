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

// Preview a party size without reserving or decrementing shared availability.
document.querySelectorAll('.booking-preview-form').forEach(form => {
  const guests = form.querySelector('[name="guests"]');
  const preview = form.querySelector('.booking-capacity-preview');
  const update = () => {
    const count = Number(guests.value);
    preview.textContent = guests.value && guests.checkValidity()
      ? `For ${count} guest(s): ${10 - count} places would remain if this booking were confirmed. Preview only — no places are held.`
      : 'Please choose between 1 and 10 guests.';
  };
  guests.addEventListener('input', update);
  update();
});
