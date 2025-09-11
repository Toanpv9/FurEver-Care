import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import catFoodData from "../data/products/catfood.json"; 

const CatFood = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(catFoodData); 
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Cat Food</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatFood;
