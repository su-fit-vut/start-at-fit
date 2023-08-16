

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