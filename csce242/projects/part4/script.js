const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
};
function toggleMenu() {
    var menu = document.getElementById('menu');
    var hamburgerMenu = document.querySelector('.hamburger-menu');

    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  }
