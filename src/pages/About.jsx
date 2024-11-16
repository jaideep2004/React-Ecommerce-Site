// // src/pages/AboutUs.js
// import React from 'react';
// import { Container, Section, SectionTitle, Subtitle, Paragraph, TeamGrid, TeamMember, Icon, Button } from '../components/StyledComponents';
// import { FaUsers, FaGlobe, FaBullseye } from 'react-icons/fa';

// const About = () => {
//   return (
//     <Container>
//       {/* Hero Section */}
//       <Section background="url('./images/e14.jpg') no-repeat center center / cover" color="#fff" padding="110px 0">
//         <SectionTitle>Our Story</SectionTitle>
//         <Subtitle>Inspired by Fashion, Driven by Quality</Subtitle>
//         <Paragraph>StyleNest was founded with a mission to bring unique, high-quality men's fashion to everyone. We believe in combining style, comfort, and affordability.</Paragraph>
//       </Section>

//       {/* Mission Section */}
//       <Section padding="50px 0" background="#f8f9fa">
//         <SectionTitle>What Drives Us</SectionTitle>
//         <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px' }}>
//           <div style={{ textAlign: 'center', maxWidth: '300px' }}>
//             <Icon><FaUsers size="3em" /></Icon>
//             <Subtitle>Community Focused</Subtitle>
//             <Paragraph>We believe in giving back to the community. Our mission is to make a positive impact through fashion.</Paragraph>
//           </div>
//           <div style={{ textAlign: 'center', maxWidth: '300px' }}>
//             <Icon><FaGlobe size="3em" /></Icon>
//             <Subtitle>Eco-Conscious</Subtitle>
//             <Paragraph>We prioritize sustainability, offering products that are crafted with care for the environment.</Paragraph>
//           </div>
//           <div style={{ textAlign: 'center', maxWidth: '300px' }}>
//             <Icon><FaBullseye size="3em" /></Icon>
//             <Subtitle>Quality and Affordability</Subtitle>
//             <Paragraph>Our goal is to provide high-quality products at prices that everyone can afford.</Paragraph>
//           </div>
//         </div>
//       </Section>

//       {/* Team Section */}
//       <Section padding="50px 0" background="#fff">
//         <SectionTitle>Meet the Team</SectionTitle>
//         <TeamGrid>
//           <TeamMember>
//             <img src="./images/e16.jpg" alt="Team Member 1" />
//             <Subtitle>John Doe</Subtitle>
//             <Paragraph>Founder & CEO</Paragraph>
//           </TeamMember>
//           <TeamMember>
//             <img src="./images/e18.jpg" alt="Team Member 2" />
//             <Subtitle>Jane Smith</Subtitle>
//             <Paragraph>Lead Designer</Paragraph>
//           </TeamMember>
//           <TeamMember>
//             <img src="./images/e17.jpg" alt="Team Member 3" />
//             <Subtitle>Chris Johnson</Subtitle>
//             <Paragraph>Marketing Head</Paragraph>
//           </TeamMember>
//         </TeamGrid>
//       </Section>

//       {/* CTA Section */}
//       <Section padding="50px 0" background="#e9ecef" textAlign="center">
//         <SectionTitle>Join the StyleNest Community</SectionTitle>
//         <Paragraph>Want to stay updated with the latest trends and exclusive offers? Connect with us and be a part of the StyleNest family.</Paragraph>
//         <Button>Contact Us</Button>
//       </Section>
//     </Container>
//   );
// };

// export default About;

// src/pages/AboutUs.js
import React from 'react';
import { Container, Section, SectionTitle, Subtitle, Paragraph, TeamGrid, TeamMember, Icon, Button } from '../components/StyledComponents';
import { FaUsers, FaGlobe, FaBullseye } from 'react-icons/fa';
import styled from 'styled-components';

const HeroSection = styled(Section)`
  background: url('./images/e14.jpg') no-repeat center center / cover;
  color: #fff;
  padding: 110px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const MissionSection = styled(Section)`
  padding: 50px 0;
  background: #f8f9fa;
  flex-wrap:wrap;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const TeamSection = styled(Section)`
  padding: 50px 0;
  background: #fff;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const CtaSection = styled(Section)`
  padding: 50px 0;
  background: #e9ecef;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const MissionItem = styled.div`
  text-align: center;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;



const About = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <SectionTitle>Our Story</SectionTitle>
        <Subtitle>Inspired by Fashion, Driven by Quality</Subtitle>
        <Paragraph>StyleNest was founded with a mission to bring unique, high-quality men's fashion to everyone. We believe in combining style, comfort, and affordability.</Paragraph>
      </HeroSection>

      {/* Mission Section */}
      <MissionSection>
        <SectionTitle>What Drives Us</SectionTitle>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px',flexWrap:'wrap' }}>
          <MissionItem>
            <Icon><FaUsers size="3em" /></Icon>
            <Subtitle>Community Focused</Subtitle>
            <Paragraph>We believe in giving back to the community. Our mission is to make a positive impact through fashion.</Paragraph>
          </MissionItem>
          <MissionItem>
            <Icon><FaGlobe size="3em" /></Icon>
            <Subtitle>Eco-Conscious</Subtitle>
            <Paragraph>We prioritize sustainability, offering products that are crafted with care for the environment.</Paragraph>
          </MissionItem>
          <MissionItem>
            <Icon><FaBullseye size="3em" /></Icon>
            <Subtitle>Quality and Affordability</Subtitle>
            <Paragraph>Our goal is to provide high-quality products at prices that everyone can afford.</Paragraph>
          </MissionItem>
        </div>
      </MissionSection>

      {/* Team Section */}
      <TeamSection>
        <SectionTitle>Meet the Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <img src="./images/e16.jpg" alt="Team Member 1" />
            <Subtitle>John Doe</Subtitle>
            <Paragraph>Founder & CEO</Paragraph>
          </TeamMember>
          <TeamMember>
            <img src="./images/e18.jpg" alt="Team Member 2" />
            <Subtitle>Jane Smith</Subtitle>
            <Paragraph>Lead Designer</Paragraph>
          </TeamMember>
          <TeamMember>
            <img src="./images/e17.jpg" alt="Team Member 3" />
            <Subtitle>Chris Johnson</Subtitle>
            <Paragraph>Marketing Head</Paragraph>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      {/* CTA Section */}
      <CtaSection>
        <SectionTitle>Join the StyleNest Community</SectionTitle>
        <Paragraph>Want to stay updated with the latest trends and exclusive offers? Connect with us and be a part of the StyleNest family.</Paragraph>
        <Button>Contact Us</Button>
      </CtaSection>
    </Container>
  );
};

export default About;
