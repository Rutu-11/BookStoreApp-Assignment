import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../redux/actions/bookActions';

function BookListing({ books, loading, error, fetchBooks }) {
  useEffect(() => {
    fetchBooks(); // Fetch books when the component mounts
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      {/* Render your books */}
      {
        books.map((book)=>{
            return(
                <div key={book.key}>
                    <h2>{book.title}</h2>
                    <p>{book.author_name}</p>
                    {/* Render other book details */}
                </div>
            )
        })
    }
      
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    books: state.book.books,
    loading: state.book.loading,
    error: state.book.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListing);
