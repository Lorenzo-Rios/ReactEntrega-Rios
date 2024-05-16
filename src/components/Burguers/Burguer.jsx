import React from "react";
import logo from "../../assets/cuadruple.png"
import { addCart } from "../../utils/cart/cart";

export default function Burguer({ price, title, img, id }) {

    async function handleCart() {
        await addCart({ id, price, title, quantity: 4 })
    }

    return (
        <div>
            <p className="burguer-doble-uno"></p>
            <img src={logo} alt="imagen" />
            <p className="price">Precio: {price}</p>
            <button>Agregar al carrito</button>
        </div>
    );
}