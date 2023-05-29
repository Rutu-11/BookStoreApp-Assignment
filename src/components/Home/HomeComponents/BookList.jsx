import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Grid,
  Skeleton,
  Collapse,
  Button,
} from "@chakra-ui/react";
import style from "./BookList.module.css";
import CardCom from "../../CommonComp/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../redux/actions/bookActions";

function BookList({ artist, heading, setPlaySong }) {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  useEffect(() => {
    dispatch(fetchBooks(artist));
  }, [dispatch]);
  const {loading,books} = useSelector(
    (state) => state.book
  );
// console.log("books",books)

  return books?.length > 0 ? (
    <Box className={style.BookList} mb="-40px">

        <Grid
          className={style.listContainer}
          flexWrap="wrap"
          p={"80px 80px"}
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
            "repeat(6, 1fr)",
          ]}
          gap="30px"
        >
          {books.map((book, index) => {
            // console.log("book",book)
            return <CardCom key={index} book={book} />;
          })}
        </Grid>
    </Box>
  ) : (
    // ! Skeleton to display before page load
    <Grid
      flexWrap="wrap"
      gridTemplateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
      ]}
      gap="20px"
      bg="#121212"
    >
      {[...new Array(20)].map((ele, index) => {
        return (
          <Box key={index}>
            <Skeleton height="300px" startColor="#000000" endColor="#434343" />
          </Box>
        );
      })}
    </Grid>
  );
}

export default BookList;
