import React from 'react'
import axios from 'axios'
import Slider from "react-slick";
import { useState,useEffect } from 'react';
import { baseUrl } from '../utills/baseUrl';
import Loading from '../Loading/Loading';

export default function CategorisSlider() {
  const [Categories,setCategories]=useState([]);
  const GetAllCategoris= async ()=>{
    let {data}=await axios.get(`${baseUrl}/categories`)
    setCategories(data.data)
  }


useEffect(() => {
  GetAllCategoris()
}, []);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true
    
  };
  return  <> 
  
 {Categories? <div className="container my-4"autoplayspeed={3000} >
  <h4>shop popular Categoris    </h4>
  <Slider {...settings} className="w-100 ">
  {Categories.map((item)=>{     return <div>  <img src={item.image} height={330} className='w-100' alt=""/>  
  <h6  className='badge  text-dark'>{item.name}</h6>
    </div>    })}    
  </Slider>
</div>:<Loading/>}
  

</>


}






