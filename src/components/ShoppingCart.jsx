import React, { useEffect } from "react";
import styles from "../components/Home/home.module.css";
import {
  Flex,
  Heading,
  Box,
  Grid,
  Skeleton,
  Collapse,
  Button,
} from "@chakra-ui/react";
import CardCom from "./CommonComp/Card/Card";
import AnimatedPages from "../AinmatedPages";
import ShoppingCart from "./CartComp";
import Navbar from "./CommonComp/Navbar/Navbar";
import { useState } from "react"; 
function ShoppingCartComp() {
  let arr = JSON.parse(localStorage.getItem("book-list")) || [];
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);


	const handleChange = (item, d) =>{
		// cart = JSON.parse(localStorage.getItem("book-list")) || [];
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].quantity += d;
		
		if (tempArr[ind].quantity === 0)
			tempArr[ind].quantity = 1;
		setCart([...tempArr])
		localStorage.setItem("book-list", JSON.stringify(tempArr));
	}

	useEffect(()=>{
		setCart(arr)
	},[])
  return (
    <>
      <AnimatedPages>
        <Box className={styles.homeContainer}>
          <AnimatedPages>
            <ShoppingCart cart={cart} setCart={setCart} handleChange={handleChange} />
          </AnimatedPages>
        </Box>
      </AnimatedPages>
    </>
  );
}

export default ShoppingCartComp;
