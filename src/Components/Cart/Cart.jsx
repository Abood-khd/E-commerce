import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { useState } from 'react'
import { notify } from "../utills/notify";
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Cart() {
 let [cart ,setCart] =useState([])
 let [price ,setTotlaPrice] =useState([])

 let {GetUserCart,RemoveCartItem,UpdateCartItem,GetCartCount}=  useContext(CartContext)
 async function getcart() {
  let token = localStorage.getItem('Token')
  if (token) {
     let response=  await    GetUserCart(token)
        setCart(response.data.data.products)
        setTotlaPrice(response.data.data.totalCartPrice)
  }
 }


 async function clearProudct(productId) {
  let token = localStorage.getItem('Token')
  if (token) {
     let response=  await    RemoveCartItem(token,productId)
        setCart(response.data.data.products)
        setTotlaPrice(response.data.data.totalCartPrice)
        notify('product deleted','success')
  }
 }
 async function UpdateProudct(productId,count) {
  let token = localStorage.getItem('Token')
  if (token) {
     let response=  await    UpdateCartItem(token,productId,count)
        setCart(response.data.data.products)
        setTotlaPrice(response.data.data.totalCartPrice)

        notify('product Update','success')
        GetCartCount()
  }
 }

 useEffect(() => {
  getcart()
 }, []);
  return (
    <>
    {cart.length != 0?    <div className="container">
        <div className='bg-main-light p-3 my-4'>
          <h3>Shop Cart</h3>
          <h6 className='text-main my-3 fw-bold'>Total cart price : {price} SYR</h6>
  
            {cart.map((item)=>{
              return <div className="row border-bottom my-3" key={item._id}>
                <div className="col-md-1">
                  <img src={item.product.imageCover} className='w-100' alt=""/>
                </div>
  
  
  
                <div className="col-md-11  d-flex justify-content-between">
                <div >
                <h6>{item.product.title}</h6>
                  <h6 className='text-main mx-2 fw-bold'>{item.price} SYR</h6>
                  <button className='text-danger border-0' onClick={()=>clearProudct(item.product._id)}>   Remove   <i className='fa-solid fa-trash '></i></button>
                </div>
                <div className=''>
                  <button  onClick={()=>UpdateProudct(item.product._id,item.count+1)} className='btn btn-border '>+</button>
                  <span className='mx-2'>{item.count}</span>
                  <button  onClick={()=>UpdateProudct(item.product._id,item.count-1)}  className='btn btn-border '>-</button>
                </div>
                </div>
  
  
  
  
              </div>
            })}
        </div>
            <Link to='/checkout' className='btn btn-primary text-white'>CHECKOUT</Link>
      </div>
      :<Loading/> }
      </>
   
  )
}
