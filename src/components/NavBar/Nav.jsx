import logo from '../../assets/hambur.png'
import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
            <StyledContainer>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        {/* Otros elementos del navbar */}
                        <StyledDropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Hamburguesas
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <StyledDropdownItem href="#burguer-doble">Doble</StyledDropdownItem>
                                <StyledDropdownItem href="#burguer-triple">Triple</StyledDropdownItem>
                                <StyledDropdownItem href="#burguer-cuadruple">Cuadruple</StyledDropdownItem>
                                <StyledDropdownItem href="#burguer-quintuple">Quintuple</StyledDropdownItem>
                            </Dropdown.Menu>
                        </StyledDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.nav`
    background-color: #333;
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const StyledDropdown = styled(Dropdown)`
    background-color: #333;
    .dropdown-menu {
        background-color: black;
    }
`;

const StyledDropdownItem = styled(Dropdown.Item)`
  color: white;
  background-color: #333;
`;

const Doble = async () =>{
  try{
    
  }catch{

  }
}
Doble();