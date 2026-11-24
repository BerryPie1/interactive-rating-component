const submitButton = document.querySelector('.submit-button');
const ratingButtons = document.querySelectorAll('.rating-button');
const ratingState = document.getElementById('rating-state');
const thankyouState = document.getElementById('thankyou-state');
const ratingValue = document.getElementById('rating-value');

submitButton.addEventListener('click', () => {
  if([...ratingButtons].some(button => button.classList.contains('selected'))) {
    ratingState.classList.add('hidden');
    thankyouState.classList.remove('hidden');
    ratingValue.textContent = [...ratingButtons].find(button => button.classList.contains('selected')).getAttribute('data-rating');
  } else {
    alert('Please select a rating');
  }
});

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});