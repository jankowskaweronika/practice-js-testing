function getProductList() {
    return [
        {
            name: 'JavaScript: podstawy',
            type: 'book',
            count: 3,
            price: 67.19,
            discount: 0.21,
        },
        {
            name: 'React: podstawy',
            type: 'book',
            count: 4,
            price: 79.17,
            discount: 0.27,
        },
    ];
}

function getTotalPrice(productList) {
    return productList.reduce((acc, product) => {
        return acc + product.price * product.count * (1 - product.discount);
    }, 0);
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice.toFixed(2));