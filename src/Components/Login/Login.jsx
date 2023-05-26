import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { valeUrl } from "../utills/valUrl";

export default function Login() {
  const notify = (msg, type) => toast[type](msg);

  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: Yup.string(),
  });

  let RegisterFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
   axios.post(`${valeUrl}signin`, values)
        .then((data) => {
          if (data.status === 200) {
            localStorage.setItem('Token',data.data.token)
            setLoading(false);
            notify("success", "success");
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 400)
            notify(error.response.data.message, "error");

        });
    },
    validationSchema,
  });

  return (
    <>
      <div className="w-50 m-auto my-5">
        <h2 className="text-main">Login Now</h2>
        <form onSubmit={RegisterFormik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={RegisterFormik.values.email}
            onBlur={RegisterFormik.handleBlur}
            onChange={RegisterFormik.handleChange}
            type="email"
            className="form-control my-1"
            id="email"
            name="email"
            placeholder="Enter Your email"
          />
          {RegisterFormik.errors.password && RegisterFormik.touched.email ? (
            <div className="alert alert-danger">
              {RegisterFormik.errors.email}
            </div>
          ) : (
            ""
          )}
          ;<label htmlFor="password">Password</label>
          <input
            value={RegisterFormik.values.password}
            onBlur={RegisterFormik.handleBlur}
            onChange={RegisterFormik.handleChange}
            type="password"
            className="form-control my-1"
            id="password"
            name="password"
            placeholder="Enter Your password"
          />
          {RegisterFormik.errors.password && RegisterFormik.touched.password ? (
            <div className="alert alert-danger">
              {RegisterFormik.errors.password}
            </div>
          ) : (
            ""
          )}
          ;
          <button
            disabled={
              !(RegisterFormik.isValid && RegisterFormik.dirty && !loading)
            }
            className="btn bg-main text-white my-4"
          >
            {!loading ? "Login" : <i className="fas fa-spinner fa-spin"></i>}
          </button>
        </form>
      </div>
    </>
  );
}
