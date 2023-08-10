import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Shared/ProductCard";
import { Button, TextField } from "@mui/material";
import CustomButton from "../../Shared/CustomButtom";

const AxiosProducts = () => {
  const [product, setProduct] = useState("");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const productList = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/?limit=${limit}`
      );
      setProduct(response.data);
    } catch (error) {}
  };
  const searchedData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setProduct(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    productList();
  }, [limit]);
  useEffect(() => {
    search && searchedData();
  }, [search]);

  return (
    <div className="flex flex-col gap-5 p-5 bg-gray-100">
      <div className="flex items-center justify-between p-3 bg-white shadow-md">
        <p>All Products</p>{" "}
        <TextField
          size="small"
          placeholder="Search Products..."
          label="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="grid grid-cols-5 gap-5">
        {product?.products?.map((item) => {
          return <ProductCard key={item.id} productData={item} />;
        })}
      </div>

      <Button color="primary" onClick={() => setLimit(limit + 10)}>
        See More
      </Button>
    </div>
  );
};

export default AxiosProducts;
