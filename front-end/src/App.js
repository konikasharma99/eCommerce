import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import PrivateComp from "./components/privateComp";
import Login from "./components/Login/Login";
import AddProducts from "./components/AddProducts/AddProducts";
import AllProducts from "./components/AllProducts/AllProducts";
import UpdateProducts from "./components/UpdateProducts/UpdateProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<AllProducts />} />
            <Route path="/addProduct" element={<AddProducts />} />
            <Route path="/updateProduct/:id" element={<UpdateProducts />} />
            <Route path="/logout" element={<h1>logout Component</h1>} />
            <Route path="/profile" element={<h1>profile Component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
