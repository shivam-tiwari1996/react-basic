import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const productDetails = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setDetail(res));
  };
  useEffect(() => {
    productDetails();
  }, [id]);

  console.log(detail, "detail");
  return (
    <div>
      <div className="flex gap-5">
        <img src={detail.thumbnail} alt="" /> <p>{detail.title}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
