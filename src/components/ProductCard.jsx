// src/components/ProductCard.js
import React from "react";
import styled from "styled-components";
import { Button } from "./StyledComponents";

const Card = styled.div`
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 16px;
	text-align: center;
	background-color: #fff;
	margin-top: 20px;
	h3 {
		margin-top: 15px;
		font-size: 18px;
	}
	button {
		border: none;
		outline: none;
		padding: 13px 25px;
		font-size: 17px;
		border-radius: 7px;
		color: white;
		background-color: #333;
		&:hover {
			background-color: gray;
		}
	}
	p {
		margin: 8px 0px;
	}
`;

const ProductImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 8px;
`;

const ProductCard = ({ product, addToCart }) => (
	<Card>
		<ProductImage src={product.image} alt={product.name} />
		<h3>{product.name}</h3>
		<p>${product.price}</p>
		<button onClick={() => addToCart(product)}>Add to Cart</button>
	</Card>
);

export default ProductCard;
