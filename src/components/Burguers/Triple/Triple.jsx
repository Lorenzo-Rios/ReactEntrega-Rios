import React from "react";
import logo from "../../../assets//newtriple.png"

export default function Doble() {
    return (
        <div>
            <p className="burguer-doble-uno"></p>
            <img src={logo} alt="imagen" />
            <p className="price">Precio: $8.000.00</p>
            <button>Agregar al carrito</button>
        </div>
    );
}