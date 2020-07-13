import React from "react";
import styled from "styled-components";

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

const ProductDetail = styled.span`
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

function ProductList({ peopleQuantity, products }) {
  return (
    <>
      {products.map(product => (
        <ContanierItemOrder key={product.id}>
          <Image src={product.image} alt={product.name} />
          <ProductDetail>{product.quantity}</ProductDetail>
          <ProductDetail>{product.name}</ProductDetail>
          <ProductDetail>${product.price * product.quantity}</ProductDetail>
        </ContanierItemOrder>
      ))}
      {products && (
        <TotalPriceOrder>
          <span>Total</span>
          <span>
            $
            {(
              products.reduce(
                (acc, product) => acc + product.quantity * product.price,
                0
              ) * peopleQuantity
            ).toFixed(2)}
          </span>
        </TotalPriceOrder>
      )}
    </>
  );
}

export default ProductList;
