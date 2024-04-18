import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <h2>{product.title}</h2>
      <p>{product.description.slice(0, 100)}</p>
      <p>${product.price}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductCard;
