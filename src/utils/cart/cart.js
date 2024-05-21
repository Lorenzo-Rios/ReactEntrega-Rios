import { remove } from "firebase/database";

async function getCart() {
    const cart = localStorage.getItem('cart');
    try {
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error("Error parsing cart JSON:", error);
        return [];
    }
}

async function addCart(item) {
    const cart = await getCart();
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }
    
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error("Error setting cart JSON:", error);
    }
}

async function removeCartItem(itemId) {
    const cart = await getCart();
    const newCart = cart.filter(item => item.id !== itemId);
    
    try {
        localStorage.setItem('cart', JSON.stringify(newCart));
    } catch (error) {
        console.error("Error removing item from cart:", error);
    }
}

async function emptyCart (){
    const cart = await getCart();
    cart.remove(remove.apply)
}

export {
    getCart,
    addCart,
    removeCartItem,
    emptyCart 
}