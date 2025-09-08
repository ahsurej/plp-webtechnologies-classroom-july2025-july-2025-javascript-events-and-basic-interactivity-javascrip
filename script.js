//  Part 1: Custom Form Validation 
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const feedback = document.getElementById('formFeedback');

  // Check if name or email is empty
  if (name === '' || email === '') {
    feedback.textContent = 'Please fill in all fields.';
    feedback.style.color = 'red';
    return;
  }

  // Simple custom email check (not using HTML5 validation)
  if (!email.includes('@') || !email.includes('.')) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Form submitted successfully!';
  feedback.style.color = 'green';
});


// Part 2: Interactive Feature 1 (Button) 
// This changes the background color randomly
document.getElementById('bgBtn').addEventListener('click', function() {
  const colors = ['lightblue', 'lightgreen', 'lavender', 'peachpuff'];
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
});


// Part 3: Interactive Feature 2 (Input
// This shows a greeting while typing
document.getElementById('nameInput').addEventListener('input', function(e) {
  const value = e.target.value.trim();
  const message = document.getElementById('helloMessage');

  if (value) {
    message.textContent = `Hello, ${value}! 👋`;
  } else {
    message.textContent = '';
  }
});
