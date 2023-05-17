const hamburgerImg = document.querySelector(".hamburger-img");
const menuLink = document.querySelector(".menu");

hamburgerImg.addEventListener("click", () => {
    if (menuLink.style.display === 'none') {
        menuLink.style.display = 'block'
    }else {
        menuLink.style.display = 'none'
    }
})