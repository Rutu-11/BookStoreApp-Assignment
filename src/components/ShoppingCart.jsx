import React from 'react'
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
import CardCom from './CommonComp/Card/Card';
import AnimatedPages from '../AinmatedPages';
import ShoppingCart from './CartComp';
import Navbar from './CommonComp/Navbar/Navbar';
import Sidebar from './CommonComp/Sidebar/sidebar';

function ShoppingCartComp() {
 let books = JSON.parse(localStorage.getItem('book-list')) || [];
    return(
    <>
    <AnimatedPages>
      <Box ml={["80px","80px" ,"196px","196px","196px","196px"]} mb="60px" className={styles.homeContainer}>
      
        <Navbar bgColor="black" />
        <AnimatedPages>
        <ShoppingCart/>
        
        </AnimatedPages>
        <Sidebar />
        
      </Box>
      {/* {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : <Preview />} */}
       </AnimatedPages>
       </>
  )
}

export default ShoppingCartComp