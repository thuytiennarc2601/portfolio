const menuIcon = document.getElementById('menu-icon');
const extendedMenu = document.getElementById('extend-navbar-menu');

menuIcon.addEventListener('click', () => {
    if(extendedMenu.getAttribute("hidden") == null){
        extendedMenu.setAttribute('hidden', true);
    } else {
        extendedMenu.removeAttribute('hidden');
    }
})