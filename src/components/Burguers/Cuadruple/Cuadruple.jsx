import React from "react";
import logo from "../../../assets/cuadruple.png"

export default function Doble() {
    return (
        <div>
            <p className="burguer-doble-uno"></p>
            <img src={logo} alt="imagen" />
            <p className="price">Precio: $10.000.00</p>
            <button>Agregar al carrito</button>
        </div>
    );
}