import { useFormik } from 'formik'
import React from 'react'

export default function Checkout() {
  let checkoutFormik=useFormik({
    initialValues:{
      detalis:'',
      phone:'',
      city:''
    },
    onSubmit:(values)=>{
      console.log(values);
    }
    
  })
  return (
    <>
      <div className="w-50 m-auto">
        <form onSubmit={checkoutFormik.handleSubmit}>
          <label for="detalis">Detalis</label>
          <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur}  type="text" name='detalis'id='detalis' className='form-control my-3'/>
          <label for="phone">phone</label>
          <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur}  type="text" name='phone'id='phone' className='form-control my-3'/>
          <label for="city">City</label>
          <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur}  type="text" name='city'id='city' className='form-control my-3'/>
          <button className='btn btn-success form-control'>PLACE ORDER</button>
        </form>
      </div>
    </>
  )
}
