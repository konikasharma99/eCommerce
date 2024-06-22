import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import PrivateComp from "./components/privateComp";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<h1>Products List</h1>} />
            <Route path="/addProduct" element={<h1>addProduct Component</h1>} />
            <Route
              path="/updateProduct"
              element={<h1>updateProduct Component</h1>}
            />
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
