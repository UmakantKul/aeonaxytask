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

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
  grid-column: span 2;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 2rem;
`;

const FeatureItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  animation: ${fadeIn} 0.5s ease-in-out, ${slideUp} 0.5s ease-in-out;
  transition: transform 0.3s ease-in-out;
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

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const ForTeamsSection = () => {
  const features = [
    {
      title: "Admin Management",
      description:
        "Easily manage your organizations users and scheduling processes from one centralized place.",
      link: "/admin-management",
    },
    {
      title: "Security & Compliance",
      description:
        "Trust Calendly to safeguard company data and meet your compliance requirements.",
      link: "/security-compliance",
      image: "https://example.com/security-compliance.jpg",
    },
    {
      title: "Learn more about Calendly for Enterprise",
      description:
        "Contact us to discuss how we can help meet your enterprise availability.",
      link: "/enterprise",
    },
  ];

  return (
    <Section>
      <SectionTitle>For teams of all sizes</SectionTitle>

      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <LearnMore href={feature.link}>Learn more</LearnMore>
          </FeatureItem>
        ))}
      </FeatureList>

      <FeatureImage
        src="https://w7.pngwing.com/pngs/537/359/png-transparent-graphy-statistics-computer-computer-3d-computer-graphics-photography-laptop.png"
        alt="for all team sizes"
      />
    </Section>
  );
};

export default ForTeamsSection;
