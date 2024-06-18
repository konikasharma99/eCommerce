import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className={"navMainList"}>
        <li>
          <Link className="navList" to={"/signup"}>
            Sign-up
          </Link>
        </li>
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
          <Link className="navList" to={"/logout"}>
            Logout
          </Link>
        </li>
        <li>
          <Link className="navList" to={"/profile"}>
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
