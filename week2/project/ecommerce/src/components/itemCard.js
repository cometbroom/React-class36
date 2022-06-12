import "./ItemCard.css";

function ItemCard({ image, title, clickHandler }) {
  return (
    <div className="item-card" onClick={clickHandler}>
      <img src={image} alt={title}></img>
      <span>{title}</span>
    </div>
  );
}

export default ItemCard;
