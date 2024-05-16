import logo from '../../assets/hambur.png';
import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar({ setSelectedBurger, toggleCart }) {
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
                    <Navbar.Brand href="#home" className='Nav-item'>
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
                        <Nav className='Nav-item'>
                            <Nav.Link onClick={handleInicioClick} href="#home">Inicio</Nav.Link>
                            <StyledDropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Hamburguesas
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown'>
                                        <Dropdown.Item className='dropdown-text' onClick={() => handleBurgerSelect('doble')}>Doble</Dropdown.Item>
                                        <Dropdown.Item className='dropdown-text' onClick={() => handleBurgerSelect('triple')}>Triple</Dropdown.Item>
                                        <Dropdown.Item className='dropdown-text' onClick={() => handleBurgerSelect('cuadruple')}>Cuadruple</Dropdown.Item>
                                        <Dropdown.Item className='dropdown-text' onClick={() => handleBurgerSelect('quintuple')}>Quintuple</Dropdown.Item>
                                    </Dropdown.Menu>
                            </StyledDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget toggleCart={toggleCart} className='Nav-item'/>
                </Navbar>
            </StyledContainer>
        </>
    );
}

const StyledContainer = styled.nav`
    .Nav {
        padding: 0px 20px 0px 20px;
        border-radius: 3px;
    }

    .Nav .Nav-item{
        margin-right: 100px;
    }

    .dropdown-text {
        color: #333;
    }

    background-color: #333;
    padding: 3px 20px 3px 20px;
    display: flex;
    justify-content: center;

`;

const StyledDropdown = styled(Dropdown)`
    #dropdown-basic {
        color: whitesmoke;
        background-color: #333;
    }
    .dropdown-menu {
        background-color: whitesmoke;
    }
`;