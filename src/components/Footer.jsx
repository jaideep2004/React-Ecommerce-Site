// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: 30px;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} StyleNest. All rights reserved.</p>
    <p>Follow us on social media for the latest updates.</p>
  </FooterContainer>
);

export default Footer;
