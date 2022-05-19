// Modify BackgroundOf NavBar

window.onscroll = () => {
  var myNav = document.getElementById("nav");
  if (
    document.documentElement.scrollTop > 180 ||
    document.body.scrollTop > 180
  ) {
    myNav.classList.add("navBar_Background");
  } else {
    myNav.classList.remove("navBar_Background");
  }
};

// Typed Js Library
let options = {
  strings: ["Together we can change the planet"],
  typeSpeed: 75,
};
const typed = new Typed("#typed", options);
// Scroll Reveal Library
ScrollReveal().reveal(".revealEfect", { reset: true });
ScrollReveal().reveal(".revealEfect div", { reset: true });
