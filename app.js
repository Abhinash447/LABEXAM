const regForm = document.getElementById("regForm");
const loginForm = document.getElementById("loginForm");
const dash = document.getElementById("dash");
const userDisp = document.getElementById("userDisp");

document.getElementById("toLogin").onclick = () => {
  regForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
};
document.getElementById("toReg").onclick = () => {
  loginForm.classList.add("hidden");
  regForm.classList.remove("hidden");
};

regForm.onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;

  localStorage.setItem("user_" + email, JSON.stringify({ email, pass }));
  alert("Registration Successful! Please login.");
  regForm.reset();
  regForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
};

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  const storedUser = JSON.parse(localStorage.getItem("user_" + email));

  if (storedUser && storedUser.pass === pass) {
    userDisp.textContent = email;
    loginForm.classList.add("hidden");
    dash.classList.remove("hidden");
    loginForm.reset();
  } else {
    alert("Invalid Credentials!");
  }
};

document.getElementById("logoutBtn").onclick = () => {
  dash.classList.add("hidden");
  loginForm.classList.remove("hidden");
};
