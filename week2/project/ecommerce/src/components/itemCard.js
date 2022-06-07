import "./itemCard.css";

function Item(props) {
  return (
    <div className="item-card" onClick={props.clickHandler}>
      <img src={props.image} alt={props.title}></img>
      <span>{props.title}</span>
    </div>
  );
}

export default Item;
