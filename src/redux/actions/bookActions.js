import axios from 'axios';

// Action Types
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

// Action Creators
export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};

export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books
  };
};

export const fetchBooksFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
};

// Thunk function
export const fetchBooks = (title) => {
  return (dispatch) => {
    // console.log("title",title)
    dispatch(fetchBooksRequest());
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+title+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
      .then(response => {
        // console.log('response',response)
        const books = response.data.items
        dispatch(fetchBooksSuccess(books));
      })
      .catch(error => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};

// const handleSubmit = async(e)=>{
//   e.preventDefault();
//   console.log(input)
//   // author=tolkien&sort=new
//  let res = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+input+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40');
// //  let data = await res.json();
// setInput(res.data.items)
 
//   // navigate(`/search/${input}`)

// }