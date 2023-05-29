
import React,{useState} from 'react';
import { useEffect } from 'react';
import "./CartComp.css";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const navigate = useNavigate()
const toast = useToast()
    const handleCheckout=()=>{
        localStorage.removeItem('book-list')
        toast({
            title: 'Congratulations!.',
            description: "Order placed successfully continue shopping. Being redirected to Homepage",
            status:'success',
            duration: 3000,
            isClosable: true,
          })
          setTimeout(()=>{
            navigate('/')
          },3000)
         
    }
    const handlePrice = ()=>{
        let ans = 0;
        const amount = cart.reduce((acc, curr) => {
                // console.log("curr", curr);
                let price = curr.book.pageCount == 0? 276 :curr.book.pageCount
                return (acc += price* curr.quantity);
              }, 0);
              // setTotal(amount);
              // setBooks(cart);
        setPrice(amount);
    }

    const handleRemove = (ind) =>{
        cart.splice(ind,1)
        // const arr = cart.filter((item)=>item.id !== id);
        localStorage.setItem('book-list', JSON.stringify(cart));
        cart = JSON.parse(localStorage.getItem('book-list'))
        setCart(cart);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
        
    },[cart])

  return (
    <article>
        {
            cart?.map((item,ind)=>{
            //   console.log('item', item)
              let src = item.book.imageLinks?.thumbnail;
              return (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={src} />
                        <p>{item.book.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.quantity}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.book.pageCount == 0? 276 : item.book.pageCount}</span>
                        <button onClick={()=>handleRemove(ind)} >Remove</button>
                    </div>
                </div>
            )}
            
          )}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs : {price}</span>
        </div>
        <div className='checkout'>
            <button onClick={()=>handleCheckout()}>Checkout</button>
        </div>
    </article>
  )
}

export default ShoppingCart