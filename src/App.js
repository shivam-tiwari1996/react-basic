import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  const name = "Rishabh";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout name={name} />} />
          <Route path="/about-us" element={<AboutUs name={name} />} />
          <Route path="/contact-us" element={<ContactUs name={name} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
