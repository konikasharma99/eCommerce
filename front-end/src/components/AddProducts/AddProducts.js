import { useState } from "react";
import "./AddProducts.css";
const AddProducts = () => {
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodCategory, setProdCategory] = useState("");
  const [prodCompany, setProdCompany] = useState("");
  const [showError, setShowError] = useState(false);
  const onButtonClick = async () => {
    if (!prodName || !prodPrice || !prodCategory || !prodCompany) {
      setShowError(true);
      return false;
    }
    const Auth = JSON.parse(localStorage.getItem("user"));
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({
        name: prodName,
        price: prodPrice,
        category: prodCategory,
        company: prodCompany,
        userId: Auth._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("**", result);
  };
  return (
    <div className="prodMain">
      <h1>Add Product details here: </h1>
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
export default AddProducts;
