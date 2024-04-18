import React from "react";
import styled from "styled-components";

// Styled components for the HeroSection
const HeroContainer = styled.section`
  background-color: #fff; /* White background color */
  color: #000; /* Black text color */
  padding: 50px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; /* Allow content to wrap on smaller screens */
`;

const Headline = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2.5rem; /* Increase font size on larger screens */
  }
`;

const BoldBlueText = styled.span`
  color: #3498db; /* Blue color */
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.5rem; /* Increase font size on larger screens */
  }
`;

const HeroImage = styled.img`
  width: 100%; /* Set image width to 100% of container */
  max-width: 500px; /* Limit max width for smaller screens */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px;
`;

const StartButton = styled.button`
  background-color: #3498db; /* Blue background color */
  color: #fff; /* White text color */
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px; /* Border radius of 5px */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9; /* Darker blue color on hover */
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <div>
        <Headline>
          Take the hassle out of <br />
          <BoldBlueText>Scheduling</BoldBlueText>
        </Headline>
        <Description>
          Streamline your scheduling process with our easy-to-use app.
        </Description>
        <StartButton>Start for Free</StartButton>
      </div>
      <HeroImage src="images/hero-image1.png" alt="Hero" />
    </HeroContainer>
  );
};

export default HeroSection;
