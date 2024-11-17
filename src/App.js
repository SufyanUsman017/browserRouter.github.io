import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Page from "./component/Page";
import Product from "./component/Product";
import Catagory from "./component/Catagory";
import Services from "./component/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="product/" element={<Product />} />
          <Route path="catagory/" element={<Catagory />} />
          <Route path="services/" element={<Services />} />
        </Route>

        <Route path="about/" element={<About />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="*" element={<Page />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
