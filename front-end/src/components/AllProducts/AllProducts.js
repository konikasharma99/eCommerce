import { useState, useEffect } from "react";
import "./AllProducts.css";
import { Link } from "react-router-dom";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  const deleteProd = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Product is deleted");
      getProducts();
    }
    console.log("()", result);
  };
  console.log("&&", products);
  return (
    <div className="dislayMain">
      <h1>All products</h1>
      <ul className="list-products-lable">
        <li className="list-label-per heading">S.No</li>
        <li className="list-label-per heading">Name</li>
        <li className="list-label-per heading">Price</li>
        <li className="list-label-per heading">Category</li>
        <li className="list-label-per heading">Company</li>
        <li className="list-label-per heading">Operations</li>
      </ul>
      {products.map((itm, index) => {
        return (
          <ul className="list-products-lable">
            <li className="list-label-per">{index + 1}</li>
            <li className="list-label-per">{itm.name}</li>
            <li className="list-label-per">{itm.price}</li>
            <li className="list-label-per">{itm.category}</li>
            <li className="list-label-per">{itm.company}</li>
            <li className="list-label-per">
              <button onClick={() => deleteProd(itm._id)}>delete</button>
              <Link to={"/updateProduct/" + itm._id}>Update</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default AllProducts;
