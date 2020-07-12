import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  &:hover,
  &.active {
    > div {
      background-color: #ffd644;
      cursor: pointer;
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

function Category({ activeFilter, handleActiveFilter }) {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/categories.json")
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>Loading ... </h2>
      ) : (
        <Container>
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              className={activeFilter === category.name ? "active" : ""}
              onClick={() => handleActiveFilter(category.name)}
            >
              <CategoryImage>
                <Image src={category.icon} alt={category.name} />
              </CategoryImage>
              <CategoryName>
                <span>{category.name}</span>
              </CategoryName>
            </CategoryCard>
          ))}
        </Container>
      )}
    </>
  );
}

export default Category;
