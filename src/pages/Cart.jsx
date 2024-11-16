// src/pages/Cart.js
import React, { useState } from "react";
import { Container, SectionTitle } from "../components/StyledComponents";
import CartItem from "../components/CartItem";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Total = styled.h3`
	text-align: right;
	margin-top: 20px;
`;

const CheckoutForm = styled.form`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	max-width: 410px;
	margin: 0 auto;
`;

const InputField = styled.input`
	padding: 10px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const CheckoutButton = styled.button`
	padding: 12px;
	font-size: 16px;
	background-color: green;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: darkgreen;
	}
`;

const Cart = ({ cart, removeFromCart }) => {
	const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

	// Form state for user input
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		address: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you could add further steps for processing the order (e.g., API request, payment)
		toast.success("Order placed successfully!");
		alert("Order placed successfully!");
		// Reset form and cart after submission (optional)
		setFormData({
			name: "",
			email: "",
			address: "",
		});
	};

	return (
		<Container>
			<ToastContainer />
			<SectionTitle>Your Cart</SectionTitle>
			{cart.length > 0 ? (
				cart.map((item) => (
					<CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
				))
			) : (
				<p>Your cart is empty.</p>
			)}
			<Total>Total: ${totalPrice.toFixed(2)}</Total>

			{/* Checkout Form */}
			<CheckoutForm onSubmit={handleSubmit}>
				<h2>Checkout</h2>
				<InputField
					type='text'
					name='name'
					placeholder='Full Name'
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<InputField
					type='email'
					name='email'
					placeholder='Email'
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<InputField
					type='text'
					name='address'
					placeholder='Shipping Address'
					value={formData.address}
					onChange={handleChange}
					required
				/>
				<CheckoutButton type='submit'>Proceed to Payment</CheckoutButton>
			</CheckoutForm>
		</Container>
	);
};

export default Cart;
