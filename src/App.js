import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff

import {createStore} from 'redux';
import reducer from './reducer'
// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5
};

// store
const store = createStore(reducer, initialStore); // but now the initialState is 'count'.

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
