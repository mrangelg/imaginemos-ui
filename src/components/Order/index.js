import React, { useState } from "react";
import styled from "styled-components";
import ProductQuantity from "./ProductQuantity";
import Address from "./Address";
import ProductList from "./ProductList";
import PeopleCounter from "./PeopleCounter";
import products from "./order.json";

const Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  box-sizing: border-box;
  width: 100%;
  padding: 2.1875rem;
`;

function Order() {
  const [peopleQuantity, setPeopleQuantity] = useState(1);

  const handleIncrease = () => {
    setPeopleQuantity(peopleQuantity + 1);
  };

  const handleDecrease = () => {
    if (peopleQuantity > 1) {
      setPeopleQuantity(peopleQuantity - 1);
    }
  };

  return (
    <Container>
      <ProductQuantity
        productQuantity={products.reduce(
          (acc, product) => acc + product.quantity,
          0
        )}
      />
      <h2>
        My
        <span role="img" aria-label="Smiley Face Emoji">
          😎
        </span>
        <br />
        Order
      </h2>
      <Address />
      <ProductList products={products} peopleQuantity={peopleQuantity} />
      <PeopleCounter
        peopleQuantity={peopleQuantity}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
    </Container>
  );
}

export default Order;
