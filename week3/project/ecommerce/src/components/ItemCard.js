import { useContext } from "react";
import { FavouriteContext } from "../FavouritesContext";
import useToggle from "../hooks/useToggle";
import "./ItemCard.css";

function ItemCard({ image, title, clickHandler, id }) {
  const [favSvg, toggleFavSvg] = useToggle();
  const [context, setContext] = useContext(FavouriteContext);

  //Function to handle favourite button. Adds or removes depending on how it was setup
  const favouriteHandler = (add, productId) => {
    return () => {
      toggleFavSvg();
      if (add === true) setContext([...context, productId]);
      else setContext(context.filter((t) => t !== productId));
    };
  };

  //Favourites controller fetch is not aware of state here so we need to use the context aswell.
  if (context.includes(id) && favSvg === false) toggleFavSvg();

  //Import our svg objects.
  const FavouriteRegular =
    require("../assets/heart-regular.svg").ReactComponent;
  const FavouriteSolid = require("../assets/heart-solid.svg").ReactComponent;
  return (
    <div className="item-card">
      {favSvg ? (
        <FavouriteSolid onClick={favouriteHandler(false, id)} />
      ) : (
        <FavouriteRegular onClick={favouriteHandler(true, id)} />
      )}
      <img src={image} alt={title} onClick={clickHandler}></img>
      <span onClick={clickHandler}>{title}</span>
    </div>
  );
}

export default ItemCard;
