// this function is for displaying the cookies data into the browser. If the user comes back later
const displayLocalStorageCart = () => {
    // checking cart. if it's already cached or not.
    const cart = getCart();
    for (const name in cart) {
        // calling display function.
        displayProduct(name);
    }
}

// add item 
const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    // display in the ui
    displayProduct(name);

    // add to local storage
    addProductToCart(name);

    //clear
    nameField.value = '';
}
// display the input product that user has given
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
// adding product in to cart
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageCart();