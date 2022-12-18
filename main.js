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
    updatetotal();
}

//Update Total

 function updatetotal(){
    var cartContent = document.getElementsByClassName('.cart-content')[0];
    var cartBoxes = document.getElementsByClassName('.cart-box');
    total = 0;
    for( let i = 0; i < cartBox.length; i++) {
        var cartBox = cartBoxes[i];
        var priceEl = cartBox.getElementsByClassName('.cart-price')[0];
        var quantityEl = cartBox.getElementsByClassName('.cart-quantity')[0];
        var price = parseFloat(priceEl.innerText.replace("$", ""));
        var quantity = quantityEl.value;
        total = total + (price * quantity); 
    }

    document.getElementsByName('.total-price')[0].innerText = "$" + total;
 }
