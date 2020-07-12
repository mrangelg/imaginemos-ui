import React from "react";
import styled from "styled-components";
import ClockIcon from "./../../assets/icons/clock.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #5539a3;
  color: #ccc;
  border-radius: 0.625rem;
  padding: 1.25rem;
  margin: 1.25rem 0;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.625rem 0;
`;

const Link = styled.a`
  color: #f8d17f;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
`;

const StyledClockIcon = styled(ClockIcon)`
  width: 1.3rem;
  border-radius: 25%;
  padding: 0.625rem;
  border: 0.0625rem;
  color: #f8d17f;
  background-color: #65479b;
`;

function Address() {
  return (
    <Container>
      <RowContainer>
        <div>625 St Marks Ave</div>
        <Link>Edit</Link>
      </RowContainer>
      <RowContainer>
        <div>
          <StyledClockIcon />
          <span>35 min</span>
        </div>
        <Link>Choose time</Link>
      </RowContainer>
    </Container>
  );
}

export default Address;
