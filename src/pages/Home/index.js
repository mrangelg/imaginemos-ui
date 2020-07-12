import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Announcement,
  Category,
  DeliveryButton,
  MenuOption,
  Order,
  Product,
  Search
} from "./../../components";
import HamburgerIcon from "./../../assets/icons/hamburger.svg";
import "./styles.scss";

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

const MainContent = styled.section`
  display: flex;
  flex-flow: column wrap;
  box-sizing: border-box;
  padding: 1.25rem 3.75rem;
  width: 100%;
  @media (min-width: 960px) {
    width: 70%;
  }
`;

const Sidebar = styled.div`
  box-sizing: border-box;
  width: 100%;
  @media (min-width: 960px) {
    width: 30%;
  }
  background-color: #fafbf8;
`;

const TopMainContent = styled.section`
  display: flex;
  margin: 0.9375rem 0;
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
`;

const TopCategory = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
  margin-right: 0.625rem;
`;

const UserName = styled.div`
  margin: 0 3.125rem 0 0.625rem;
  font-weight: bold;
  font-size: 0.875rem;
`;

function Home() {
  const [productList, setProductList] = useState();
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProducts, setfilteredProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products.json")
      .then(res => res.json())
      .then(data => {
        setProductList(data);
        setfilteredProducts(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  const handleActiveFilter = filter => {
    let filteredProductList;
    if (filter === "All") {
      filteredProductList = productList;
    } else {
      filteredProductList = productList.filter(product =>
        product.categories.includes(filter)
      );
    }
    setActiveFilter(filter);
    setfilteredProducts(filteredProductList);
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading ... </h2>
      ) : (
        <Container>
          <MainContent>
            <TopMainContent>
              <MenuOption />
              <UserName>Chukwudi</UserName>
              <Search />
            </TopMainContent>
            <Announcement />
            <CategorySection>
              <TopCategory>
                <div>
                  <Title>Restaurants</Title>
                  <HamburgerIcon width="15px" />
                </div>
                <DeliveryButton />
              </TopCategory>
              <Category
                activeFilter={activeFilter}
                handleActiveFilter={handleActiveFilter}
              />
            </CategorySection>
            <Product products={filteredProducts} />
          </MainContent>
          <Sidebar>
            <Order />
          </Sidebar>
        </Container>
      )}
    </>
  );
}

export default Home;
