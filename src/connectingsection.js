import React from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #0c1727 75%, #fff 25%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Adjust minmax width as needed */
  grid-gap: 2rem;
  justify-content: center;
  align-items: stretch;
  width: 100%;
`;

const FeatureCard = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  padding: 1.5rem;
  animation: ${fadeIn} 0.5s ease-in-out;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
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

const ConnectingSection = () => {
  const features = [
    {
      title: "Availability Preferences",
      description: "Customize exactly how and when you are booked.",
      link: "/availability-preferences",
    },
    {
      title: "Teams Scheduling",
      description:
        "The automated scheduling you know and love – for multi-person meetings.",
      link: "/teams-scheduling",
    },
    {
      title: "Routing Forms",
      description:
        "Request information to efficiently screen and qualify people before they can schedule with you.",
      link: "/routing-forms",
    },
  ];

  return (
    <Section>
      <SectionTitle>Spend more time connecting, not scheduling</SectionTitle>
      <SectionSubtitle>
        Book more meetings and hit goals faster by streamlining your scheduling
        process and automating manual busywork
      </SectionSubtitle>
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

export default ConnectingSection;
