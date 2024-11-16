// src/pages/ContactUs.js
import React from 'react';
import { Container, Section, Title, Subtitle, ContactForm, FormGroup, Input, TextArea, Button, InfoSection, Icon } from '../components/StyledComponents';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
		AOS.init({});
	}, []);
  return (
    <Container>
      {/* Hero Section */}
      <Section background="url('./images/e19.jpg') no-repeat center center / cover" color="#fff" padding="135px 0" >
        <Title data-aos='fade-down' data-aos-duration='1300'>Contact Us</Title >
        <Subtitle>We’d love to hear from you!</Subtitle>
      </Section>

      {/* Contact Form Section */}
      <Section padding="50px 0" background="#f8f9fa">
        <Title data-aos='fade-down' data-aos-duration='1300'>Get in Touch</Title>
        <ContactForm>
          <FormGroup>
            <Input type="text" placeholder="Your Name" required />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Your Email" required />
          </FormGroup>
          <FormGroup>
            <TextArea rows="5" placeholder="Your Message" required />
          </FormGroup>
          <Button>Send Message</Button>
        </ContactForm>
      </Section>

      {/* Contact Information Section */}
      <InfoSection padding="50px 0" background="#fff">
        <Title>Contact Information</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '20px',width:'80%' }}>
          <div style={{ textAlign: 'center', maxWidth: '250px', margin: '10px' }}>
            <Icon data-aos='zoom-in' data-aos-duration='1300'><FaPhone size="2em" /></Icon>
            <Subtitle>Phone</Subtitle>
            <p>+1 (555) 123-4567</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '250px', margin: '10px' }}>
            <Icon data-aos='zoom-in' data-aos-duration='1300'><FaEnvelope size="2em" /></Icon>
            <Subtitle>Email</Subtitle>
            <p>contact@stylenest.com</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '250px', margin: '10px' }}>
            <Icon data-aos='zoom-in' data-aos-duration='1300'><FaMapMarkerAlt size="2em" /></Icon>
            <Subtitle>Location</Subtitle>
            <p>123 Fashion St, New York, NY</p>
          </div>
        </div>
      </InfoSection>

      {/* Google Map Section */}
      <Section padding="50px 0" background="#e9ecef">
        <Title data-aos='fade-down' data-aos-duration='1300'>Our Location</Title>
        <div style={{ width: '100%', maxWidth: '1400px', height: '420px', margin: '30px auto' }}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24159.85359904046!2d-74.0059415!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1635871849192!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Section>
    </Container>
  );
};

export default Contact;
