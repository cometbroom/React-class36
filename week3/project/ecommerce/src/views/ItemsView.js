import "./ItemsView.css";
import ItemCard from "../components/ItemCard";
import { useNavigate } from "react-router-dom";
import React from "react";

function Items(props) {
  const navigate = useNavigate();

  //Function that gets called by child tab buttons
  const clickHandler = (id) => {
    return () => {
      navigate(`product/${id}`);
    };
  };

  return (
    <ul className="products">
      {props.products &&
        props.products.map((product, idx) => (
          <li key={idx}>
            <ItemCard
              image={product.image}
              title={product.title}
              id={product.id}
              clickHandler={clickHandler(product.id)}
            ></ItemCard>
          </li>
        ))}
    </ul>
  );
}

export default Items;
