import axios from "axios";
import { createContext, useEffect } from "react";
import { baseUrl } from "../utills/baseUrl";
import { useState } from "react";

export let CartContext = createContext(0);

export default function CartContextProvider({ children }) {

let [count,setCount]=useState(0)

  function AddToCart(token, productId) {
    return axios
      .post(
        `${baseUrl}/cart`,
        { productId },
        {
          headers: { token },
        }
      )
      .then((data) => data)
      .catch((error) => error);
  }
  function GetUserCart(token) {
    return axios.get(`${baseUrl}/cart`, {
        headers: { token },
      })
      .then((data) => data)
      .catch((error) => error);

  }


  function GetCartCount() {
    let token=localStorage.getItem('Token')

    return axios.get(`${baseUrl}/cart`, {
        headers: { token },
      })
      .then((data) => {
        setCount(data.data.numOfCartItems)
      })
      .catch((error) => {

      });
  }



  function RemoveCartItem(token, productId) {
    return axios.delete(`${baseUrl}/cart/${productId}`, {
        headers: { token },
      })
      .then((data) => data)
      .catch((error) => error);
  }
  function UpdateCartItem(token, productId,count) {
    return axios.put(`${baseUrl}/cart/${productId}`,{count}, {
        headers: { token },
      })
      .then((data) => data)
      .catch((error) => error);
  }

useEffect(() => {
  let token=localStorage.getItem('Token')
  GetCartCount()
}, []);

  return (
    <CartContext.Provider value={{ AddToCart, GetCartCount,GetUserCart, RemoveCartItem ,UpdateCartItem,count}}>
      {children}
    </CartContext.Provider>
  );
}
