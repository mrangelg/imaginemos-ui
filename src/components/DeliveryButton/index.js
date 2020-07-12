import React from "react";
import styled from "styled-components";
import Clock from "./../../assets/icons/clock.svg";

const Button = styled.button`
  background-color: #ff6223;
  border: 0;
  padding: 0.625rem;
  font-size: 0.6rem;
  color: #fff;
  border-radius: 1.25rem;
  &:hover {
    background-color: #f05111;
  }
`;

function DeliveryButton() {
  return (
    <Button type="button">
      <Clock width="0.75rem" /> Delivery: Now
    </Button>
  );
}

export default DeliveryButton;