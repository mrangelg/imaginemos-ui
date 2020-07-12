import React, { useState } from "react";
import styled from "styled-components";
import "./styles.scss";

const Container = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled.a`
  color: #000;
  border-radius: 50%;
  width: 0.9375rem;
  text-decoration: none;
  &:active {
    background-color: #ccc;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

function MenuOption() {
  const [isOpen, setIsOpen] = useState(false);
  const classContainer = isOpen ? "expanded" : "collapsed";
  return (
    <Container>
      <ToggleButton href="#" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </ToggleButton>
      <LinksContainer className={classContainer}>Options ...</LinksContainer>
    </Container>
  );
}

export default MenuOption;
