import React, { useState } from 'react';
import Nav from './components/NavBar/Nav';
import ItemList from './components/ItemListContainer/ItemList';
import Inicio from './components/Inicio/Inicio';
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/ItemCount/ItemCount'

export default function App() {
    const [selectedBurger, setSelectedBurger] = useState(null);

    return (
        <>
            <ChakraProvider>
                <Nav setSelectedBurger={setSelectedBurger} />
                {selectedBurger ? <ItemList selectedBurger={selectedBurger} /> : <Inicio />}
                <ItemCount />
            </ChakraProvider>
        </>
    );
}