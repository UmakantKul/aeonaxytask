import React from "react";
import styled from "styled-components"; 
import { Link } from "react-router-dom";

// Define styles for the header container
const HeaderContainer = styled.header`
  background-color: #fff; /* White background color for navbar */
  color: #000; /* Black text color */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on small screens */
    text-align: center; /* Center align text on small screens */
  }
`;

// Define styles for the logo
const Logo = styled.img`
  width: 100px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;

// Define styles for the navigation menu
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  /* Style links */
  a {
    color: #000; /* Black text color for links */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    /* Hover effect */
    &:hover {
      color: #3498db; /* Blue color on hover */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on small screens */
    gap: 10px;
  }
`;

// Define styles for the login button and get started button
const LoginButton = styled.button`
  background-color: transparent;
  color: #000; /* Black text color for button */
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const GetStartedButton = styled.button`
  background-color: #3498db; 
  color: #fff; 
  border: none;
  border-radius: 20px; 
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="images/logo.png" alt="Logo" />
      <Nav>
        <Link to="/">Individuals</Link>
        <Link to="/ForTeamSection">Teams</Link>
        <Link to="/StayInSyncSection">Enterprise</Link>
        <Link to="/TwoColumnLayout">Product</Link>
        <Link to="/ConnectingSection">Pricing</Link>
        <Link to="/ExploreSection">Resources</Link>
      </Nav>
      <div>
        <LoginButton>Login</LoginButton>
        <GetStartedButton>Get Started</GetStartedButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
