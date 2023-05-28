import {useState} from 'react';
import Navbar from '../CommonComp/Navbar/Navbar';
import {  Box ,Button} from "@chakra-ui/react";
import styles from "./home.module.css";
import BookList from "./HomeComponents/BookList";
import AnimatedPages from "../../AinmatedPages";
import { useColorMode, useColorModeValue } from '@chakra-ui/react' 


const Home = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });
 
  return (
    <>
    <AnimatedPages>
      <Box  className={styles.homeContainer}>
      
        <Navbar bgColor="black" />
        <AnimatedPages>
        <BookList artist={'Motivational'} heading={"Motivational Stories"}  />
        
        </AnimatedPages>
        
      </Box>
       </AnimatedPages>
       </>
  );
};

export { Home };
