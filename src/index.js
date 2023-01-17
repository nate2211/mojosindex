import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react";
import {AuthContextProvider} from "./context/AuthContext";
import {CartContextProvider} from "./context/CartContext";
import {BrowserRouter as Router} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import {StripeContextProvider} from "./context/StripeContext";
import {Provider} from "react-redux";
import store from "./store";
import {ErrorContextProvider} from "./context/ErrorContext";
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
      <ChakraProvider>
          <ErrorContextProvider>
              <AuthContextProvider>
                  <CartContextProvider>
                      <StripeContextProvider>
                          <Router>
                              <QueryClientProvider client={queryClient}>
                                  <Provider store={store}>
                                      <HelmetProvider>
                                        <App />
                                      </HelmetProvider>
                                  </Provider>
                              </QueryClientProvider>
                          </Router>
                      </StripeContextProvider>
                  </CartContextProvider>
              </AuthContextProvider>
          </ErrorContextProvider>
      </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
