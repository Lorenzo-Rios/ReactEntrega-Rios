import logo from '../../assets/hambur.png';
import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const Tit = "Tu carrito";

export default function NavBar({ setSelectedBurger }) {
    const handleBurgerSelect = (burger) => {
        setSelectedBurger(burger);
    };

    const handleInicioClick = () => {
        setSelectedBurger(null); 
    };

    return (
        <>
            <StyledContainer>
                <Navbar bg="light" expand="lg" className='Nav'>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block-align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={handleInicioClick} href="#home">Inicio</Nav.Link> {/* Modificado aquí */}
                            {/* Otros elementos del navbar */}
                            <StyledDropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Hamburguesas
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleBurgerSelect('doble')}>Doble</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleBurgerSelect('triple')}>Triple</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleBurgerSelect('cuadruple')}>Cuadruple</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleBurgerSelect('quintuple')}>Quintuple</Dropdown.Item>
                                    </Dropdown.Menu>
                            </StyledDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </StyledContainer>

            <StyledCartWidget>
                <h3 className="Tit">{Tit}</h3>
                <CartWidget className="Cart"/>
            </StyledCartWidget>
        </>
    );
}

const StyledCartWidget = styled.div`
    display: flex;

    .Tit {
        color: #333;
        font-size: 20px;
        font-family: sans-serif;
        font-weight: 300;
        padding: 5px;
    }

    border: solid 1.5px black;

    justify-content: space-between;
`;

const StyledContainer = styled.nav`
    .Nav {
        padding: 0px 20px 0px 20px;
        border-radius: 3px;
    }
    background-color: #333;
    padding: 3px 20px 3px 20px;
    display: flex;
    justify-content: center;
`;

const StyledDropdown = styled(Dropdown)`
    .dropdown-menu {
        background-color: #333;
    }
`;
