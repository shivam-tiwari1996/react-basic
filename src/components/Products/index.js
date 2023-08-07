import React, { useEffect, useState } from "react";
import ProductCard from "../../Shared/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  const productList = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setData(response);
      });
  };

  useEffect(() => {
    productList();
  }, []);

  // const productsList = [
  //   {
  //     id: 1,
  //     imaage:
  //       "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg",
  //     name: "Apple iPhone 14 (128 GB) - Blue",
  //     price: "10000",
  //     category: "Mobile",
  //     discount: "12%",
  //   },
  //   {
  //     id: 2,
  //     imaage:
  //       "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg",
  //     name: "Apple iPhone 14 (128 GB) - Black",
  //     price: "20000",
  //     category: "Mobile",
  //     discount: "10%",
  //   },
  //   {
  //     id: 3,
  //     imaage:
  //       "https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY327_FMwebp_QL65_.jpg",
  //     name: "Apple iPhone 14 (128 GB) - Yellow",
  //     price: "30000",
  //     category: "Mobile",
  //     discount: "15%",
  //   },
  //   {
  //     id: 4,
  //     imaage:
  //       "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UY327_FMwebp_QL65_.jpg",
  //     name: "Apple iPhone 14 (128 GB) - White",
  //     price: "40000",
  //     category: "Mobile",
  //     discount: "20%",
  //   },
  // ];
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {data?.products?.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default Products;
