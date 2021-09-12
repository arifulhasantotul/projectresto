const menu = document.getElementById('menu_bars');
const searchForm = document.getElementById('search_form');
const searchBtn = document.getElementById('search_icon');
const closeBtn = document.getElementById('close');
const navbar = document.querySelector('.navbar');

// navbar toggle done 
menu.addEventListener('click', () => {
    // toggle use for classlist to add or remove
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// search modal open 
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
}
// search modal close 
closeBtn.addEventListener('click', () => {
    searchForm.classList.remove('active');
})