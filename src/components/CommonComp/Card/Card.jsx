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
  Flex,
  useToast
} from '@chakra-ui/react'


function CardCom({ book }) {
  const toast = useToast();
  const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
  let src = book.volumeInfo.imageLinks?.thumbnail;
  const author = book.volumeInfo.authors;


  

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
    <Modal show={show} item={bookItem} onClose={()=>setShow(false)} />

</>
  );
}

export default CardCom;
