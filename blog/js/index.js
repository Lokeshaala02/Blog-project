function Nav() {
  let nav = "";
  const user = JSON.parse(localStorage.getItem("user"));

  nav += "<nav><ul>";
  nav += '<li><a href="./index.html">Home</a></li>';
  nav += '<li><a href="#">About</a></li>';
  nav += '<li><a href="#">Contact</a></li>';

  if (user) {
    nav += `<li><span>${user.name}</span></li>`;
    nav += '<li><span onclick="LogOut()">Logout</span></li>';
  } else {
    nav += '<li><a href="./login.html">Login</a></li>';
    nav += '<li><a href="./register.html">Register</a></li>';
  }

  if (user.isAdmin) {
    nav += '<li><a href="./admin.html">Admin</a></li>';
  }

  nav += "</ul></nav>";
  console.log(user);
  return nav;
}

function SetBlogs() {
  let blog = "";

  fetch("http://localhost:3000/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        blog += BlogPost(element.title, element.date, element.discription);
      });
      document.getElementById("blogs").innerHTML = blog;
    })
    .catch((err) => console.log(err));

  return blog;
}

function LogOut() {
  localStorage.removeItem("user");
  window.location.replace("./login.html");
}
function BlogPost(title, date, discription) {
  return `<article>
    <h2>${title}</h2>
    <p>${date}</p>
    <p>
      ${discription}
    </p>
  </article>`;
}

const nav = document.getElementById("nav");
const blogs = document.getElementById("blogs");
nav.innerHTML = Nav();
blogs.innerHTML = SetBlogs();
