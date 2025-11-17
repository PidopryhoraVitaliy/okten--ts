{
    type ProductType = {
        id: number;
        title: string;
        price: number;
        quantity: number;
        total: number;
        discountPercentage: number;
        discountedTotal: number;
        thumbnail: string;
    }

    type CartType = {
        id: number;
        products: ProductType[];
        total: number;
        discountedTotal: number;
        userId: number;
        totalProducts: number;
        totalQuantity: number;
    }

    type CartsResponse = {
        carts: CartType[];
        total: number;
        skip: number;
        limit: number;
    };

    const cartsWrap: HTMLDivElement = document.querySelector('.carts') as HTMLDivElement;

    fetch('https://dummyjson.com/carts')
        .then(res => res.json() as Promise<CartsResponse>)
        .then(({carts}: CartsResponse): void => {
            cartsWrap.innerHTML = '';
            console.log(carts);
            for (const cart of carts) {
                const cartDiv: HTMLDivElement = document.createElement('div');
                cartDiv.classList.add('cart');
                for (const key in cart) {
                    if (key === 'products') {
                        continue;
                    }
                    const typedKey = key as keyof CartType;                                  // ???
                    const propDiv: HTMLDivElement = document.createElement('div');
                    propDiv.innerText = `${key}: ${cart[typedKey]}`;
                    cartDiv.appendChild(propDiv);
                }
                addProducts(cartDiv, cart.products);
                cartsWrap.appendChild(cartDiv);
            }
        });

    function addProducts(cartDiv: HTMLDivElement, products: ProductType[]): void {
        if (!products || !products.length) return;
        const productsDiv: HTMLDivElement = document.createElement('div');
        productsDiv.classList.add('products');
        productsDiv.innerText = 'Products:';
        for (const product of products) {
            const prodDiv: HTMLDivElement = document.createElement('div');
            for (const productKey in product) {
                if (productKey === 'thumbnail') {
                    const thumbnail: HTMLImageElement = document.createElement('img');
                    thumbnail.src = product[productKey];
                    prodDiv.appendChild(thumbnail);
                } else {
                    const productPropDiv: HTMLDivElement = document.createElement('div');
                    const typedProductKey = productKey as keyof ProductType;                    // ???
                    productPropDiv.innerText = `${productKey}: ${product[typedProductKey]}`;
                    prodDiv.appendChild(productPropDiv);
                }

            }
            productsDiv.appendChild(prodDiv);
        }
        cartDiv.appendChild(productsDiv);
    }
}