import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import dogFoodData from "../data/products/dogfood.json"; 

const DogFood = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(dogFoodData); 
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Dog Food</h2>
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

export default DogFood;
