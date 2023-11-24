import React from "react";
import { Product } from "./Product";
import  product_data  from "../data/product_data.js";

export const ProductList = () => {
  return (
    <div className="productList">
      {product_data.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};