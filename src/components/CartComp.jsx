import React, { useEffect, useState } from 'react'
import style from "../components/Home/HomeComponents/BookList.module.css";
import styles from '../components/CommonComp/Card/Card.module.css'
import {
  Flex,
  Heading,
  Box,
  Grid,
  Skeleton,
  Collapse,
  Button,
  Text
} from "@chakra-ui/react";
import CardCom from './CommonComp/Card/Card';
import { Image } from '@chakra-ui/react';
function ShoppingCart() {
 let cart = JSON.parse(localStorage.getItem('book-list')) || [];
 const [books, setBooks] = useState([]);
 const [total, setTotal] = useState(0);

 const removeFromCart = (ind)=>{
  let books = JSON.parse(localStorage.getItem('book-list')) || [];
  books.splice(ind,1);
  localStorage.setItem("book-list", JSON.stringify(books));
  // window.location.reload();
}
 useEffect(()=>{
  const amount = books.reduce((acc, curr)=>{
    console.log('curr', curr)
    return acc +=curr.volumeInfo.pageCount
   },0)
   setTotal(amount)
   setBooks(cart)
  
 },[removeFromCart,setTotal,setBooks])

 
    return books?.length > 0 ? (
      <Box className={style.SpotifyPlaylist} mb="-40px">
  
        <Flex
          justify={"space-between"}
          mt={["42px", "42px", "42px", "60px", "60px"]}
        >
          <Flex w={'100%'} justify={'space-between'} m={"0 10px"}>
          <Heading>Total Cart Items : {books.length}</Heading>
          <Heading>Total Cart Price : $ {total}</Heading>
          </Flex>
          
          {/* <Button
            variant={"unstyled"}
            color={"#fff"}
            size="sm"
            onClick={handleToggle}
            mt="1rem"
          >
            Show {show ? "Less" : "More"}
          </Button> */}
        </Flex>
        {/* <Collapse startingHeight={250} in={show}> */}
          <Grid
            className={style.listContainer}
            flexWrap="wrap"
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap="20px"
          >
            {books.map((book, index) => {
              // console.log("book",book)
              let src = book.volumeInfo.imageLinks?.thumbnail;
              const author = book.volumeInfo.authors;
              return (
                <Box key={book.id} className={styles.cardContainer}>
                      <Image src={src== undefined? "https://tse4.mm.bing.net/th?id=OIP.cQAl38ukZunMWrbo1LDzqQHaJq&pid=Api&P=0&h=180":src} alt="image" />
                      <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
                        Title : {book.volumeInfo.title}
                      </Heading>
                      <Heading Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
                       Author : {author == undefined? 'Unknwn Author': author}
                      </Heading>
                      <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
                        {"Price : $"+book.volumeInfo.pageCount}
                      </Heading>

                      <Text height='20vh' className={style.songDesc} noOfLines={5}>
                      {book.volumeInfo.description}
                      </Text>
                      <Flex className={styles.viewButtonDiv} key={book.title}  >
                          <Button colorScheme='orange' variant='outline' mr={'20vh'} >
                              CHECKOUT
                        </Button>
                        <Button colorScheme='orange' variant='outline' onClick={()=>removeFromCart(index)} >
                              REMOVE ITEM
                        </Button>
                      </Flex>
                    </Box>
              )
            })}
          </Grid>
        {/* </Collapse> */}
      </Box>
    ) : (
      // ! Skeleton to display before page load
      <Box
        width='100%'
        height="150vh"
        bg="#121212"
        className={style.listContainer}
      >
        {/* {[...new Array(20)].map((ele, index) => {
          return (
            <Box key={index}>
              <Skeleton height="300px" startColor="#000000" endColor="#434343" />
            </Box>
          );
        })} */}
         <Heading as={"h1"} size="xl" m={"100px"} color="#fff" noOfLines={2}>
      Nothing there in the Cart!
    </Heading>
      </Box>
  )
}

export default ShoppingCart