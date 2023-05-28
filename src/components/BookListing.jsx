import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions/bookActions';

function BookListing() {
// const [books, setBooks] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks("Novel"));
  }, [dispatch]);
  const {loading,books} = useSelector(
    (state) => state.book
  );
  // const books =[]
  if (loading) {
    return <div>Loading...</div>;
  }
  
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  console.log('data',books)
  return (
    <div>
      {/* Render your books */}
      {
        books.map((book)=>{
            return(
                <div key={book.key}>
                    <h2>{book.volumeInfo.title}</h2>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
                    {/* Render other book details */}
                </div>
            )
        })
    }
      
    </div>
  );
}

export default BookListing;
// const mapStateToProps = (state) => {
//   return {
//     books: state.book.books,
//     loading: state.book.loading,
//     error: state.book.error
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchBooks: () => dispatch(fetchBooks())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BookListing);
