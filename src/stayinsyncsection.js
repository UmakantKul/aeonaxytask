import React from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideLeft = keyframes`
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideRight = keyframes`
  0% { transform: translateX(20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  // align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
  grid-column: span 2;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 2rem;
  animation: ${slideLeft} 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    justify-self: end;
    align-self: start;
    width: 80%;
    margin-bottom: 0;
    animation: ${fadeIn} 1s ease-in-out;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const FeatureCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  animation: ${fadeIn} 0.5s ease-in-out, ${slideUp} 0.5s ease-in-out;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (min-width: 768px) {
    width: 90%;
    margin-bottom: 2rem;
    animation: ${fadeIn} 0.5s ease-in-out, ${slideRight} 0.5s ease-in-out;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const LearnMore = styled.a`
  display: inline-block;
  color: #4285f4;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #1a73e8;
  }
`;

const StayInSyncSection = () => {
  const features = [
    {
      title: "Calendly for Browsers",
      description:
        "Use Calendly while you are on the web, without switching tabs.",
      link: "/browsers",
    },
    {
      title: "Calendly for Mobile",
      description: "Book meetings, get notifications, & more on the go.",
      link: "/mobile",
    },
    {
      title: "Calendly for CRMs",
      description: "Make booking meetings simple for teams who use CRMs.",
      link: "/crms",
    },
    {
      title: "Payments",
      description:
        "Streamline payments for Calendly events, with Paypal or Stripe.",
      link: "/payments",
    },
  ];

  return (
    <Section>
      <SectionTitle>Stay in sync from any app, on any device</SectionTitle>
      <FeatureImage
        src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063163.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=ais"
        alt="Stay in sync"
      />
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <LearnMore href={feature.link}>Learn more</LearnMore>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Section>
  );
};

export default StayInSyncSection;
