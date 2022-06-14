import Items from "../views/ItemsView";
import useFetch from "../hooks/useFetch";
import { Loading } from "react-loading-dot/lib";
import Error from "../components/Error";

function ItemsController({ fetchUrl }) {
  const [products, loading, error] = useFetch(fetchUrl);
  return (
    <div className="product-view">
      {error && <Error error={error} />}
      {loading ? (
        <Loading background="black" />
      ) : (
        <Items products={products}></Items>
      )}
    </div>
  );
}

export default ItemsController;
