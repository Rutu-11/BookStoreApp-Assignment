import React,{useEffect, useState} from 'react';
// import { BrowserRouter ,Routes, Route } from 'react-router-dom';
// import { Home } from './components/Home/home';
// import BookListing from './components/BookListing';
// import ShoppingCart from './components/ShoppingCart';
// import CheckoutPage from './components/Checkout';
import AllRoutes from './components/Routes/AllRoutes.jsx'
import Navbar from './components/CommonComp/Navbar/Navbar.jsx';

function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
	const [size, setSize] = useState(0)
	 let book = JSON.parse(localStorage.getItem("book-list")) || [];
	 
	 useEffect(()=>{
		setSize(book.length)
		setCart(book)
	 },[])
	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	// const handleChange = (item, d) =>{
	// 	let ind = -1;
	// 	cart.forEach((data, index)=>{
	// 		if (data.id === item.id)
	// 			ind = index;
	// 	});
	// 	const tempArr = cart;
	// 	tempArr[ind].amount += d;
		
	// 	if (tempArr[ind].amount === 0)
	// 		tempArr[ind].amount = 1;
	// 	setCart([...tempArr])
	// }
  return (
    <>
    <Navbar size={cart.length} setShow={setShow} />
     <AllRoutes />
    </>
  );
}

export default App;
