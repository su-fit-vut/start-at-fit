const toggleNav = () => {
  const menu = document.getElementById("menu");
  const menuButton = document.getElementById("menuButton").childNodes[1];

  if (menu.getAttribute("class") === "hidden top-margin") {
    menu.setAttribute("class", "visible top-margin");
    menuButton.setAttribute("class", "fa-solid fa-x");
  } else {
    menu.setAttribute("class", "hidden top-margin");
    menuButton.setAttribute("class", "fa-solid fa-bars");
  }
}

const scrollToProgram = () => {
  const program = document.getElementById("Program");
  program.scrollIntoView({ behavior: "smooth"} );
}

const scrollAndToggle = () => {
  toggleNav();
  scrollToProgram();
}

// code from https://joyofcode.xyz/dark-mode-favicon#using-the-media-attribute
const faviconEl = document.querySelector('link[rel="icon"]');
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', themeChange);

// fire it on page load to select correct favicon
themeChange(mediaQuery);

function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', 'img/favicon.png');
  } else {
    faviconEl.setAttribute('href', 'img/favicon-light-mode.png');
  }
}

const togglePlace = (index) => {
  const expandable = document.getElementsByClassName("expandable")[index];
  const toggle = expandable.childNodes[1].childNodes[1].childNodes[1];
  const body = expandable.childNodes[3];

  if (body.getAttribute("class") === "body") {
    body.setAttribute("class", "body hidden");
    toggle.setAttribute("class", "fa-solid fa-angles-right");
  } else {
    body.setAttribute("class", "body");
    toggle.setAttribute("class", "fa-solid fa-angles-down");

  }
}
