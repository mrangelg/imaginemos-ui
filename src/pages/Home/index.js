import React from "react";
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
  return (
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
              <HamburgerIcon width="0.9375rem" />
            </div>
            <DeliveryButton />
          </TopCategory>
          <Category />
        </CategorySection>
        <Product />
      </MainContent>
      <Sidebar>
        <Order />
      </Sidebar>
    </Container>
  );
}

export default Home;
