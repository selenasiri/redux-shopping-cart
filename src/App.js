import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff

import {createStore} from 'redux';





// initial store
const initialStore = {
  count: 78
};
// reducer 
function reducer(state, action) {
  console.log({state, action}); // action is undefined, so for here redux passes a default action
  if(action.type === "DECREASE") {
    console.log("hey it actually worked")
    return { count: state.count -1} //creates a new object without mutating the old one
  }
  return state; // return the state before the update
}
// store
const store = createStore(reducer, initialStore); // but now the initialState is 'count'.
store.dispatch({type: "DECREASE"})
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
