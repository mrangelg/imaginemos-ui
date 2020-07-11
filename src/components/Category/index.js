import React, { useState } from "react";
import styled from "styled-components";
import jsonData from "./categories.json";

const Container = styled.div`
  display: flex;
`;

const CategoryCard = styled.div`
  width: 2.5rem;
  height: 4.375rem;
  margin: 0.5rem;
  padding: 0.3125rem;
  border-radius: 30%;
  border: 0.0625rem solid #000;
  font-size: 0.75rem;
  text-align: center;
`;

const ContainerImg = styled.div`
  border-radius: 50%;
  border: 0.0625rem solid #000;
`;

const Image = styled.img`
  width: 80%;
`;

function Category() {
  const [categories] = useState(jsonData);
  return (
    <Container>
      {categories.map(category => (
        <CategoryCard key={category.id}>
          <ContainerImg>
            <Image src={category.icon} alt={category.name} />
          </ContainerImg>
          <span>{category.name}</span>
        </CategoryCard>
      ))}
    </Container>
  );
}

export default Category;
