import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { baseUrl } from "../utills/baseUrl";
import axios from "axios";
import Loading from "../Loading/Loading";
export default function MainSlider() {

  const [Categories,setCategories]=useState([]);
  const GetAllCategoris= async ()=>{
    let {data}=await axios.get(`${baseUrl}/brands`)
    setCategories(data.data)
  }


useEffect(() => {
  GetAllCategoris()
}, []);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true
  };
  return  <>
{Categories?    <div className="my-4 container-fluid">
<div class="row ">
  <div class="col-md-12">
  <Slider {...settings} className="w-100 ">
  {Categories.map((item)=>{     return <div>  <img src={item.image} height={230} className='' alt=""/>  

 
</div>    })} 
  </Slider>
  </div>

</div>

</div>:<Loading/>}
  </>
}
