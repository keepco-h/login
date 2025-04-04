document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (username === "test" && password === "123") { // Example login
    document.getElementById('loginMessage').textContent = "Login successful!";
  } else {
    document.getElementById('loginMessage').textContent = "Incorrect username or password.";
    document.getElementById('loginMessage').style.color = "red";
  }
});
