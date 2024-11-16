import { useState ,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import productData from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa";
import { CartIcon } from "./components/StyledComponents";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({});
	}, []);
	// Load cart data from localStorage if it exists
	const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
	const [cart, setCart] = useState(savedCart);

	// Add item to cart
	const addToCart = (product) => {
		const updatedCart = [...cart, product];
		setCart(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		toast.success(`${product.name} added to cart!`);
	};

	// Remove item from cart
	const removeFromCart = (id) => {
		const updatedCart = cart.filter((item) => item.id !== id);
		setCart(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
	};
	return (
		<Router>
			<Link to='/cart'>
				<CartIcon data-aos="fade-left"
     data-aos-duration="1000">
					<FaShoppingCart />
					<span>{cart.length}</span>
				</CartIcon>
			</Link>
			<GlobalStyles />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/store' element={<Store addToCart={addToCart} />} />
				<Route
					path='/cart'
					element={<Cart cart={cart} removeFromCart={removeFromCart} />}
				/>
			</Routes>
			<ToastContainer />
			<Footer />
		</Router>
	);
}

export default App;
