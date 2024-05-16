import React, { useState, useEffect } from 'react';
import Nav from './components/NavBar/Nav';
import ItemList from './components/ItemListContainer/ItemList';
import Inicio from './components/Inicio/Inicio';
import CartWidget from './components/CartWidget/CartWidget';
import { ChakraProvider } from '@chakra-ui/react';
import { getCart } from './utils/cart/cart';

function CartList() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getCart();
            setCartItems(items);
        };
        fetchCartItems();
    }, []);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.title} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice}</p>
        </div>
    );
}

export default function App() {
    const [selectedBurger, setSelectedBurger] = useState(null);
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <>
            <ChakraProvider>
                <Nav setSelectedBurger={setSelectedBurger} />
                <CartWidget toggleCart={toggleCart} />
                {showCart ? <CartList /> : (selectedBurger ? <ItemList selectedBurger={selectedBurger} /> : <Inicio />)}
            </ChakraProvider>
        </>
    );
}