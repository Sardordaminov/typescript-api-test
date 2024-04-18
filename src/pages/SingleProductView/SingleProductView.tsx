import React, { useEffect, useState } from "react";
import { SingleProductStyles } from "./SingleProductView.styles.js";
import { useParams } from "react-router-dom";

const SingleProductView: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
  }
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Something wrong:", error);
    }
  };
  const product = products.filter(
    (filteredProduct) => filteredProduct.id == id
  );

  return (
    <>
      <SingleProductStyles>
        {product.map((item) => (
          <div key={item.id}>
            <h1>Product</h1>
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <b>{item.price}</b>
            <p>{item.category}</p>
          </div>
        ))}
      </SingleProductStyles>
    </>
  );
};

export default SingleProductView;
