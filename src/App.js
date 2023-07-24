import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import PropsDemo from "./components/PropsDemo";
import Products from "./components/Products";

function App() {
  // const name = "Rishabh";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout component={<Home />} />} />
          <Route
            path="/about-us"
            element={<Layout component={<AboutUs />} />}
          />
          <Route
            path="/contact-us"
            element={<Layout component={<ContactUs />} />}
          />
          <Route path="/props" element={<Layout component={<PropsDemo />} />} />
          <Route
            path="/products"
            element={<Layout component={<Products />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
