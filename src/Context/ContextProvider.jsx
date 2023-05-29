import { useToast } from '@chakra-ui/react';
import React,{createContext, useEffect, useState} from 'react';

export const BookContext = createContext();

export default function BookContextProvider({children}){
    const toast = useToast()
    const [size, setSize] = useState(0);
    const [search, setSearch] = useState("");

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
    let cart = JSON.parse(localStorage.getItem("book-list")) || [];
    useEffect(()=>{
        setSize(cart.length)
    },[setSize,addToCart])


    return(
        <BookContext.Provider value={{size,setSize,setSearch,search,addToCart}} >
            {children}
        </BookContext.Provider>
    )
}