// src/pages/AboutUs.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	Container,
	Section,
	SectionTitle,
	Subtitle,
	Paragraph,
	TeamGrid,
	TeamMember,
	Icon,
	Button,
} from "../components/StyledComponents";
import { FaUsers, FaGlobe, FaBullseye } from "react-icons/fa";
import styled from "styled-components";
import { useEffect } from "react";

const HeroSection = styled(Section)`
	background: url("./images/e14.jpg") no-repeat center center / cover;
	color: #fff;
	padding: 110px 0;

	@media (max-width: 768px) {
		padding: 80px 0;
	}
`;

const MissionSection = styled(Section)`
	padding: 50px 0;
	background: #f8f9fa;
	flex-wrap: wrap;

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
	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<Container>
			{/* Hero Section */}
			<HeroSection>
				<SectionTitle data-aos='fade-down' data-aos-duration='1300'>
					Our Story
				</SectionTitle>
				<Subtitle data-aos='fade-down' data-aos-duration='1300'>
					Inspired by Fashion, Driven by Quality
				</Subtitle>
				<Paragraph data-aos='fade-up' data-aos-duration='1300'>
					StyleNest was founded with a mission to bring unique, high-quality
					men's fashion to everyone. We believe in combining style, comfort, and
					affordability.
				</Paragraph>
			</HeroSection>

			{/* Mission Section */}
			<MissionSection>
				<SectionTitle>What Drives Us</SectionTitle>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						paddingTop: "20px",
						flexWrap: "wrap",
					}}>
					<MissionItem>
						<Icon data-aos='zoom-in' data-aos-duration='1300'>
							<FaUsers size='3em' />
						</Icon>
						<Subtitle>Community Focused</Subtitle>
						<Paragraph>
							We believe in giving back to the community. Our mission is to make
							a positive impact through fashion.
						</Paragraph>
					</MissionItem>
					<MissionItem>
						<Icon data-aos='zoom-in' data-aos-duration='1300'>
							<FaGlobe size='3em' />
						</Icon>
						<Subtitle>Eco-Conscious</Subtitle>
						<Paragraph>
							We prioritize sustainability, offering products that are crafted
							with care for the environment.
						</Paragraph>
					</MissionItem>
					<MissionItem>
						<Icon data-aos='zoom-in' data-aos-duration='1300'>
							<FaBullseye size='3em' />
						</Icon>
						<Subtitle>Quality and Affordability</Subtitle>
						<Paragraph>
							Our goal is to provide high-quality products at prices that
							everyone can afford.
						</Paragraph>
					</MissionItem>
				</div>
			</MissionSection>

			{/* Team Section */}
			<TeamSection>
				<SectionTitle>Meet the Team</SectionTitle>
				<TeamGrid>
					<TeamMember data-aos='fade-down' data-aos-duration='1300'>
						<img src='./images/e16.jpg' alt='Team Member 1' />
						<Subtitle>John Doe</Subtitle>
						<Paragraph>Founder & CEO</Paragraph>
					</TeamMember>
					<TeamMember data-aos='fade-down' data-aos-duration='1300'>
						<img src='./images/e18.jpg' alt='Team Member 2' />
						<Subtitle>Jane Smith</Subtitle>
						<Paragraph>Lead Designer</Paragraph>
					</TeamMember>
					<TeamMember data-aos='fade-down' data-aos-duration='1300'>
						<img src='./images/e17.jpg' alt='Team Member 3' />
						<Subtitle>Chris Johnson</Subtitle>
						<Paragraph>Marketing Head</Paragraph>
					</TeamMember>
				</TeamGrid>
			</TeamSection>

			{/* CTA Section */}
			<CtaSection>
				<SectionTitle>Join the StyleNest Community</SectionTitle>
				<Paragraph>
					Want to stay updated with the latest trends and exclusive offers?
					Connect with us and be a part of the StyleNest family.
				</Paragraph>
				<Button data-aos="zoom-in-up"
     data-aos-duration="1000">Contact Us</Button>
			</CtaSection>
		</Container>
	);
};

export default About;
