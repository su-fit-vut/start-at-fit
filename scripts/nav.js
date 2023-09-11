

const toggleNav = () => {
  const menu = document.getElementById("menu");
  const menuButton = document.getElementById("menuButton").childNodes[1];

  if (menu.getAttribute("class") === "hidden top-margin") {
    menu.setAttribute("class", "visible top-margin");
    menuButton.setAttribute("class", "fa-solid fa-x")
  } else {
    menu.setAttribute("class", "hidden top-margin");
    menuButton.setAttribute("class", "fa-solid fa-bars")
  }
}

const scrollToProgram = () => {
  const program = document.getElementById("Program");
  console.log(program);
  program.scrollIntoView({ behavior: "smooth"} );
}

const scrollAndToggle = () => {
  toggleNav();
  scrollToProgram();
}

// code from https://joyofcode.xyz/dark-mode-favicon#using-the-media-attribute
const faviconEl = document.querySelector('link[rel="icon"]')
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// fire it on page load to select correct favicon
themeChange(mediaQuery)

function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', 'img/favicon.png')
  } else {
    faviconEl.setAttribute('href', 'img/favicon-light-mode.png')
  }
}
