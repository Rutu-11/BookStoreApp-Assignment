// import React, { useEffect, useState } from "react";
// import style from "../components/Home/HomeComponents/BookList.module.css";
// import styles from "../components/CommonComp/Card/Card.module.css";
// import {
//   Flex,
//   Heading,
//   Box,
//   Grid,
//   Skeleton,
//   Collapse,
//   Button,
//   Text,
// } from "@chakra-ui/react";
// import CardCom from "./CommonComp/Card/Card";
// import { Image } from "@chakra-ui/react";
// import {useNavigate} from 'react-router-dom'


// function ShoppingCart() {
//   let cart = JSON.parse(localStorage.getItem("book-list")) || [];
//   const [books, setBooks] = useState([]);
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   const removeFromCart = (ind) => {
//     let books = JSON.parse(localStorage.getItem("book-list")) || [];
//     books.splice(ind, 1);
//     localStorage.setItem("book-list", JSON.stringify(books));
    
//     // window.location.reload();
//   };
//   useEffect(() => {
//     const amount = books.reduce((acc, curr) => {
//       // console.log("curr", curr);
//       return (acc += curr.book.pageCount);
//     }, 0);
//     setTotal(amount);
//     setBooks(cart);
//   }, [removeFromCart, setTotal, setBooks]);

//   return books?.length > 0 ? (
//     <Box className={style.booklist} h='100vh'>
//       <Flex
//         justify={"space-between"}
//       >
//         <Flex w={"100%"} justify={"space-between"} m={"0 10px"}>
//           <Heading>Total Cart Items : {books.length}</Heading>
//           <Heading>Total Cart Price : $ {total}</Heading>
//         </Flex>
//       </Flex>

//       <Grid
//         className={style.listContainer}
//         flexWrap="wrap"
//         gridTemplateColumns={[
//           "repeat(1, 1fr)",
//           "repeat(1, 1fr)",
//           "repeat(2, 1fr)",
//           "repeat(2, 1fr)",
//           "repeat(3, 1fr)",
//           "repeat(3, 1fr)",
//         ]}
//         gap="20px"
//       >
//         {books.map((book, index) => {
//           // console.log("book",book)
//           let src = book.volumeInfo.imageLinks?.thumbnail;
//           const author = book.volumeInfo.authors;
//           return (
//             <Box key={book.id} className={styles.cardContainer}>
//               <Image
//                 style={{ height: "40px" }}
//                 src={
//                   src == undefined
//                     ? "https://tse4.mm.bing.net/th?id=OIP.cQAl38ukZunMWrbo1LDzqQHaJq&pid=Api&P=0&h=180"
//                     : src
//                 }
//                 alt="image"
//               />
//               <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
//                 Title : {book.volumeInfo.title}
//               </Heading>
//               <Heading Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
//                 Author : {author == undefined ? "Unknwn Author" : author}
//               </Heading>
//               <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
//                 {"Price : $" + book.volumeInfo.pageCount}
//               </Heading>

//               <Text height="20vh" className={style.songDesc} noOfLines={5}>
//                 {book.volumeInfo.description}
//               </Text>
//               <Flex className={styles.viewButtonDiv} key={book.title}>
//                 <Button colorScheme="orange" variant="outline" mr={"20vh"} onClick={()=>navigate('/calculate')} >
//                   CHECKOUT
//                 </Button>
//                 <Button
//                   colorScheme="orange"
//                   variant="outline"
//                   onClick={() => removeFromCart(index)}
//                 >
//                   REMOVE ITEM
//                 </Button>
//               </Flex>
//             </Box>
//           );
//         })}
//       </Grid>
//       {/* </Collapse> */}
//     </Box>
//   ) : (
//     // ! Skeleton to display before page load
//     <Box
//       width="100%"
//       height="150vh"
//       bg="#121212"
//       className={style.listContainer}
//     >
//       {/* {[...new Array(20)].map((ele, index) => {
//           return (
//             <Box key={index}>
//               <Skeleton height="300px" startColor="#000000" endColor="#434343" />
//             </Box>
//           );
//         })} */}
//       <Heading as={"h1"} size="xl" m={"100px"} color="#fff" noOfLines={2}>
//         Nothing there in the Cart!
//       </Heading>
//     </Box>
//   );
// }

// export default ShoppingCart;


import React,{useState} from 'react';
import { useEffect } from 'react';
import "./CartComp.css";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const navigate = useNavigate()
const toast = useToast()
    const handleCheckout=()=>{
        localStorage.removeItem('book-list')
        toast({
            title: 'Congratulations!.',
            description: "Order placed successfully continue shopping. Being redirected to Homepage",
            status:'success',
            duration: 3000,
            isClosable: true,
          })
          setTimeout(()=>{
            navigate('/')
          },3000)
         
    }
    const handlePrice = ()=>{
        let ans = 0;
        const amount = cart.reduce((acc, curr) => {
                // console.log("curr", curr);
                let price = curr.book.pageCount == 0? 276 :curr.book.pageCount
                return (acc += price* curr.quantity);
              }, 0);
              // setTotal(amount);
              // setBooks(cart);
        setPrice(amount);
    }

    const handleRemove = (ind) =>{
        cart.splice(ind,1)
        // const arr = cart.filter((item)=>item.id !== id);
        localStorage.setItem('book-list', JSON.stringify(cart));
        cart = JSON.parse(localStorage.getItem('book-list'))
        setCart(cart);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
        
    },[cart])

  return (
    <article>
        {
            cart?.map((item,ind)=>{
            //   console.log('item', item)
              let src = item.book.imageLinks?.thumbnail;
              return (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={src} />
                        <p>{item.book.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.quantity}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.book.pageCount == 0? 276 : item.book.pageCount}</span>
                        <button onClick={()=>handleRemove(ind)} >Remove</button>
                    </div>
                </div>
            )}
            
          )}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
        <div className='checkout'>
            <button onClick={()=>handleCheckout()}>Checkout</button>
        </div>
    </article>
  )
}

export default ShoppingCart