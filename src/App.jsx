import React, { useState } from 'react';
import Nav from './components/NavBar/Nav';
import ItemList from './components/ItemListContainer/ItemList';
import Inicio from './components/Inicio/Inicio';

export default function App() {
    const [selectedBurger, setSelectedBurger] = useState(null);

    return (
        <>
            <Nav setSelectedBurger={setSelectedBurger} />
            {selectedBurger ? <ItemList selectedBurger={selectedBurger} /> : <Inicio />}
        </>
    );
}