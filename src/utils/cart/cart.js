async function getCart() {
    const cart = localStorage.getItem('cart')
    return cart ? cart : []
}

/**
 *  item 
 *  id: string
 *  price: number
 *  name: string
 *  quantity: number
 */

async function addCart(item) {
    const cart = await getCart()
    // Validar que item respete el formato
    if (!cart) {
        localStorage.setItem('cart', [item])
    } else {
        // validar si en el carrito existe algo igual sumarle 1 en quantity
        localStorage.setItem('cart', [...cart, item])
    }
}

export {
    getCart,
    addCart
}