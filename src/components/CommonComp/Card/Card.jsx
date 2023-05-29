import React,{useState} from "react";
import {
  Card,
  Heading,
  Image,
  Text,
  IconButton,
  Center,
  Box,
   Button, ButtonGroup 
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./Card.module.css";

import {useNavigate} from 'react-router-dom'
import Modal from "../Modal/Modal";
import {
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
  // useDisclosure,
  Flex,
  useToast
} from '@chakra-ui/react'


function CardCom({ book }) {
  const toast = useToast();
  const navigate = useNavigate()
  const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
  let src = book.volumeInfo.imageLinks?.thumbnail;
  const author = book.volumeInfo.authors;


  const addToCart=(book)=>{
    
    let cart = JSON.parse(localStorage.getItem('book-list')) || [];
    let isPresent = false;
		cart.forEach((product)=>{
      console.log('product',product.book.title)
      console.log('book',book.volumeInfo.title)
			if (book.volumeInfo.title === product.book.title){
        isPresent= true
      }
			
		})
    if(isPresent){
      toast({
        title: 'Item Already in the cart.',
        description: "Please add some other items.",
        status:'warning',
        duration: 3000,
        isClosable: true,
      })
      return;
    }
    
      let obj= {book:book.volumeInfo, quantity:1}
      cart.push(obj);
      localStorage.setItem("book-list", JSON.stringify(cart));
      toast({
        title: 'Item Added to cart.',
        description: "Item added to cart contineu Shopping!.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    
    
  }

  return (
    <>
    <Box key={book.id} className={style.cardContainer}  >
       <Image src={src== undefined? "https://tse4.mm.bing.net/th?id=OIP.cQAl38ukZunMWrbo1LDzqQHaJq&pid=Api&P=0&h=180":src} alt="image" />
      <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
        {book.volumeInfo.title}
      </Heading>
      <Text className={style.bookDesc} noOfLines={1}>
        {author == undefined? 'Unknwn Author': author}
      </Text>
      <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
        {"Price : $"+book.volumeInfo.pageCount}
      </Heading>
      <Box className={style.viewButtonDiv} key={book.title}>
          <Button colorScheme='orange' variant='outline' onClick={()=>{setShow(true);setItem(book)}}>
              VIEW MORE
        </Button>
        
      </Box>
    </Box>
    <Modal show={show} item={bookItem} onClose={()=>setShow(false)} addToCart={addToCart}/>

</>
  );
}

export default CardCom;
