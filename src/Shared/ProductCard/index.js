import React from "react";

const ProductCard = ({ productData }) => {
  return (
    <div className="flex flex-col gap-3 p-3 border-2">
      <img src={productData.imaage} alt="" className="p-5" />
      <p>{productData.name}</p>
      <p className="">{productData.price}</p>
      <p>{productData.category}</p>
      <p>{productData.discount}</p>
    </div>
  );
};

export default ProductCard;
