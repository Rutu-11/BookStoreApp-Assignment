import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Box,
  Button,
  Spacer,
  IconButton,
  Image,
  Heading,
  Text,
  Fade,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  transition,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  
} from "@chakra-ui/react";
import { useDisclosure ,useColorModeValue} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  ExternalLinkIcon,
  EditIcon,
  SearchIcon,
  AddIcon,

} from "@chakra-ui/icons";

import { FaPowerOff, FaBars } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import PlayListAction from "../../../Redux/SpotifyPlayList/PlayListAction";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useColorMode } from '@chakra-ui/react' 
import { fetchBooks } from "../../../redux/actions/bookActions";
function Navbar({ bgColor }) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const getSongBySearch = (e) => {
    const key = e.code;
    console.log('key',key)
    if (key == "Enter") {
      // dispatch(fetchBooks(search));
      navigate(`/search/${search}`)
    }
  };
  const useDetails = JSON.parse(localStorage.getItem("userDetail"));

  const color = useColorModeValue('white', '#b3b3b3')
 
  return (
    <>
      <Flex
        className={styles.navbarContainer}
        justify="space-between"
        bg={"#000000"}
        padding="7px 30px"
        position="fixed"
        top="0px"
        left={'0'}
        right={"0"}
      >
          <Box>
            <InputGroup>
              <Input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyUp={getSongBySearch}
                htmlSize={25}
                width="auto"
                borderRadius="50px"
                bg={"white"}
                height={["33px", "33px", "33px", "33px", "37px", "38px"]}
                focusBorderColor="black.400"
                placeholder="What do you want to listen to?"
                onClick={() => {
                  navigate("/search/:book");
                }}
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <InputLeftElement>
                <SearchIcon boxSize={"20px"} color={"#000000"} />
              </InputLeftElement>
            </InputGroup>
          </Box>
      
        {/* <Spacer /> */}
           <Divider
                orientation="vertical"
                m={"0 20px"}
                fontSize="25px"
                w={"auto"}
                display={["none", "none", "none", "flex", "flex"]}
              />


            {/* <Flex
           
              justify={"space-between"}
              align={"center"}
              bg="black"
              borderRadius="25px"
              h={"45px"}
              w={"xsm"}
            >
              <Image className={styles.image}
                borderRadius="full"
                boxSize="40px"
                src={useDetails[0].picture}
                alt={useDetails[0].name}
                onMouseOver={onToggle}
                onMouseOut={onToggle}
                onClick={onOpen}
                mr="15px"
                _hover={{boxSize:"41px"}}
              />
              <Text
                variant={"unstyled"}
                bg={"blackAlpha.200"}
                mr={1}
                display={["none", "none", "flex", "flex", "flex"]}
              >
                {useDetails[0].name}
              </Text>
   
            </Flex> */}
       <Link to={"/"}>
                <Button
                  className={styles.navButtons}
                  variant={"unstyled"}
                  bg="#090909"
                  m={"0 8px"}
                  borderRadius="25px"
                  w="90px"
                  display={["none", "none", "none", "flex", "flex"]}
                >
                  Home
                </Button>
              </Link>
              <Link to={"/cart"}>
                <Button
                  className={styles.navButtons}
                  variant={"unstyled"}
                  bg="#090909"
                  m={"0 8px"}
                  borderRadius="25px"
                  w="90px"
                  display={["none", "none", "none", "flex", "flex"]}
                >
                Cart
                </Button>
              </Link>
              <Link to={"/checkout"}>
                <Button
                  className={styles.navButtons}
                  variant={"unstyled"}
                  bg="#090909"
                  m={"0 8px"}
                  borderRadius="25px"
                  w="90px"
                  display={["none", "none", "none", "flex", "flex"]}
                >
                  Checkout
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button
                  className={styles.navButtons}
                  variant={"unstyled"}
                  bg="#090909"
                  m={"0 8px"}
                  borderRadius="25px"
                  w="90px"
                  display={["none", "none", "none", "flex", "flex"]}
                >
                  Sign Up
                </Button>
              </Link>

              <Link to={"/login"}>
                <Button
                  className={styles.login}
                  variant={"unstyled"}
                  bg="#ffffff"
                  color={"#000000"}
                  borderRadius="25px"
                  w="90px"
                  display={["none", "none", "none", "flex", "flex"]}
                >
                  Log In
                </Button>
              </Link>
            </Flex>
         
      
    </>
  );
}

export default Navbar;
