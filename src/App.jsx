import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from './components/NavBar/Nav';
import ItemList from './components/ItemListContainer/ItemList';
import Inicio from './components/Inicio/Inicio';
import Modal from './components/Modal/Modal';
import CardSelect from './components/CardSelect/CardSelect';
import { ChakraProvider } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { getCart, removeCartItem } from './utils/cart/cart'; // Importar funciones de cart.js
import { remove } from 'firebase/database';

// Estilos con Styled Components
const Container = styled.div`
    font-family: Arial, sans-serif;
`;

const CartTitle = styled.h2`
    color: #333;
    text-align: center;
`;

const CartItem = styled.li`
    margin-bottom: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartItemContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemInfo = styled.div`
    flex-grow: 1;
`;

const ItemName = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

const ItemQuantity = styled.span`
    font-size: 16px;
    color: #666;
`;

const ItemPrice = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

const RemoveButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #999;
    transition: color 0.3s ease;

    &:hover {
        color: #ff0000;
    }
`;

const TotalPrice = styled.p`
    text-align: center; /* Alinear al centro */
    font-weight: bold;
    margin-top: 20px;
`;

const BuyButton = styled.button`
    display: block;
    margin: 20px auto; /* Centrar horizontalmente */
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const CartList = ({ onBuyClick }) => {
    const [cartItems, setCartItems] = useState([]);

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
            const updatedCart = await getCart(); // Actualizar el carrito después de eliminar un artículo
            setCartItems(updatedCart);
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <Container>
            <CartTitle>Carrito de Compras</CartTitle>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <CartItem key={index}>
                            <CartItemContent>
                                <ItemInfo>
                                    <ItemName>{item.title}</ItemName>
                                    <ItemQuantity>Cantidad: {item.quantity}</ItemQuantity>
                                </ItemInfo>
                                <ItemPrice>${item.price * item.quantity}</ItemPrice>
                                <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                                    <AiOutlineClose />
                                </RemoveButton>
                            </CartItemContent>
                        </CartItem>
                    ))}
                </ul>
            )}
            <TotalPrice>Total: ${totalPrice}</TotalPrice>
            <BuyButton onClick={onBuyClick}>Comprar</BuyButton>
        </Container>
    );
};

const AppContainer = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    input, select {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
    }

    input:focus, select:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const ConfirmationContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const ConfirmationMessage = styled.p`
    font-weight: bold;
`;

const ConfirmationButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const App = () => {
    const [selectedBurger, setSelectedBurger] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const handleBuyClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
        setShowCart(false); // Cerrar el carrito al confirmar el pedido
        setShowModal(false); // Cerrar el modal al confirmar el pedido
    };

    const handleCardChange = (selectedOption) => {
        setSelectedCard(selectedOption);
    };

    const handlePayment = async () => {
        // Realizar el procesamiento del pago aquí
        // Por simplicidad, simularemos el procesamiento del pago con un tiempo de espera de 2 segundos
        setTimeout(async () => {
            await removeCartItem(remove.apply); // Vaciar el carrito al realizar el pago
            setShowConfirmation(true);
        }, 2000);
    };

    return (
        <ChakraProvider>
            <Nav setSelectedBurger={setSelectedBurger} toggleCart={toggleCart} />
            <AppContainer>
                {showCart ? (
                    <CartList onBuyClick={handleBuyClick} />
                ) : (
                    selectedBurger ? <ItemList selectedBurger={selectedBurger} /> : <Inicio />
                )}
            </AppContainer>
            <Modal show={showModal} handleClose={handleCloseModal}>
                {!showConfirmation ? (
                    <FormContainer>
                        <CardSelect selectedCard={selectedCard} handleCardChange={handleCardChange} />
                        <input type="text" placeholder="Nombre completo" />
                        <input type="number" placeholder="DNI" />
                        <input type="number" placeholder="Número de tarjeta" />
                        <input type="number" placeholder="CVV" />
                        <input type="number" placeholder="Código postal" />
                        <input type="text" placeholder="Direccion entre calles" />
                        <input type="text" placeholder="Numero de casa/Departamento" />
                        <input type="number" placeholder="Numero de celular" />
                        <BuyButton onClick={handlePayment}>Pagar</BuyButton>
                    </FormContainer>
                ) : (
                    <ConfirmationContainer>
                        <ConfirmationMessage>Su pedido llegará a destino en aproximadamente 1 hora.</ConfirmationMessage>
                        <ConfirmationButton onClick={handleCloseConfirmation}>Aceptar</ConfirmationButton>
                    </ConfirmationContainer>
                )}
            </Modal>
        </ChakraProvider>
    );
};

export default App;