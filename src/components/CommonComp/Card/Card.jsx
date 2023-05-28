import React from "react";
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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  useToast
} from '@chakra-ui/react'


function CardCom({ book }) {
  const toast = useToast();
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  let src = book.volumeInfo.imageLinks?.thumbnail;
  const author = book.volumeInfo.authors;
  console.log('src',book);
  const addToCart=(book)=>{
    let cart = JSON.parse(localStorage.getItem('book-list')) || [];
    cart.push(book);
    localStorage.setItem("book-list", JSON.stringify(cart));
    toast({
      title: 'Item Added to cart.',
      description: "Redirecting to home page.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    navigate('/cart')
  }
  return (
    <>
    <Box key={book.id} className={style.cardContainer}>
       <Image src={src== undefined? "https://tse4.mm.bing.net/th?id=OIP.cQAl38ukZunMWrbo1LDzqQHaJq&pid=Api&P=0&h=180":src} alt="image" />
      <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
        {book.volumeInfo.title}
      </Heading>
      <Text className={style.songDesc} noOfLines={1}>
        {author == undefined? 'Unknwn Author': author}
      </Text>
      <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
        {"Price : $"+book.volumeInfo.pageCount}
      </Heading>
      <Box className={style.viewButtonDiv} key={book.title}>
          <Button colorScheme='orange' variant='outline' onClick={onOpen}>
              VIEW MORE
        </Button>
      </Box>
    </Box>

<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>
  <ModalHeader color={'orange'} align={'center'} noOfLines={1}>{book.volumeInfo.title}</ModalHeader>
  <ModalCloseButton />
  <ModalBody  >
    <Flex justify={"space-between"}>
      <Box>
      <Image src={src== undefined? "https://tse4.mm.bing.net/th?id=OIP.cQAl38ukZunMWrbo1LDzqQHaJq&pid=Api&P=0&h=180":src} alt="image" />
      </Box>
      <Box>
          <Heading as={"h6"} size="xsm">{"Author :  "+ author == undefined? 'Unknwn Author': author} </Heading>
         <Heading as={"h6"} size="xsm">{"Category : "+ book.volumeInfo.categories} </Heading>
          <Heading as={"h6"} size="xsm">{"Price : $"+ book.volumeInfo.pageCount} </Heading>
          <Heading as={"h6"} size="xsm">{"Published Date : "+ book.volumeInfo.publishedDate} </Heading>
          <Heading as={"h6"} size="xsm">{"Publisher : "+ book.volumeInfo.publisher} </Heading>
          <Heading as={"h6"} size="xsm">{"Print Type : "+ book.volumeInfo.printType} </Heading>
      </Box>
    </Flex>
 
    <Text > {book.volumeInfo.description}</Text>
      
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={onClose}>
      Close
    </Button>
    <Button colorScheme='red' variant='outline' onClick={()=>addToCart(book)}>Add To Cart</Button>
  </ModalFooter>
</ModalContent>
</Modal>
</>
  );
}

export default CardCom;
