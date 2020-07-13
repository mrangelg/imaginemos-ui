import React from "react";
import styled from "styled-components";
import Clock from "./../../assets/icons/clock.svg";

const Button = styled.button`
  background-color: #ff6223;
  border: 0;
  padding: 0.625rem;
  font-size: 0.8rem;
  color: #fff;
  border-radius: 1.25rem;
  &:hover {
    cursor: pointer;
    background-color: #f05111;
  }
  &:active {
    background-color: #ff6223;
  }
`;

function DeliveryButton() {
  return (
    <Button type="button">
      <Clock width="12px" /> Delivery: Now
    </Button>
  );
}

export default DeliveryButton;
