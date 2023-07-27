import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../../Authentication/SignUp";

const Header = () => {
  return (
    <div className="min-h-[5vh] flex justify-between items-center bg-black text-white p-2">
      <p>Brand Logo</p>{" "}
      <span className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <SignUp />
      </span>
    </div>
  );
};

export default Header;
