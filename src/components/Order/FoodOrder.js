import React, { useState } from "react";
import styled from "styled-components";
import jsonData from "./order.json";

const ContanierItemOrder = styled.div`
  display: flex;
  margin: 0.3125rem;
`;

const Image = styled.img`
  width: 6.25rem;
  height: 3.75rem;
  @media (min-width: 960px) {
    width: 4.6875rem;
    height: 2.8125rem;
  }
  border-radius: 0.3125rem;
`;

const DetailOrder = styled.span`
  margin: 0.1875rem;
  font-size: 0.75rem;
`;

const TotalPriceOrder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.375rem;
  margin-bottom: 1.875rem;
  font-size: 1rem;
`;

function FoodOrder() {
  const [order] = useState(jsonData);
  return (
    <>
      {order.map(ItemOrder => (
        <ContanierItemOrder key={ItemOrder.id}>
          <Image src={ItemOrder.image} alt={ItemOrder.name} />
          <DetailOrder>{ItemOrder.quantity}</DetailOrder>
          <DetailOrder>{ItemOrder.name}</DetailOrder>
          <DetailOrder>${ItemOrder.price}</DetailOrder>
        </ContanierItemOrder>
      ))}
      {order && (
        <TotalPriceOrder>
          <span>Total</span>
          <span>$25.97</span>
        </TotalPriceOrder>
      )}
    </>
  );
}

export default FoodOrder;
