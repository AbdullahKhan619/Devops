// Get elements
const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");
const toSignup = document.getElementById("toSignup");
const toLogin = document.getElementById("toLogin");

// Toggle to Signup
toSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.classList.add("hidden");
  setTimeout(() => {
    signupBox.classList.remove("hidden");
  }, 400);
});

// Toggle to Login
toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupBox.classList.add("hidden");
  setTimeout(() => {
    loginBox.classList.remove("hidden");
  }, 400);
});

// Optional: handle form submit dynamically
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
});

// Responsive navbar toggle (optional)
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255,255,255,0.2)";
  } else {
    nav.style.background = "rgba(255,255,255,0.1)";
  }
});
