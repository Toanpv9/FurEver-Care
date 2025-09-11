import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  // Lấy ảnh ưu tiên từ quantities, nếu không thì dùng ảnh ngoài cùng
  const productImage =
    product.quantities?.[0]?.images?.[0] || product.images?.[0] || "/images/no-image.jpg";

  // Nếu có nhiều giá → lấy giá nhỏ nhất để hiển thị
  const minPrice = product.quantities
    ? Math.min(...product.quantities.map((q) => q.price_tax_include))
    : product.price_tax_include;

  return (
    <div className="card h-100 shadow-sm">
      {/* Link sang trang chi tiết sản phẩm */}
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <img
          src={productImage}
          alt={product.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description.substring(0, 100)}...</p>
          {/* Chỉ hiển thị giá tiền, không in size */}
          <p className="text-primary fw-bold">{minPrice} $</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
