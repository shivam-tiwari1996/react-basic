import FormikDemo from "../Authentication/FormikDemo";
import SignUp from "../Authentication/SignUp";
import SignUpCopy from "../Authentication/SignUpCopy";

import Layout from "../Layout";
import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";
import AxiosProducts from "../components/AxiosProducts";
import ProductDetail from "../components/ProductDetail";
import Products from "../components/Products";
import ReactForm from "../components/ReactForm";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Layout component={<Home />} />,
  },
  {
    id: 2,
    path: "/about-us",
    element: <Layout component={<AboutUs />} />,
  },
  {
    id: 3,
    path: "/signup",
    element: <SignUp />,
  },
  {
    id: 4,
    path: "/formik-demo",
    element: <FormikDemo />,
  },
  {
    id: 5,
    path: "/react-form",
    element: <ReactForm />,
  },
  {
    id: 6,
    path: "/products",
    element: <Products />,
  },
  {
    id: 7,
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    id: 8,
    path: "/axios-products",
    element: <AxiosProducts />,
  },
  {
    id: 9,
    path: "/signup-copy",
    element: <SignUpCopy />,
  },
];
