import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [thumbnail, setThumbnail] = useState("");

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

  useEffect(() => {
    setThumbnail(detail?.images?.[0]);
  }, [detail]);

  console.log(detail, "detail");
  return (
    <div>
      <div className="flex gap-5">
        <span className="flex flex-col gap-4">
          <img src={thumbnail} alt="" />
          <span className="flex gap-2">
            {detail?.images?.map((i) => {
              return (
                <img
                  src={i}
                  alt=""
                  className="h-16 w-16"
                  onClick={() => setThumbnail(i)}
                />
              );
            })}
          </span>
        </span>
        <p>{detail?.title}</p>
        <Rating value={detail?.rating || 0} readOnly />
      </div>
    </div>
  );
};

export default ProductDetail;
