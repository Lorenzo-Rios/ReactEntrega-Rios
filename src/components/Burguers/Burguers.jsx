import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/cuadruple.png";
import { addCart } from "../../utils/cart/cart";

// Estilos con Styled Components
const BurguerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 250px;

    img {
        width: 200px;
        height: auto;
        margin-bottom: 10px;
    }

    .price {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .quantity-container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        button {
            background-color: black;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 0 5px;
            padding: 5px 10px;
            font-size: 18px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: rebeccapurple;
            }
        }

        h4 {
            margin: 0 10px;
            font-size: 18px;
        }
    }

    button {
        background-color: black;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px 20px;
        font-size: 18px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rebeccapurple;
        }
    }
`;

export default function Burguer({ price, title, img, id }) {
    const [quantity, setQuantity] = useState(1);
    const stock = 5;

    const incrementar = () => {
        setQuantity(quantity < stock ? quantity + 1 : quantity);
    };

    const decrementar = () => {
        setQuantity(quantity > 1 ? quantity - 1 : quantity);
    };

    async function handleCart() {
        try {
            await addCart({ id, price, title, quantity });
            alert("Producto agregado al carrito");
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }

    return (
        <BurguerContainer>
            <img src={img || logo} alt="imagen" />
            <p className="price">Precio: {price}</p>
            <div className="quantity-container">
                <button onClick={decrementar}>-</button>
                <h4>{quantity}</h4>
                <button onClick={incrementar}>+</button>
            </div>
            <button onClick={handleCart}>Agregar al carrito</button>
        </BurguerContainer>
    );
}