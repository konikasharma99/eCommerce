import "./Nav.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const Auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
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
          {Auth ? (
            <Link onClick={logOut} className="navList" to={"/signup"}>
              Logout
            </Link>
          ) : (
            <>
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
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
