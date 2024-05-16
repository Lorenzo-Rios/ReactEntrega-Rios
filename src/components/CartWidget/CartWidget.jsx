import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import styled from "styled-components";

const StyledCartIcon = styled(TiShoppingCart)`
  color: black;
  font-size: 30px;
  cursor: pointer;
`;

export default function CartWidget({ onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Llama a la función onClick proporcionada por el componente padre
    }
  };

  return <StyledCartIcon onClick={handleClick} />;
}