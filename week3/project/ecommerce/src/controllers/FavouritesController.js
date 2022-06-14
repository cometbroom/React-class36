import { useContext, useEffect, useRef, useState } from "react";
import { Loading } from "react-loading-dot/lib";
import Error from "../components/Error";
import { FavouriteContext } from "../FavouritesContext";
import useMultiFetch from "../hooks/useMultiFetch";
import Items from "../views/ItemsView";

function FavouritesController() {
  const [context, setContext] = useContext(FavouriteContext);
  const [urls, setUrls] = useState([]);

  //Use effect to make sure map doesn't create new array and cause infinite fetching
  useEffect(() => {
    setUrls(context.map((x) => `https://fakestoreapi.com/products/${x}`));
  }, [context]);

  const [products, loading, error] = useMultiFetch(urls);

  return (
    <div className="product-view">
      {error && <Error error={error} />}
      {loading ? <Loading background="black" /> : <Items products={products} />}
    </div>
  );
}

export default FavouritesController;
