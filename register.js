document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (username && email && password && confirmPassword) {
    if (password === confirmPassword) {
      document.getElementById('regMessage').textContent = "Registration successful!";
      document.getElementById('regUsername').value = "";
      document.getElementById('regEmail').value = "";
      document.getElementById('regPassword').value = "";
      document.getElementById('regConfirmPassword').value = "";
    } else {
      document.getElementById('regMessage').textContent = "Passwords do not match.";
      document.getElementById('regMessage').style.color = "red";
    }
  } else {
    document.getElementById('regMessage').textContent = "Please fill in all fields.";
    document.getElementById('regMessage').style.color = "red";
  }
});
