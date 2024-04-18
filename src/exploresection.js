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
const Exploresection = styled.section`
  background-color: #1a1a1a;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  animation: ${fadeIn} 0.5s ease-in-out, ${slideUp} 0.5s ease-in-out;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const CardDescription = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const LearnMore = styled.a`
  display: inline-block;
  color: #4285f4;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1a73e8;
  }
`;

const ExploreSection = () => {
  const cardData = [
    {
      image:
        "https://s22909.pcdn.co/wp-content/uploads/2018/01/sales-team.png.webp",
      title: "Sales",
      description: "Get to your best leads faster",
      link: "/sales",
    },
    {
      image:
        "https://www.techfunnel.com/wp-content/uploads/2021/08/recruiter_training.png",
      title: "Recruiting",
      description: "Less emailing, more interviews",
      link: "/recruiting",
    },
    {
      image:
        "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/4/64f71be97efaa2b14e21082aa376b7b7e837614750687df9a916ec6b66faa7b5/customer-success-team-slide1.png",
      title: "Customer Success",
      description: "Connect with customers when it matters",
      link: "/customer-success",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbELWzUT36YnOwRXbkA4DbDDIj4QknH8tLPyjd3rA8g&s",
      title: "Education",
      description: "Boost student success",
      link: "/education",
    },
  ];

  return (
    <Exploresection>
      <SectionTitle>Discover more ways to work with Calendly</SectionTitle>
      <CardContainer>
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <LearnMore href={card.link}>Learn more</LearnMore>
          </Card>
        ))}
      </CardContainer>
    </Exploresection>
  );
};

export default ExploreSection;
