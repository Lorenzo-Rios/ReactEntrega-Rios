import React, { useState, useEffect } from 'react';
import Nav from './components/NavBar/Nav';
import ItemList from './components/ItemListContainer/ItemList';
import Inicio from './components/Inicio/Inicio';
import { ChakraProvider } from '@chakra-ui/react';
import { getCart, removeCartItem } from './utils/cart/cart';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

initMercadoPago('TEST-1b5596c7-1b12-4cf6-8073-cafd44548756');

function CartList() {
    const [cartItems, setCartItems] = useState([]);
    const [preferenceId, setPreferenceId] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCart();
                setCartItems(items);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };
        fetchCartItems();
    }, []);

    const handleRemoveItem = async (itemId) => {
        try {
            await removeCartItem(itemId);
            setCartItems(cartItems.filter(item => item.id !== itemId));
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const handleBuy = async () => {
        const items = cartItems.map(item => ({
            title: item.title,
            unit_price: item.price,
            quantity: item.quantity,
        }));

        try {
            const response = await fetch('http://localhost:5000/create_preference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items }),
            });
            const data = await response.json();
            setPreferenceId(data.id);
        } catch (error) {
            console.error('Error creating preference:', error);
        }
    };

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
                            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice}</p>
            <button onClick={handleBuy}>Comprar</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
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
        <ChakraProvider>
            <Nav setSelectedBurger={setSelectedBurger} toggleCart={toggleCart} />
            {showCart ? <CartList /> : (selectedBurger ? <ItemList selectedBurger={selectedBurger} /> : <Inicio />)}
        </ChakraProvider>
    );
}