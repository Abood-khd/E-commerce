import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { notify } from '../utills/notify';
import { CartContext } from '../Context/CartContext';

export default function ProductDatils() {
  const [Product,setProduct]=useState([]);
  const {AddToCart,GetCartCount}=  useContext(CartContext)
  async function addProduct(productId) {
    let token = localStorage.getItem('Token')
    if (token){ 
      let response= await AddToCart(token,productId)
      if (response.status===200) {
        GetCartCount()
      }
    }
  }

let {id}=useParams()
  const GetProduct= async ()=>{
    let {data}=await axios.get(`  https://route-ecommerce.onrender.com/api/v1/Products/${id}`)
    setProduct(data.data)
  }


useEffect(() => {
  GetProduct()
}, []);

  return (
    <>
    <div class="container">
      <div class="row  align-items-center">
        <div class="col-md-3 mt-2">
        <img src={Product.imageCover} className='w-100 rounded-3' alt=""/>
        </div>
        <div class="col-md-9 text-end">
          <h3 className='fw-bolder'>{Product.title}</h3>
          <p>{Product.description}</p>
          <div class="d-flex justify-content-between mt-5">
            <span>{Product.price} SYR</span>
            <div class="">
            <i className="fas fa-star text-warning"></i>{" "}
                    {Product.ratingsAverage}
            </div>
          </div>
          <button className='btn bg-main w-100 text-white my-3' onClick={()=>addProduct(Product._id)}>Add to cart</button>
        </div>
      </div>
    </div>
    </>
  )
}
