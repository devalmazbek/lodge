"use strict";

const btnCart = document.querySelector('.cart > img');
const shoppingBlock = document.getElementById('cart');
const cartItems = document.querySelector('.cart__items');
const btnAddToCart = document.querySelectorAll('.add__cart');
const allProduct = document.getElementById('all-product');

const product = [];

const openShoppingCart = function() {
    shoppingBlock.classList.toggle('active');
}


const showProductInCart = (product) => {
    const position = 'beforeend';
    const items = document.querySelectorAll('.cart__item');
    items.forEach(item => item.remove());
    product.forEach(item => {
        
        const tempale = `
             <div class="cart__item flex">
                    <h4 class="cart__item__title">${item.productTitle}</h4>
                    <img class="cart__item__img" src="${item.productImage}" alt="">
                    <p class="cart__item__price">${item.productPrice}</p>
            </div>
        `;
        console.log(tempale);

        cartItems.insertAdjacentHTML(position, tempale);
    });
    allProduct.textContent = product.length;
}

const addProductToCart = (event) => {
    
    // let id = 0;
    const parent = event.target.parentElement.parentElement
    const productTitle = parent.children[0].textContent;
    const productImage = parent.children[1].src;
    const productPrice = parent.children[2].children[0].children[1].textContent;
    product.push({productTitle, productImage, productPrice});
    
    showProductInCart(product);

    
}


btnCart.addEventListener('click', openShoppingCart);

for(let item of btnAddToCart) {
    item.addEventListener('click', addProductToCart);
}