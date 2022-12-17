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

//Fucntion ready()

function ready(){
    //remove Items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem)
    }

}

//Remove Items from Cart 

function removeCartItem(e) {
    let buttonClicked = e.target;
    buttonClicked.parentElement.remove();
}

//Update Total


