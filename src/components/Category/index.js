import React, { useState } from "react";
import styled from "styled-components";
import jsonData from "./categories.json";

const Container = styled.div`
  display: flex;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    > div {
      background-color: #ffd644;
    }
  }
`;

const CategoryCardInner = styled.div`
  width: 2.5rem;
  height: 2.4rem;
  padding: 0.3125rem;
  font-size: 0.75rem;
  box-shadow: 0 0 4.375rem #d9d3d3;
  text-align: center;
`;

const CategoryImage = styled(CategoryCardInner)`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin: 0.5rem 0.5rem 0 0.5rem;
`;

const CategoryName = styled(CategoryCardInner)`
  margin: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const Image = styled.img`
  width: 0.8rem;
  border-radius: 50%;
  padding: 0.625rem;
  border: 0.0625rem solid #ccc;
  background-color: white;
`;

function Category() {
  const [categories] = useState(jsonData);
  return (
    <Container>
      {categories.map(category => (
        <CategoryCard key={category.id}>
          <CategoryImage>
            <Image src={category.icon} alt={category.name} />
          </CategoryImage>
          <CategoryName>
            <span>{category.name}</span>
          </CategoryName>
        </CategoryCard>
      ))}
    </Container>
  );
}

export default Category;
