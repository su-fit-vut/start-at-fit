

const toggleNav = () => {
  const menu = document.getElementById("menu");
  if (menu.getAttribute("class") === "hidden") {
    menu.setAttribute("class", "visible");
  } else {
    menu.setAttribute("class", "hidden");
  }
}

const scrollToProgram = () => {
  const program = document.getElementById("Program");
  console.log(program);
  program.scrollIntoView({ behavior: "smooth"} );
}