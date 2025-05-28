
document.getElementById('recommendation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('rec-name').value;
  const text = document.getElementById('rec-text').value;
  const list = document.getElementById('recommendation-list');
  const newRec = document.createElement('li');
  newRec.innerHTML = `<strong>${name}</strong>: ${text}`;
  list.appendChild(newRec);
  alert('Thank you for leaving a recommendation!'); // Pop-up for Task 9
  this.reset();
});