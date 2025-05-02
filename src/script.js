const settingsMenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");
let darkMode = false;

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("darkMode") == "true" || darkMode == true || darkMode == "true") {
    localStorage.setItem("darkMode", "false");
  } else {
    localStorage.setItem("darkMode", "true");
  }

  darkMode = !darkMode;
};

// function darkTheme() {
//   darkBtn.classList.add("dark-btn-on");
//   document.body.classList.add("dark-theme");
// }

if (localStorage.getItem("darkMode") == "true") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else if (localStorage.getItem("darkMode") == "false") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else {
  localStorage.setItem("darkMode", darkMode.toString());
}
