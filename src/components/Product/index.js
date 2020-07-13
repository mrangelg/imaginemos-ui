import React from "react";
import styled from "styled-components";
import StarIcon from "./../../assets/icons/star.svg";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6rem;
  font-size: 0.75rem;
  width: 100%;
  @media (min-width: 600px) {
    width: 20%;
  }
  @media (min-width: 960px) {
    width: 30%;
  }
`;

const ContainerImage = styled.div`
  position: relative;
  &:hover {
    transform: scale(1.03);
  }
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
  padding: 0.4375rem 0.25rem;
  background-color: #e8e7e7;
  font-size: 0.5625rem;
  text-align: center;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.span`
  font-weight: bold;
  margin: 0.3125rem 0;
`;

function Product({ products }) {
  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ContainerImage>
            <Image src={product.image} alt={product.name} />
            <PreparationTime>{product.time}</PreparationTime>
          </ContainerImage>
          <ProductName>{product.name}</ProductName>
          <Details>
            <span>
              <StarIcon width="12px" /> {product.qualification}
            </span>
            <span>${product.price}</span>
          </Details>
        </ProductCard>
      ))}
    </Container>
  );
}

export default Product;
