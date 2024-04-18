import React from "react";
import styled, { keyframes } from "styled-components";
import ebayLogo from "./ebay-logo.png";
import ancestryLogo from "./ancestry-logo.png";
import lyftLogo from "./lyft-logo.png";
import lorealLogo from "./loreal-logo.png";
import compassLogo from "./compass-logo.png";
import googleLogo from "./google-logo.png";

const LogoSlider = () => {
  return (
    <SliderContainer>
      <SliderTitle>
        Simplified scheduling for more than 10,000,000 users worldwide
      </SliderTitle>
      <LogoWrapper>
        <LogoAnimation>
          <LogoLoop>
            <LogoItem>
              <Logo src={ebayLogo} alt="ebay" />
            </LogoItem>
            <LogoItem>
              <Logo src={ancestryLogo} alt="ancestry" />
            </LogoItem>
            <LogoItem>
              <Logo src={lyftLogo} alt="lyft" />
            </LogoItem>
            <LogoItem>
              <Logo src={lorealLogo} alt="loreal" />
            </LogoItem>
            <LogoItem>
              <Logo src={compassLogo} alt="compass" />
            </LogoItem>
            <LogoItem>
              <Logo src={googleLogo} alt="google" />
            </LogoItem>
          </LogoLoop>
          <LogoLoop>
            <LogoItem>
              <Logo src={ebayLogo} alt="ebay" />
            </LogoItem>
            <LogoItem>
              <Logo src={ancestryLogo} alt="ancestry" />
            </LogoItem>
            <LogoItem>
              <Logo src={lyftLogo} alt="lyft" />
            </LogoItem>
            <LogoItem>
              <Logo src={lorealLogo} alt="loreal" />
            </LogoItem>
            <LogoItem>
              <Logo src={compassLogo} alt="compass" />
            </LogoItem>
            <LogoItem>
              <Logo src={googleLogo} alt="google" />
            </LogoItem>
          </LogoLoop>
        </LogoAnimation>
      </LogoWrapper>
    </SliderContainer>
  );
};

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SliderContainer = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  text-align: center;
  overflow: hidden;
`;

const SliderTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LogoWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 150px;
  position: relative;
`;

const LogoAnimation = styled.div`
  display: flex;
  align-items: center;
  width: 200%;
  position: absolute;
  left: 0;
  animation: ${slideAnimation} 20s linear infinite;
`;

const LogoLoop = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const LogoItem = styled.div`
  padding: 20px;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
`;

export default LogoSlider;
