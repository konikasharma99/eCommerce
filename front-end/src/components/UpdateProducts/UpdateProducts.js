import { useState, useEffect } from "react";
import "./UpdateProducts.css";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProducts = () => {
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodCategory, setProdCategory] = useState("");
  const [prodCompany, setProdCompany] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    loadDetails();
  }, []);
  const loadDetails = async () => {
    let result = await fetch(`http://localhost:5000/products/${params.id}`, {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setProdName(result.name);
    setProdPrice(result.price);
    setProdCategory(result.category);
    setProdCompany(result.company);
  };
  const onButtonClick = async () => {
    if (!prodName || !prodCompany || !prodCompany || !prodPrice) {
      setShowError(true);
      return false;
    }
    let result = await fetch(`http://localhost:5000/products/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        name: prodName,
        price: prodPrice,
        category: prodCategory,
        company: prodCompany,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    if (result) {
      alert("Product updated successfully");
      navigate("/");
    }
  };
  return (
    <div className="prodMain">
      <h1>Update Product details here: </h1>
      <div className="prodInputsMain">
        <input
          className="prodInput"
          value={prodName}
          onChange={(e) => setProdName(e.target.value)}
          placeholder="Name"
          type="text"
        />
        {showError && !prodName && (
          <span className="error">Enter valid input</span>
        )}
        <input
          className="prodInput"
          value={prodPrice}
          onChange={(e) => setProdPrice(e.target.value)}
          placeholder="Price"
          type="text"
        />
        {showError && !prodPrice && (
          <span className="error">Enter valid input</span>
        )}
        <input
          className="prodInput"
          value={prodCategory}
          onChange={(e) => setProdCategory(e.target.value)}
          placeholder="Category"
          type="text"
        />
        {showError && !prodCategory && (
          <span className="error">Enter valid input</span>
        )}
        <input
          className="prodInput"
          value={prodCompany}
          onChange={(e) => setProdCompany(e.target.value)}
          placeholder="Company"
          type="text"
        />
        {showError && !prodCompany && (
          <span className="error">Enter valid input</span>
        )}
        <button onClick={onButtonClick} className="buttonMain">
          Submit
        </button>
      </div>
    </div>
  );
};
export default UpdateProducts;
