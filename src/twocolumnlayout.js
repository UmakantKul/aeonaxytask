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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled components for layout
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff; /* Changed to white */
  color: #333; /* Changed to black */
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff; /* Changed to white */
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff; /* Changed to white */
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const InnerLeftColumn = styled.div`
  flex: 1;
  padding: 10px;
`;

const InnerRightColumn = styled.div`
  flex: 1;
  padding: 10px;
`;

const Card = styled.div`
  background-color: #fff; /* Changed to white */
  color: #333; /* Changed to black */
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.5s ease-in-out, ${slideUp} 0.5s ease-in-out;
  transition: transform 0.3s ease-in-out;
  width: calc(50% - 10px); /* Adjusted width for 2-by-2 grid */
  height: 200px; /* Fixed height for equal size */
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
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
  max-width: 400px;
  height: auto;
  border-radius: 4px;
  animation: ${pulse} 2s infinite;
`;

const TwoColumnLayout = () => {
  const features = [
    {
      title: "Workflows",
      description: "Automate communications before and after meetings.",
      link: "/workflows",
      bg: "dark",
    },
    {
      title: "Website scheduling",
      description: "Add Calendly to your website to streamline scheduling.",
      link: "/website-scheduling",
      bg: "dark",
    },
    {
      title: "Calendar Connections",
      description:
        "Connect up to six calendars per user to check real-time availability.",
      link: "/calendar-connections",
      bg: "dark",
    },
    {
      title: "Meeting Polls",
      description:
        "Poll your attendees for their availability and arrive at the best time for most.",
      link: "/meeting-polls",
      bg: "dark",
    },
  ];

  return (
    <OuterContainer>
      <LeftColumn>
        <InnerContainer>
          <InnerLeftColumn>
            {features.slice(0, 2).map((feature, index) => (
              <Card key={index} bg={feature.bg}>
                <div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
                <LearnMore href={feature.link}>Learn more</LearnMore>
              </Card>
            ))}
          </InnerLeftColumn>
          <InnerRightColumn>
            {features.slice(2, 4).map((feature, index) => (
              <Card key={index} bg={feature.bg}>
                <div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
                <LearnMore href={feature.link}>Learn more</LearnMore>
              </Card>
            ))}
          </InnerRightColumn>
        </InnerContainer>
      </LeftColumn>
      <RightColumn>
        <FeatureImage
          src="https://cdn3d.iconscout.com/3d/premium/thumb/computer-calendar-5532244-4623246.png?f=webp"
          alt="Website Scheduling"
        />
      </RightColumn>
    </OuterContainer>
  );
};

export default TwoColumnLayout;
