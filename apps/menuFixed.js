window.onscroll = function () { myFunction() };

const navbar = document.getElementById("navbar");
const phone = document.getElementById("phone")
var sticky = navbar.offsetTop;
var sticky2 = phone.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        phone.classList.add("sticky2")
    } else {
        navbar.classList.remove("sticky");
        phone.classList.remove("sticky2");
    }
}