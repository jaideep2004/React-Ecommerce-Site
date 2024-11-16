// src/components/CartItem.js
import React from "react";
import styled from "styled-components";
import { Button } from "./StyledComponents";

const CartItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	border-bottom: 1px solid #ddd;
  
`;

const ItemDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
 
	h4 {
		font-size: 20px;
	}
	p {
		font-size: 19px;
	}
`;

const ItemImage = styled.img`
	width: 190px;
	height: 190px;
	border-radius: 8px;
`;

const CartItem = ({ item, removeFromCart }) => (
	<CartItemContainer>
		<ItemDetails>
			<ItemImage src={item.image} alt={item.name} />
			<div>
				<h4>{item.name}</h4>
				<p>${item.price.toFixed(2)}</p>
			</div>
		</ItemDetails>
		<Button onClick={() => removeFromCart(item.id)}>Remove</Button>
	</CartItemContainer>
);

export default CartItem;
