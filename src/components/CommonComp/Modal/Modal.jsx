import react from 'react';
import "./Modal.css"
const Modal=({show,item,onClose,addToCart})=>{
//   const author = item.volumeInfo.authors;
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>Author : <span>{item.volumeInfo.authors}</span> </h3>
                            <h4>Publisher : <span>{item.volumeInfo.publisher}</span></h4>
                            <h4>Published Date : <span><span>{item.volumeInfo.publishedDate}</span></span> </h4>
                            <h6>Category : <span >{item.volumeInfo.categories}</span></h6>
                            <h6>Price : $<span >{item.volumeInfo.pageCount ==0 ? 279 :item.volumeInfo.pageCount }</span></h6>
                            <button onClick={()=>addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;

{/* <Modal isOpen={isOpen} onClose={onClose} width="60%" >
<ModalOverlay />
<ModalContent>
  <ModalHeader color={'orange'} align={'center'} noOfLines={1}>{book.volumeInfo.title}</ModalHeader>
  <ModalCloseButton />
  <ModalBody  >
    <Flex justify={"space-between"}>
      <Box>
      <Image src={src== undefined? "https://tse4.mm.bing.net/th?id=OIP.cQAl38ukZunMWrbo1LDzqQHaJq&pid=Api&P=0&h=180":src} alt="image" />
      </Box>
      <Box>
          <Heading as={"h6"} size="xsm">{"Author :  "+ author == undefined? 'Unknwn Author': author} </Heading>
         <Heading as={"h6"} size="xsm">{"Category : "+ book.volumeInfo.categories} </Heading>
          <Heading as={"h6"} size="xsm">{"Price : $"+ book.volumeInfo.pageCount} </Heading>
          <Heading as={"h6"} size="xsm">{"Published Date : "+ book.volumeInfo.publishedDate} </Heading>
          <Heading as={"h6"} size="xsm">{"Publisher : "+ book.volumeInfo.publisher} </Heading>
          <Heading as={"h6"} size="xsm">{"Print Type : "+ book.volumeInfo.printType} </Heading>
      </Box>
    </Flex>
 
    <Text > {book.volumeInfo.description}</Text>
      
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={onClose}>
      Close
    </Button>
    <Button colorScheme='red' variant='outline' onClick={()=>addToCart(book)}>Add To Cart</Button>
  </ModalFooter>
</ModalContent>
</Modal> */}