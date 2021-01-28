const menuMobile = document.querySelectorAll("#menuToggle input");
const menuMobileA = document.querySelectorAll("#menuToggle a");
const input = document.getElementById("inputMenu")


menuMobile.forEach(item => {
    item.addEventListener("click", stopScroll)
})

function stopScroll(event){
    if(input.checked){
        document.body.style.overflow = "hidden"
    } else{
        document.body.style.overflow = "visible"
    }
}

menuMobileA.forEach(i => {
    i.addEventListener("click", closeMenu)
})

function closeMenu(i){
    document.body.style.overflow = "visible"
    input.checked = false
}