// src/components/StyledComponents.js
import styled from "styled-components";

export const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 20px;

	@media (max-width: 768px) {
		height: 60vh;
		// padding:0px;
	}
`;

export const Button = styled.button`
	padding: 15px 30px;
	background-color: #333;
	cursor: pointer;
	border: none;
	border-radius: 7px;
	margin-top: 30px;
	transition: background-color 0.3s ease;
	color: white;
	font-size: 17px;
	&:hover {
		background-color: cyan;
		color: black;
	}
`;
export const CartIcon = styled.div`
	position: fixed;
	bottom: 20px;
	right: 20px;
	font-size: 44px;
	cursor: pointer;
	z-index: 100;
	background-color: lightgray;
	padding: 20px;
	border-radius: 100%;

	span {
		position: absolute;
		top: 2px;
		right: 0px;
		background-color: red;
		color: white;
		border-radius: 50%;
		padding: 2px 8px;
		font-size: 15px;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	margin-top: 1rem;
	text-align: center;
	color: #333;
`;
export const Section = styled.div`
	width: 100%;
	padding: ${(props) => props.padding || "20px 0"};
	background: ${(props) => props.background || "#fff"};
	color: ${(props) => props.color || "#333"};
	text-align: ${(props) => props.textAlign || "center"};
`;

export const Title = styled.h1`
	font-size: 2.5em;
	margin-bottom: 10px;
`;

export const Subtitle = styled.h3`
	font-size: 1.5em;
	color: #777;
	margin-bottom: 20px;
`;

export const Paragraph = styled.p`
	font-size: 1em;
	max-width: 800px;
	line-height: 1.6;
	margin: 10px auto;
	color: black;
`;

export const TeamGrid = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20px;
`;

export const TeamMember = styled.div`
	text-align: center;
	max-width: 200px;
	margin: 20px;
	img {
		height: 200px;
		border-radius: 50%;
		margin-bottom: 10px;
	}
`;

export const Icon = styled.div`
	color: #333;
	margin-bottom: 10px;
`;
export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 600px;
	margin: 0 auto;
`;

export const FormGroup = styled.div`
	width: 100%;
	margin: 10px 0;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	font-size: 1em;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-sizing: border-box;
	outline: none;
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 10px;
	font-size: 1em;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-sizing: border-box;
	outline: none;
`;

export const InfoSection = styled(Section)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
