import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import BookContextProvider from './Context/ContextProvider';
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="178045007315-9et36biko37lslr4ff2nituqv0b3k7lv.apps.googleusercontent.com" >
    <ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
      <BookContextProvider>
        <App />
    </BookContextProvider>
    </Provider>
    </BrowserRouter>
    </ChakraProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
