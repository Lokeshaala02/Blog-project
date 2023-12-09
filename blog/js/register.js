const regForm = document.getElementById("regForm");

regForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const user = {
    name,
    email,
    password,
  };

  fetch("http://localhost:3000/api/users/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data");
    })
    .catch((err) => {
      console.log(err);
    });
});
