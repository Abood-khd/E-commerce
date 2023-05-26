import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';
import { baseUrl } from '../utills/baseUrl';
import Loading from '../Loading/Loading';

export default function Products() {
  const [Products,setProducts]=useState([]);


  const GetAllProducts= async ()=>{
    let {data}=await axios.get(`  ${baseUrl}/Products`)
    setProducts(data.data)
  }


useEffect(() => {
  GetAllProducts()
}, []);

  return (
    <>
  <div class="container mt-5">
         {Products.length != 0 ? <div class="row">
      <Product Products={Products}/>
    </div>:<Loading/>}
  </div>
    </>
  )
}
