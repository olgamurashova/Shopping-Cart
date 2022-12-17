//Cart

let cartIcon = document.querySelector("#cart-icon");

let cart = document.querySelector(".cart");

let cartClose = document.querySelector("#close-cart");

//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}

//Close Cart
cartClose.onclick = () => {
    cart.classList.remove("active");
}

//Cart Working JS

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
    } else {
        ready();
    }

