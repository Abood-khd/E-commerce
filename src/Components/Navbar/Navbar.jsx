import { Link, NavLink } from "react-router-dom";
import logo from "../../images/freshcart-logo.svg";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Navbar() {
let {count}=useContext(CartContext)
  return (
    <>
      <div class="container-fluid">
        <nav className="navbar navbar-expand-lg  bg-main-light navbar-light p-2">
          <div className="container-fluid">
            <a className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="homepages">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="products">
                    Products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link " to="categoris">
                    Categoris
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="brands">
                    Brands
                  </NavLink>
                </li>





              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-1">
        <Link to='cart'>
        <li className="nav-item">         <button type="button" class="btn me-3 position-relative">
                    Cart                      <i class="fa-solid fa-cart-shopping"></i>

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
{count}

    <span className="visually-hidden">unread messages</span>
  </span>
</button>
                
                </li>

        </Link>
                  
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="login">
                    login
                  </NavLink>
                </li>
       
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="register">
                  Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>


  );
}
