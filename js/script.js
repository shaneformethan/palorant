document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const nav = document.querySelector('.menu-container');

    hamburgerBtn.addEventListener('click', () => {
        console.log("testing");
        nav.classList.toggle('active');
    });
});