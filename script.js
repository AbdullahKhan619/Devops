const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");
const toSignup = document.getElementById("toSignup");
const toLogin = document.getElementById("toLogin");

toSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.classList.add("hidden");
  setTimeout(() => {
    signupBox.classList.remove("hidden");
  }, 400);
});

toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupBox.classList.add("hidden");
  setTimeout(() => {
    loginBox.classList.remove("hidden");
  }, 400);
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.5)";
  } else {
    nav.style.background = "rgba(0,0,0,0.3)";
  }
});
