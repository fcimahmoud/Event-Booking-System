document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://eventsys.runasp.net/api/Authentication/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("accessToken", data.accessToken); // store token
      window.location.href = "dashboard.html"; // redirect to dashboard (to be created)
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    alert("An error occurred: " + error.message);
  }
});
