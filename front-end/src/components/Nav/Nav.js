import "./Nav.css";
import React from "react";
import logo from "../../assets/eCommerceLogo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const Auth = localStorage.getItem("user");
  let authName = Auth && JSON.parse(Auth);
  authName = authName?.name;
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="navMain">
      <img className="imgLogo" alt="Logo" src={logo} />
      {Auth ? (
        <ul className={"navMainList"}>
          <li>
            <Link className="navList" to={"/"}>
              Products
            </Link>
          </li>
          <li>
            <Link className="navList" to={"/addProduct"}>
              Add Product
            </Link>
          </li>
          <li>
            <Link className="navList" to={"/updateProduct"}>
              Update Product
            </Link>
          </li>
          <li>
            <Link className="navList" to={"/profile"}>
              Profile
            </Link>
          </li>
          <li>
            <Link onClick={logOut} className="navList" to={"/signup"}>
              Logout {authName}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-right">
          <li>
            <Link className="navList" to={"/signup"}>
              Sign-up
            </Link>
          </li>
          <li>
            <Link className="navList" to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
