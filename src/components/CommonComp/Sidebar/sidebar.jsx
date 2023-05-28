import { Link, useNavigate } from "react-router-dom";
import { Box, Text, Flex, Grid, Icon, Heading, Center } from "@chakra-ui/react";
import SideComp from "./sideComponents";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import style from "./sidebar.module.css";
import { FiDownload } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import {BsCart} from 'react-icons/bs'
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      className={style.sideBox}
      bg="#000000"
      position={"fixed"}
      w={["80px", "80px", "196px", "196px", "196px", "196px"]}
      p={"24px"}
      zIndex={5}
      top="0"
      bottom={"0"}
      left="0"
    >
     
      <Flex gap={"5px"} justify="space-between">
        
        <Heading
          size={"lg"}
          color={"#fff"}
          display={["none", "none", "block", "block", "block"]}
        >
          Bookstore
        </Heading>
      </Flex>

      <Box mt="15px" p={"10px 0"} color="#b3b3b3">
        {/* //! made changes to useLocalStorage */}
        <Flex
          className={style.hoverText}
          h="30px"
          mt="15px"
          onClick={() => {
            localStorage.removeItem("SearchFlag", false);
            navigate("/");
          }}
        >
          <HiOutlineHome size={"30px"} />
          <Center>
            <Text
              ml="15px"
              display={["none", "none", "block", "block", "block"]}
            >
              Home
            </Text>
          </Center>
        </Flex>

        {/* <Flex
          className={style.hoverText}
          h="30px"
          mt="15px"
          onClick={() => {
            localStorage.setItem("SearchFlag", true);
            navigate("/search/:book");
          }}
        >
          <IoSearchOutline size={"30px"} />
          <Center>
            <Text
              ml="15px"
              display={["none", "none", "block", "block", "block"]}
            >
              Search
            </Text>
          </Center>
        </Flex> */}

        {/* <SideComp icon={IoSearchOutline} name="Search" flag={true} /> */}
        <Link to={'/cart'}>
          <SideComp icon={BsCart} name="Cart" />
        </Link>
      </Box>

      
    </Box>
  );
};

export default Sidebar;
