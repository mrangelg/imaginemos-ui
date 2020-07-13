import React from "react";
import styled from "styled-components";
import imgAnnouncement from "./../../assets/images/headerimage.png";
import imgCelebration from "./../../assets/images/celebration.png";
import RightArrowIcon from "./../../assets/icons/right-arrow.svg";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  background-color: rgba(254, 247, 236, 1);
  border-radius: 1.25rem;
  margin: 1.875rem 0;
  padding: 0.625rem;
  position: relative;
`;

const ImageAnnouncement = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
    width: 6rem;
    position: absolute;
    bottom: 0;
    left: 1.875rem;
  }
  @media (min-width: 960px) {
    width: 8rem;
  }
`;

const AnnouncementText = styled.div`
  align-self: center;
`;

const Title = styled.p`
  color: rgba(252, 108, 59, 1);
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.3125rem;
  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
  @media (min-width: 960px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  color: rgba(175, 170, 164, 1);
  font-size: 0.65rem;
  margin-top: 0;
  @media (min-width: 960px) {
    font-size: 0.7rem;
  }
`;

const MoreInformation = styled.a`
  color: rgba(252, 108, 59, 1);
  font-size: 0.65rem;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
  @media (min-width: 960px) {
    font-size: 0.7rem;
  }
`;

function Announcement() {
  return (
    <Container>
      <ImageAnnouncement src={imgAnnouncement} alt="Announcement" />
      <AnnouncementText>
        <Title>
          $0 delivery for 30 days!
          <img src={imgCelebration} alt="celetration" width="20px" />
        </Title>
        <Description>$0 delivery for orders over $10 for 30 days</Description>
      </AnnouncementText>
      <MoreInformation>
        Learn more <RightArrowIcon width="10px" />
      </MoreInformation>
    </Container>
  );
}

export default Announcement;
