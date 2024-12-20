// src/pages/Store.js
import React from "react";
import { Container, SectionTitle } from "../components/StyledComponents";
import ProductCard from "../components/ProductCard";
import productData from "../data";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Styled component for the product grid
const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 23px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr; /* Single column for mobile */
		gap: 15px; /* Reduce the gap for smaller screens */
	}
`;

const Store = ({ addToCart }) => {
	useEffect(() => {
		AOS.init({});
	}, []);
	return(
	<Container>
		<SectionTitle data-aos='zoom-in' data-aos-duration='1300'>
			Our Collection
		</SectionTitle>
		<ProductGrid>
			{productData.map((product) => (
				<ProductCard key={product.id} product={product} addToCart={addToCart} />
			))}
		</ProductGrid>
		<ToastContainer />
		</Container>
	)
};
export default Store;
