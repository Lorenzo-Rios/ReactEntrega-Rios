import React from 'react';
import Doble from '../Burguers/Doble/Doble';
import Triple from '../Burguers/Triple/Triple';
import Cuadruple from '../Burguers/Cuadruple/Cuadruple';
import Quintuple from '../Burguers/Quintuple/Quintuple';

export default function ItemList({ selectedBurger }) {
    return (
        <div>
            {selectedBurger === 'doble' && <Doble />}
            {selectedBurger === 'triple' && <Triple />}
            {selectedBurger === 'cuadruple' && <Cuadruple />}
            {selectedBurger === 'quintuple' && <Quintuple />}
        </div>
    );
}