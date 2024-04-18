import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <LeftFooterWrapper>
        <FooterSection>
          <SectionTitle>
            Easy <BlueText>ahead</BlueText>
          </SectionTitle>
          <AppLinks>
            <AppLink href="#">
              <img
                src="/images/app-store-badge.png"
                alt="App Store"
                style={{ width: "100px", height: "100px" }}
              />
            </AppLink>
            <AppLink href="#">
              <img
                src="/images/google-play-badge.png"
                alt="Google Play"
                style={{ width: "100px", height: "100px" }}
              />
            </AppLink>
          </AppLinks>
          <SocialLinks>
            <SocialLink href="#">
              <i className="fab fa-twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  version="1.2"
                  id="social"
                >
                  <path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034a8.68 8.68 0 0 1-2.351.861c-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078a3.56 3.56 0 0 0-1.076 2.605c0 .309.039.585.117.819C8.806 9.096 6.26 7.82 4.254 5.364c-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388a3.623 3.623 0 0 0 2.115 1.291c-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841a3.652 3.652 0 0 0 2.152.743c-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038C4.696 18.753 6.585 19.3 8.675 19.3c2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974a10.77 10.77 0 0 0 1.172-4.892V8.34A7.788 7.788 0 0 0 21 6.419a8.142 8.142 0 0 1-2.11.593z"></path>
                </svg>
              </i>
            </SocialLink>
            <SocialLink href="#">
              <i className="fab fa-facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  enable-background="new 0 0 100 100"
                  viewBox="0 0 100 100"
                  id="social"
                >
                  <path
                    d="M50,0C22.386,0,0,22.386,0,50c0,27.614,22.386,50,50,50c27.614,0,50-22.386,50-50C100,22.386,77.614,0,50,0z M66.764,28.385
	c0,0.745-0.604,1.349-1.348,1.349l-5.779,0.002c-3.984,0-4.713,1.553-4.713,4.611v6.363h10.089c0.358,0,0.702,0.142,0.955,0.396
	c0.253,0.253,0.395,0.596,0.395,0.954l-0.004,10.876c0,0.745-0.604,1.349-1.349,1.349H54.924v27.443
	c0,0.745-0.604,1.349-1.349,1.349H42.322c-0.745,0-1.349-0.604-1.349-1.349V54.284h-8.625c-0.745,0-1.349-0.604-1.349-1.349V42.06
	c0-0.745,0.604-1.35,1.349-1.35h8.625v-7.506c0-9.89,6.228-16.28,15.866-16.28l8.579,0.014c0.744,0.001,1.347,0.605,1.347,1.349
	V28.385z"
                  ></path>
                </svg>
              </i>
            </SocialLink>
            <SocialLink href="#">
              <i className="fab fa-instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                >
                  <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                </svg>
              </i>
            </SocialLink>
            <SocialLink href="#">
              <i className="fab fa-linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  baseProfile="tiny"
                  version="1.2"
                  viewBox="0 0 24 24"
                  id="social"
                >
                  <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z"></path>
                  <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse>
                </svg>
              </i>
            </SocialLink>
            <SocialLink href="#">
              <i className="fab fa-youtube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  version="1.2"
                  id="social"
                >
                  <path d="M22.8 8.6c-.2-1.5-.4-2.6-1-3C21.2 5.1 16 5 12 5s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3S1 11 1 12s0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3S23 13 23 12s0-1.9-.2-3.4zm-12.8 7V8.4l6 3.6-6 3.6z"></path>
                </svg>
              </i>
            </SocialLink>
          </SocialLinks>
          <LanguageSelect>
            <option>English</option>
          </LanguageSelect>
        </FooterSection>
        <FooterLinks>
          <Copyright>Copyright Calendly 2022</Copyright>
        </FooterLinks>
      </LeftFooterWrapper>
      <RightFooterWrapper>
        <FooterSectionsWrapper>
          <FooterSection>
            <SectionTitle>About</SectionTitle>
            <SectionLink>About Calendly</SectionLink>
            <SectionLink>Contact Sales</SectionLink>
            <SectionLink>Newsroom</SectionLink>
            <SectionLink>Careers</SectionLink>
            <SectionLink>Security</SectionLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Solutions</SectionTitle>
            <SectionLink>Customer Success</SectionLink>
            <SectionLink>Sales</SectionLink>
            <SectionLink>Recruiting</SectionLink>
            <SectionLink>Information Technology</SectionLink>
            <SectionLink>Marketing</SectionLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Popular Features</SectionTitle>
            <SectionLink>Embed Calendly</SectionLink>
            <SectionLink>Availability</SectionLink>
            <SectionLink>Sending Notifications</SectionLink>
            <SectionLink>Using Calendly Mobile</SectionLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Support</SectionTitle>
            <SectionLink>Help Center</SectionLink>
            <SectionLink>Video Tutorials</SectionLink>
            <SectionLink>Cookie Settings</SectionLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Add-Ons</SectionTitle>
            <SectionLink>Download for Chrome</SectionLink>
            <SectionLink>Download for Firefox</SectionLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Developers</SectionTitle>
            <SectionLink>Developer Tools</SectionLink>
          </FooterSection>
        </FooterSectionsWrapper>
        <FooterLinks>
          <TermsAndConditions>
            Privacy / Terms and Conditions
          </TermsAndConditions>
        </FooterLinks>
      </RightFooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

const FooterSectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  justify-content: space-between;
`;

const FooterSection = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
`;

const LeftFooterWrapper = styled.div`
  width: 33.33%;
`;

const RightFooterWrapper = styled.div`
  width: 66.66%;
`;

const SectionTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

const SectionLink = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const AppLinks = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const AppLink = styled.a`
  margin-right: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 20px;
  margin-right: 10px;
`;

const LanguageSelect = styled.select`
  width: 150px;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #4caf50; /* Green border */
  border-radius: 8px;
  background-color: #f9f9f9; /* Light grey background */
  color: #333;
  appearance: none; /* Remove default dropdown arrow */
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 5L11 1' stroke='%234caf50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); /* Custom dropdown arrow */
  background-repeat: no-repeat;
  background-position: right 12px top 50%;
  background-size: 8px auto;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #2e7d32; /* Dark green border on hover or focus */
  }

  option {
    background-color: #f9f9f9; /* Light grey background for options */
    color: #333;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #666;
  align-self: flex-start;
`;

const TermsAndConditions = styled.p`
  font-size: 12px;
  color: #666;
  align-self: flex-end;
`;

const BlueText = styled.span`
  color: blue; /* Blue color for the "Ahead" text */
`;

export default Footer;
