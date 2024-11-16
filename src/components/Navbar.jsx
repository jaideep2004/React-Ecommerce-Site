// src/components/Navbar.js
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #333;
	color: #fff;
	position: sticky;
	top: 0px;
	z-index: 9999;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	h1 {
		font-size: 2rem;
		color: #fff;
	}

	img {
		width: 100px;
	}
`;

const NavLinks = styled.div`
	display: flex;
	align-items: center;

	a {
		margin: 0 15px;
		color: #fff;
		&:hover {
			color: cyan;
		}
	}

	@media (max-width: 768px) {
		display: none; // Hide nav links on mobile
	}
`;

const HamburgerIcon = styled.div`
	display: none;
	flex-direction: column;
	justify-content: space-between;
	width: 25px;
	height: 20px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	div {
		height: 3px;
		background-color: #fff;
		width: 100%;
		border-radius: 5px;
    transition: all 0.3s ease;
	}

	@media (max-width: 768px) {
		display: flex; // Show hamburger icon on mobile
	}
`;

const MobileNavLinks = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 80px;
	left: 0;
	width: 100%;
	background-color: #333;
	transition: all 0.3s ease;
	padding: 20px;
	display: ${(props) => (props.open ? "flex" : "none")}; // Toggle visibility
	z-index: 999;

	a {
		margin: 20px 0;
		color: #fff;
		font-size: 19px;
		text-align: center;
		&:hover {
			color: cyan;
		}
	}
`;

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<NavbarContainer>
			<Logo>
				<img src='./images/e13.png' alt='' />
				<h1>StyleNest</h1>
			</Logo>
			<NavLinks>
				<Link to='/'>Home</Link>
				<Link to='/about'>About Us</Link>
				<Link to='/contact'>Contact Us</Link>
				<Link to='/store'>Store</Link>
				<Link to='/cart'>Cart</Link>
			</NavLinks>
			<HamburgerIcon onClick={toggleMenu}>
				<div />
				<div />
				<div />
			</HamburgerIcon>
			<MobileNavLinks open={menuOpen}>
				<Link to='/' onClick={() => setMenuOpen(false)}>
					Home
				</Link>
				<Link to='/about' onClick={() => setMenuOpen(false)}>
					About Us
				</Link>
				<Link to='/contact' onClick={() => setMenuOpen(false)}>
					Contact Us
				</Link>
				<Link to='/store' onClick={() => setMenuOpen(false)}>
					Store
				</Link>
				<Link to='/cart' onClick={() => setMenuOpen(false)}>
					Cart
				</Link>
			</MobileNavLinks>
		</NavbarContainer>
	);
};

export default Navbar;
