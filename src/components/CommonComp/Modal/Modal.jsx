import react, { useContext } from 'react';
import "./Modal.css"
import { BookContext } from '../../../Context/ContextProvider';
const Modal=({show,item,onClose})=>{
const {addToCart} = useContext(BookContext)
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

