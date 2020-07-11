import React, { useState } from "react";
import styled from "styled-components";
import jsonData from "./products.json";

const Container = styled.div`
  display: flex;
`;

const ProductCard = styled.div`
  margin: 0.5rem;
  font-size: 0.75rem;
`;

const ContainerImage = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.625rem;
`;

const PreparationTime = styled.div`
  position: absolute;
  bottom: 0.125rem;
  border-radius: 0 0.625rem;
  width: 33%;
  height: 1.875rem;
  background-color: #e8e7e7;
`;

function Product() {
  const [products] = useState(jsonData);
  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ContainerImage>
            <Image src={product.image} alt={product.name} />
            <PreparationTime>{product.time}</PreparationTime>
          </ContainerImage>
          <span>{product.name}</span>
          <span>{product.qualification}</span>
          <span>${product.price}</span>
        </ProductCard>
      ))}
    </Container>
  );
}

export default Product;
