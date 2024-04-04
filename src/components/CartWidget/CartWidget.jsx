import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import styled from "styled-components";

const StyledCartIcon = styled(TiShoppingCart)`
  color: black;
  font-size: 30px;
`;

export default function CartWidget() {
  return <StyledCartIcon />;
}
