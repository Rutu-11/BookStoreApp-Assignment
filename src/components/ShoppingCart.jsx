import React from "react";
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

function ShoppingCartComp() {
  let books = JSON.parse(localStorage.getItem("book-list")) || [];
  return (
    <>
      <AnimatedPages>
        <Box className={styles.homeContainer}>
          <Navbar bgColor="black" />
          <AnimatedPages>
            <ShoppingCart />
          </AnimatedPages>
        </Box>
      </AnimatedPages>
    </>
  );
}

export default ShoppingCartComp;
