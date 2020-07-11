import React, { useState } from "react";
import styled from "styled-components";
import jsonData from "./order.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContanierItemOrder = styled.div`
  display: flex;
  margin: 0.3125rem;
`;

const Image = styled.img`
  width: 4.375rem;
  border-radius: 0.3125rem;
`;

const Detail = styled.span`
  margin: 0.1875rem;
  font-size: 0.75rem;
`;

function Order() {
  const [order] = useState(jsonData);
  return (
    <Container>
      {order.map(ItemOrder => (
        <ContanierItemOrder key={ItemOrder.id}>
          <Image src={ItemOrder.image} alt={ItemOrder.name} />
          <Detail>{ItemOrder.quantity}</Detail>
          <Detail>{ItemOrder.name}</Detail>
          <Detail>${ItemOrder.price}</Detail>
        </ContanierItemOrder>
      ))}
    </Container>
  );
}

export default Order;
