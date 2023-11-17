const hamburger= document.querySelector(".hamburger");
const navsmallmenu = document.querySelector('.navsmallmenu');

hamburger.addEventListener('click', (e)=> {
    navsmallmenu.classList.toggle('navsmallmenushow');
});
