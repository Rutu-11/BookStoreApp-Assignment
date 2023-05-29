import {useState} from 'react';
import Navbar from '../CommonComp/Navbar/Navbar';
import {  Box ,Button} from "@chakra-ui/react";
import styles from "./home.module.css";
import BookList from "./HomeComponents/BookList";
import AnimatedPages from "../../AinmatedPages";
import { useColorMode, useColorModeValue } from '@chakra-ui/react' 


const Home = () => {
const [size, setSize] = useState(0)
const [show, setShow] = useState()
  return (
    <>
    <AnimatedPages>
      <Box  className={styles.homeContainer}>
      
        {/* <Navbar  /> */}
        <AnimatedPages>
        <BookList artist={'Motivational'} heading={"Motivational Stories"}  />
        
        </AnimatedPages>
        
      </Box>
       </AnimatedPages>
       </>
  );
};

export { Home };
