document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const loginMessageDiv = document.getElementById('loginMessage');
  if (username === "test" && password === "123") {
    loginMessageDiv.textContent = "Login successful! Redirecting...";
    loginMessageDiv.style.color = "green";
    setTimeout(function() {
      window.location.href = "dashboard.html"; 
    }, 1500); 
  } else {
    loginMessageDiv.textContent = "Incorrect username or password.";
    loginMessageDiv.style.color = "red";
  }
});
