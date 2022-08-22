// Toggle Menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


// Dark Mode
if(localStorage.getItem('theme') == 'dark') {
    setDarkMode();
}

function setDarkMode() {
    imgSrc = '';
    let isDark = document.body.classList.toggle('darkMode');

    if(isDark) {
        imgSrc = 'assets/img/icon-light.png';
        localStorage.setItem('theme', 'dark');
    } else {
        imgSrc = 'assets/img/icon-dark.png';
        localStorage.removeItem('theme');
    }

    document.querySelector('#iconDark').src = imgSrc;
}