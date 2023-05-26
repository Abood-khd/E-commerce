import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {valeUrl} from '../utills/valUrl.js'
export default function Register() {

  const notify = (msg,type) => toast[type](msg);




 let [loading,setLoading] =useState(false)
let navigate=useNavigate()
  const  validationSchema= Yup.object({
    name:Yup.string().min(3).max(15).required(),
    email: Yup.string().email("Please enter a valid email address").required("Email field is required"),
    password: Yup.string().matches(/^[a-z0-9@#$%]{6,}$/,'password must the pattern'),
    rePassword: Yup.string().oneOf([Yup.ref('password')],'passwrod and repassowrd not match').required(),
  });

let RegisterFormik=  useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:'01010700700',
    }, onSubmit:(values)=>{
      setLoading(true)
   axios.post(`${valeUrl}signup`,values).then((data)=>{
if(data.status===201){
  setLoading(false)

  notify('success','success')
  navigate('/login')
}
   }).catch((error)=>{
    if(error.response.status ===409)
    notify(error.response.data.message,'error')

   })

    },validationSchema});




  return (
    <>
      <div className='w-50 m-auto my-5'>
        <h2>Register Now</h2>
        <form onSubmit={RegisterFormik.handleSubmit}>


          <label htmlFor='name'>Name</label>
          <input  value={RegisterFormik.values.name} onBlur={RegisterFormik.handleBlur} onChange={RegisterFormik.handleChange} type='text' className='form-control my-1' id='name' name='name'  placeholder='Enter Your Name' />

          {RegisterFormik.errors.name && RegisterFormik.touched.name?<div className='alert alert-danger'>
  {RegisterFormik.errors.name}
</div>:''};


          <label htmlFor='email'>Email</label>
          <input  value={RegisterFormik.values.email} onBlur={RegisterFormik.handleBlur} onChange={RegisterFormik.handleChange} type='email' className='form-control my-1' id='email' name='email'  placeholder='Enter Your email' />

{RegisterFormik.errors.password && RegisterFormik.touched.email?<div className='alert alert-danger'>
  {RegisterFormik.errors.email}
</div>:''};



          <label htmlFor='password'>Password</label>
          <input  value={RegisterFormik.values.password} onBlur={RegisterFormik.handleBlur} onChange={RegisterFormik.handleChange} type='password' className='form-control my-1' id='password' name='password'  placeholder='Enter Your password' />
          {RegisterFormik.errors.password && RegisterFormik.touched.password?<div className='alert alert-danger'>
  {RegisterFormik.errors.password}
</div>:''};


          <label htmlFor='password'>RePassword</label>
          <input  value={RegisterFormik.values.rePassword}  onBlur={RegisterFormik.handleBlur} onChange={RegisterFormik.handleChange} type='password' className='form-control my-1' id='rePassword' name='rePassword'  placeholder='Enter Your rePassword' />
          {RegisterFormik.errors.rePassword && RegisterFormik.touched.rePassword?<div className='alert alert-danger'>
  {RegisterFormik.errors.rePassword}
</div>:''};

          <button type='submit' disabled={!(RegisterFormik.isValid&&RegisterFormik.dirty&&!loading)} className='btn bg-main text-white my-4'>
{!loading?'Register': <i  className='fas fa-spinner fa-spin'></i>}



          </button>
        </form>
      </div>
    </>
  )
}
