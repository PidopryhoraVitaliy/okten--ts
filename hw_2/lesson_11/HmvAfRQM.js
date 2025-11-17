"use strict";
{
    const cartsWrap = document.querySelector('.carts');
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(({ carts }) => {
        cartsWrap.innerHTML = '';
        console.log(carts);
        for (const cart of carts) {
            const cartDiv = document.createElement('div');
            cartDiv.classList.add('cart');
            for (const key in cart) {
                if (key === 'products') {
                    continue;
                }
                const typedKey = key; // ???
                const propDiv = document.createElement('div');
                propDiv.innerText = `${key}: ${cart[typedKey]}`;
                cartDiv.appendChild(propDiv);
            }
            addProducts(cartDiv, cart.products);
            cartsWrap.appendChild(cartDiv);
        }
    });
    function addProducts(cartDiv, products) {
        if (!products || !products.length)
            return;
        const productsDiv = document.createElement('div');
        productsDiv.classList.add('products');
        productsDiv.innerText = 'Products:';
        for (const product of products) {
            const prodDiv = document.createElement('div');
            for (const productKey in product) {
                if (productKey === 'thumbnail') {
                    const thumbnail = document.createElement('img');
                    thumbnail.src = product[productKey];
                    prodDiv.appendChild(thumbnail);
                }
                else {
                    const productPropDiv = document.createElement('div');
                    const typedProductKey = productKey; // ???
                    productPropDiv.innerText = `${productKey}: ${product[typedProductKey]}`;
                    prodDiv.appendChild(productPropDiv);
                }
            }
            productsDiv.appendChild(prodDiv);
        }
        cartDiv.appendChild(productsDiv);
    }
}
