const menu = document.getElementById('menu_bars');
const search = document.getElementById('search_icon');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    // toggle use for classlist to add or remove
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});