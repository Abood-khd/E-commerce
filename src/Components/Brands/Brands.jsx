import React, { useEffect, useState } from 'react'
import { baseUrl } from '../utills/baseUrl';
import axios from 'axios';

export default function Brands() {
  const [Barnd,setBrand]=useState([]);
  const GetAllBrands= async ()=>{
    let {data}=await axios.get(`${baseUrl}/brands`)
    setBrand(data.data)
    console.log(data.data);
  }


  useEffect(() => {
    GetAllBrands()
  }, []);
  return (
    <>
    <div className="row">

{Barnd.map((item)=><>
  <div className='col-md-3 text-center '>
    <img src={item.image} className='w-100 ' alt=""/>
  </div>
</>
)}

    </div>

    </>
  )
}
