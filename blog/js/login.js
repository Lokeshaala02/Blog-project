const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const user = {
    email,
    password,
  };

  fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.replace("./index.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
