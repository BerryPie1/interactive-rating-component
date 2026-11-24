const submitButton = document.querySelector('.submit-button');
const ratingButtons = document.querySelectorAll('.rating-button');
const ratingState = document.getElementById('rating-state');
const thankyouState = document.getElementById('thankyou-state');
const ratingValue = document.getElementById('rating-value');
const thankyouHead = document.getElementById('thankyou-head');

submitButton.addEventListener('click', () => {
  const selectedButton = [...ratingButtons].find(button => button.classList.contains("selected"));
  if(selectedButton) {
    ratingState.classList.add('hidden');
    thankyouState.classList.remove('hidden');
    thankyouHead.focus();
    ratingValue.textContent = selectedButton.dataset.rating;
  } else {
    alert('Please select a rating');
  }
});

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingButtons.forEach(btn => {
      btn.classList.remove('selected')
      btn.setAttribute("aria-pressed", "false");
    });
    button.classList.add('selected');
    button.setAttribute("aria-pressed", "true");
  });
});