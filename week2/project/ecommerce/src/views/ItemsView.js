import "./ItemsView.css";
import Item from "../components/itemCard";
import { useNavigate } from "react-router-dom";

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
      {props.products.map((product, idx) => (
        <li key={idx}>
          <Item
            image={product.image}
            title={product.title}
            clickHandler={clickHandler(product.id)}
          ></Item>
        </li>
      ))}
    </ul>
  );
}

export default Items;
