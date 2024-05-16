import React, { useState } from "react";
import logo from "../../assets/cuadruple.png";
import { addCart } from "../../utils/cart/cart";
import masIMG from "../../assets/mas.png";

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
        <div>
            <p className="burguer-doble-uno"></p>
            <img src={img || logo} alt="imagen" />
            <p className="price">Precio: {price}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <button onClick={decrementar}>-</button>
                <h4 style={{ margin: '0 10px' }}>{quantity}</h4>
                <button onClick={incrementar} src={masIMG}></button>
            </div>
            <button onClick={handleCart}>Agregar al carrito</button>
        </div>
    );
}