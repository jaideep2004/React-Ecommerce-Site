import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { useEffect } from "react";
import {
	Container,
	SectionTitle,
	Button,
} from "../components/StyledComponents";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeContainer = styled(Container)`
	padding-top: 20px;
`;

const HeroSection = styled.section`
	position: relative;
	background: url("./images/e12.jpg") center/cover no-repeat;
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #fff;

	@media (max-width: 768px) {
		height: 60vh;
	}
`;

const HeroOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4); /* Dark overlay */
	z-index: 1;
`;

const HeroContent = styled.div`
	position: relative;
	z-index: 2;
	max-width: 650px;
	backdrop-filter: blur(30px);
	padding: 25px;
	border-radius: 10px;
	box-shadow: inset -2px 2px 4px white;
`;

const HeroTitle = styled.h1`
	font-size: 3rem;
	margin-bottom: 20px;
	color: white;

	span {
		color: cyan;
	}

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

const HeroDesc = styled.p`
	font-size: 17px;
	margin-top: 15px;
	text-shadow: 1px 1px 3px black;
`;

const HeroButton = styled(Button)`
	font-size: 1.2rem;
	padding: 12px 30px;
	margin-top: 20px;
	color: #333;
	background-color: lightblue;

	&:hover {
		background-color: white;
		color: #333;
	}

	@media (max-width: 768px) {
		padding: 10px 20px;
		font-size: 1rem;
	}
`;

const FeaturedProductsSection = styled.section`
	padding: 40px 0;
	text-align: center;
`;

const ProductSlider = styled(Slider)`
	.slick-slide img {
		width: 100%;
		padding: 10px;
		border-radius: 12px;
		margin-top: 15px;

		&:hover {
			transition: all 0.4s ease;
			transform: scale(1.05) translateY(-10px);
		}
	}

	@media (max-width: 768px) {
		.slick-slide img {
			max-width: 80%;
			margin: 0 auto;
		}
	}
`;

const CategoriesSection = styled.section`
	background: #f9f9f9;
	padding: 40px 0;
`;

const CategoryContainer = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 20px;
	flex-wrap: wrap; /* Make categories stack on smaller screens */
`;

const CategoryCard = styled.div`
	text-align: center;
	width: 250px;
	padding: 20px;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

	i {
		font-size: 2rem;
		margin-top: 15px;
		cursor: pointer;

		&:hover {
			color: cyan;
		}
	}

	h4 {
		margin-top: 15px;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		width: 200px;
	}
`;

const DealsSection = styled.section`
	padding: 40px 0;
	text-align: center;
`;

const TestimonialSection = styled.section`
	background: #f1f1f1;
	padding: 40px 0;
	text-align: center;
`;

const TestimonialSlider = styled(Slider)`
	.slick-slide {
		display: flex;
		justify-content: center;
	}
`;

const TestimonialCard = styled.div`
	min-width: 600px;
	max-width: 600px;
	min-height: 200px;
	background: #fff;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

	i {
		color: #ffd43b;
	}

	p {
		margin-top: 20px;
		font-size: 17px;
		line-height: 1.6;
	}

	h5 {
		margin-top: 15px;
		font-size: 17px;
		font-weight: 700;
	}

	@media (max-width: 768px) {
		min-width: 100%;
	}
`;

const NewsletterSection = styled.section`
	background: #333;
	color: #fff;
	text-align: center;
	padding: 40px;
	border-radius: 15px;

	p {
		font-size: 18px;
	}

	img {
		width: 450px;
		margin-top: 20px;
	}

	button {
		border: none;
		outline: none;
		padding: 13px 25px;
		font-size: 17px;
		border-radius: 15px;
		background-color: cyan;

		&:hover {
			background-color: white;
		}
	}
`;

const NewsletterInput = styled.input`
	padding: 13px;
	margin-right: 10px;
	font-size: 18px;
	outline: none;
	border: none;
	border-radius: 7px;
	width: 300px;
`;

const Home = () => {
	useEffect(() => {
		AOS.init({});
	}, []);
	const products = [
		{ id: 1, image: "./images/e6.jpg", name: "Winter Jacket" },
		{ id: 2, image: "./images/e1.jpg", name: "Casual Shirt" },
		{ id: 3, image: "./images/e7.jpg", name: "Footwear" },
	];

	const products2 = [
		{ id: 1, image: "./images/e4.jpg", name: "Winter Jacket" },
		{ id: 2, image: "./images/e8.jpg", name: "Casual Shirt" },
		{ id: 3, image: "./images/e9.jpg", name: "Footwear" },
	];

	const categories = [
		{
			icon: <i className='fa-solid fa-user-tie fa-2xl'></i>,
			name: "Men's Fashion",
		},
		{ icon: <i className='fa-solid fa-shirt fa-2xl'></i>, name: "Casual Wear" },
		{
			icon: <i className='fa-solid fa-glasses fa-2xl'></i>,
			name: "Accessories",
		},
		{ icon: <i className='fa-solid fa-socks fa-2xl'></i>, name: "Winter Wear" },
		{
			icon: <i className='fa-solid fa-shoe-prints fa-2xl'></i>,
			name: "Footwear",
		},
	];

	const testimonials = [
		{
			id: 1,
			content: "Great products and fast delivery! Lorem ipsum.",
			author: "John Doe",
		},
		{
			id: 2,
			content: "Amazing quality and stylish items. Lorem ipsum.",
			author: "Jane Smith",
		},
		{
			id: 3,
			content: "Best online shopping experience. Lorem ipsum.",
			author: "Alex Brown",
		},
	];

	const testimonialSettings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<HomeContainer>
			{/* Hero Section */}
			<HeroSection>
				<HeroOverlay />
				<HeroContent data-aos="fade-up"
     data-aos-duration="1300">
					<HeroTitle >
						Discover Your Style at <span >StyleNest</span>
					</HeroTitle>
					<HeroDesc>
						Explore the latest trends in men's fashion and accessories.
					</HeroDesc>
					<HeroButton><Link to="/store">Shop Now</Link></HeroButton>
				</HeroContent>
			</HeroSection>

			{/* Featured Products */}
			<FeaturedProductsSection>
				<SectionTitle data-aos="fade-down"
     data-aos-duration="1300">Featured Products</SectionTitle>
				<ProductSlider
					dots={true}
					infinite={true}
					speed={800}
					autoplay={true}
					slidesToShow={3}
					slidesToScroll={1} data-aos="fade-down"
          data-aos-duration="1300">
					{products.map((product) => (
						<div key={product.id}>
							<img src={product.image} alt={product.name} id='p-img' />
							<h4>{product.name}</h4>
						</div>
					))}
				</ProductSlider>
			</FeaturedProductsSection>

			{/* Categories */}
			<CategoriesSection>
				<SectionTitle data-aos="fade-down"
     data-aos-duration="1300">Shop by Categories</SectionTitle>
				<CategoryContainer>
					{categories.map((category, index) => (
						<CategoryCard key={index}>
							<div>{category.icon}</div>
							<h4>{category.name}</h4>
						</CategoryCard>
					))}
				</CategoryContainer>
			</CategoriesSection>

			{/* Deals of the Month */}
			<DealsSection>
				<SectionTitle data-aos="fade-down"
     data-aos-duration="1300">Deals of the Month</SectionTitle>
				<p>Unbeatable discounts on top products. Limited time only!</p>
				<ProductSlider
					dots={true}
					infinite={true}
					speed={700}
					autoplay={true}
					slidesToShow={3}
					slidesToScroll={1}>
					{products2.map((product) => (
						<div key={product.id}>
							<img src={product.image} alt={product.name} id='p-img' />
							<h4>{product.name}</h4>
						</div>
					))}
				</ProductSlider>
				<Button data-aos="zoom-in-up"
     data-aos-duration="1200">View Deals</Button>
			</DealsSection>

			{/* Testimonials */}
			<TestimonialSection>
				<SectionTitle data-aos="fade-down"
     data-aos-duration="1300">What Our Customers Say</SectionTitle>
				<TestimonialSlider {...testimonialSettings}>
					{testimonials.map((testimonial) => (
						<TestimonialCard key={testimonial.id}>
							<i className='fa-solid fa-star fa-2xl'></i>
							<i className='fa-solid fa-star fa-2xl'></i>
							<i className='fa-solid fa-star fa-2xl'></i>
							<i className='fa-solid fa-star fa-2xl'></i>
							<p>"{testimonial.content}"</p>
							<h5>- {testimonial.author}</h5>
						</TestimonialCard>
					))}
				</TestimonialSlider>
			</TestimonialSection>

			{/* Newsletter */}
			<NewsletterSection data-aos="fade-up"
     data-aos-duration="1300">
				<p>Subscribe to our newsletter for exclusive offers and updates.</p>
				<img src='./images/e11c.png' alt='Newsletter Image' />
				<div>
					<NewsletterInput type='email' placeholder='Enter your email' />
					<button data-aos="fade-left"
     data-aos-duration="1300">Subscribe</button>
				</div>
			</NewsletterSection>
		</HomeContainer>
	);
};

export default Home;
