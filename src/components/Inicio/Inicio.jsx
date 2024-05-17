import React from 'react';
import styled from 'styled-components';
import Burguer from '../Burguers/Burguers';
import BurguerDobleIMG from '../../assets/newdoble.png';
import BurguerTripleIMG from '../../assets/newtriple.png';
import BurguerCuadrupleIMG from '../../assets/cuadruple.png';
import BurguerQuintupleIMG from '../../assets/newquintuple.jpg';
import Footer from '../Footer/Footer';

// Estilos con Styled Components
const InicioContainer = styled.div`
    text-align: center;
`;

const BurguerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export default function Inicio() {
    return (
        <InicioContainer>
            <h1>Local de hamburguesas</h1>
            <p>Bienvenido a nuestro local de hamburguesa, navega por el menú desplegable para especificar tu pedido!</p>
            <BurguerList>
                <Burguer price={7000} title={"DobleTasty"} img={BurguerDobleIMG} id={1} />
                <Burguer price={10000} title={"TripleYanki"} img={BurguerTripleIMG} id={2} />
                <Burguer price={12000} title={"CuadrupleMonster"} img={BurguerCuadrupleIMG} id={3} />
                <Burguer price={14000} title={"QuintupleChess"} img={BurguerQuintupleIMG} id={4} />
            </BurguerList>
            <Footer />
        </InicioContainer>
    );
}