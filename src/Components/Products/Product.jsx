import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { notify } from "../utills/notify";
export default function Product({ Products }) {
  const {AddToCart,GetCartCount}=  useContext(CartContext)

   async function addProduct(productId) {
    let token = localStorage.getItem('Token')
    if (token){ 
      let response= await AddToCart(token,productId)
      if (response.status===200) {
        GetCartCount()
        notify('Product added successfully to your cart','success')
      }
    }else{
      notify('You need to be logged in to complete this process ','error')
    }
  }



  return (
    <>
      {Products.map((val) => {
        return (

          <div class="col-md-2 my-3 " key={val._id}>
            <div class="product">
            <Link to={'/product-datils/'+val._id}>
            <img src={val.imageCover} className="w-100" alt="" />
              <h6 className="text-main">{val.category.name}</h6>
              <p className="fw-bolder">{val.title.split(" ").slice(0, 2).join(" ")}</p>
              <div class="    d-flex justify-content-between">
                  <span>{val.price} SYR</span>
                <div >
                    <i className="fas fa-star text-warning"></i>{" "}
                    {val.ratingsAverage}
                </div>
              </div>
            </Link>
              <button  onClick={()=>addProduct(val._id)}  className="btn bg-main mt-1 text-white w-100">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
