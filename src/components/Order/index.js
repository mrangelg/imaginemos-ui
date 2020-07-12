import React from "react";
import styled from "styled-components";
import DisplayQuantityPeople from "./DisplayQuantityPeople";
import AddressOrder from "./AddressOrder";
import FoodOrder from "./FoodOrder";
import PeopleCounter from "./PeopleCounter";

const Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  box-sizing: border-box;
  width: 100%;
  padding: 2.1875rem;
`;

function Order() {
  return (
    <Container>
      <DisplayQuantityPeople />
      <h2>
        My
        <span role="img" aria-label="Emoji smiley face">
          😎
        </span>
        <br />
        Order
      </h2>
      <AddressOrder />
      <FoodOrder />
      <PeopleCounter />
    </Container>
  );
}

export default Order;
