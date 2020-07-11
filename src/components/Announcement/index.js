import React from "react";
import styled from "styled-components";
import imgAnnouncement from "./../../assets/images/headerimage.png";
import imgCelebration from "./../../assets/images/celebration.png";

const Container = styled.div`
  display: flex;
  background-color: #ff6c001a;
  border-radius: 1.25rem;
`;

const ImageAnnouncement = styled.img`
  width: 9.375rem;
`;

const Title = styled.p`
  color: #f24704;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  color: #ccc;
  font-size: 0.875rem;
`;

const MoreInformation = styled.p`
  color: #f24704;
  font-size: 0.875rem;
`;

function Announcement() {
  return (
    <Container>
      <ImageAnnouncement src={imgAnnouncement} alt="Announcement" />
      <div>
        <Title>
          $0 delivery for 30 days!
          <img src={imgCelebration} alt="celetration" width="30px" />
        </Title>
        <Description>$0 delivery for orders over $10 for 30 days</Description>
      </div>
      <MoreInformation>Learn more</MoreInformation>
    </Container>
  );
}

export default Announcement;
