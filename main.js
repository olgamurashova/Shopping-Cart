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

    //Quantity changes 
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    //Add to Cart
    var addCart = document.getElementsByClassName("add-cart");
    for(i = 0; i < addCart.length; i ++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

}

//Remove Items from Cart 

function removeCartItem(e) {
    let buttonClicked = e.target;
    buttonClicked.parentElement.remove();
    updatetotal(); 

}

//Quantity Changed 

function quantityChanged(e) {
    var input = e.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;

    }

    updatetotal();

}

//Update Total

 function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    total = 0;
    for( let i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceEl = cartBox.getElementsByClassName("cart-price")[0];
        var quantityEl = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceEl.innerText.replace("$", ""));
        var quantity = quantityEl.value;
        total = total + (price * quantity); 

        //If price contains some cents value

        total = Math.round(total * 100) / 100;
    }

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
 }


 //Add to Cart 

 function addCartClicked(e) {
    var button = e.target;
    var shopItems = button.parentElement;
    var title = shopItems.getElementsByClassName("product-name")[0].innerText;
    var price = shopItems.getElementsByClassName("price")[0].innerText;
    var productImg = shopItems.getElementsByClassName("product-img")[0].src;

    addProductToCart(title, price, productImg);
    updatetotal();

 }

 //addProductToCart

 function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");

    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (let i = 0; i < cartItemsNames.length; i++) {
         alert("You have already added this item to the cart")
    }


 }