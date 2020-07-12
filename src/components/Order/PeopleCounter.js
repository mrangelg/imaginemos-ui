import React from "react";
import styled from "styled-components";
import RightArrowIcon from "./../../assets/icons/right-arrow.svg";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 0;
  padding: 1rem;
`;

const CounterSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const CounterButton = styled.section`
  border: 0.0625rem solid #d7d8d6;
  border-radius: 0.625rem;
  margin: 0.625rem 0;
  padding: 0.25rem;
  height: 1.25rem;
`;

const Button = styled.button`
  border: 0;
  background-color: #fafbf8;
  &:hover {
    cursor: pointer;
  }
`;

const CheckoutLink = styled.a`
  text-decoration: none;
  background-color: #ffd644;
  padding: 1.25rem 1.875rem 1.25rem 1.25rem;
  border-top-left-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  &:hover {
    cursor: pointer;
    background-color: #eebc09;
  }
  &:active {
    background-color: #ffd644;
  }
  position: absolute;
  right: 0;
`;

function PeopleCounter() {
  return (
    <Container>
      <CounterSection>
        <span>Persons</span>
        <CounterButton>
          <Button type="button">-</Button>
          12
          <Button type="button">+</Button>
        </CounterButton>
      </CounterSection>
      <CheckoutLink>
        Chekout <RightArrowIcon width="0.7rem" />
      </CheckoutLink>
    </Container>
  );
}

export default PeopleCounter;
