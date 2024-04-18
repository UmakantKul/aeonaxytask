import React from "react";
import styled, { keyframes } from "styled-components";

const SectionContainer = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const buttonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
  animation: ${buttonAnimation} 1s infinite;

  &:hover {
    background-color: #0056b3;
  }
`;

const Section = () => {
  return (
    <SectionContainer>
      <Heading>We take the manual work out of scheduling</Heading>
      <Description>
        Get instant access to all of these features and more, so you can have
        more productive meetings without the back-and-forth
      </Description>
      <ButtonContainer>
        <Button>Start for free</Button>
        <Button>Contact Sales</Button>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default Section;
