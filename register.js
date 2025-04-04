document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  if (username && email && password) {
    document.getElementById('regMessage').textContent = "Registration successful!";
    document.getElementById('regUsername').value = "";
    document.getElementById('regEmail').value = "";
    document.getElementById('regPassword').value = "";
  } else {
    document.getElementById('regMessage').textContent = "Please fill in all fields.";
    document.getElementById('regMessage').style.color = "red";
  }
});
