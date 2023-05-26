import React from 'react'
import Layout from '../Layout/Layout';
import HomePages from '../HomePages/HomePages';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';
import ProductDatils from '../ProductDatills/ProductDatils';
import Categoris from '../Categoris/Categoris';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

export default function Router() {


  let routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePages /> },
        { path: "/homepages", element: <HomePages /> },
        { path: "/brands", element: <Brands /> },
        { path: "/products", element: <Products /> },
        { path: "/product-datils/:id", element: <ProductDatils /> },
        { path: "/categoris", element: <Categoris /> },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },

        { path: "/footer", element: <Footer /> },
        // {path: "*",element:<ErrorPage/>},
      ],
    },
  ]);





  return (
    <>
       <RouterProvider router={routes}></RouterProvider>;
    </>
  )
}
