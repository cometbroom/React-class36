import Items from "../views/ItemsView";
import TabButtons from "../components/TabButtons";
import useFetch from "../hooks/useFetch";
import { Loading } from "react-loading-dot/lib";
import Error from "../components/Error";

function TabsController({ tab }) {
  const [categories, loading, error] = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  return (
    <div className="product-view">
      <h1>Products</h1>
      {error && <Error error={error} />}
      {loading ? (
        <Loading background="black" />
      ) : (
        <TabButtons
          error={error}
          loading={loading}
          categories={[...categories, "Favourites"]}
          activeTab={tab}
        ></TabButtons>
      )}
    </div>
  );
}

export default TabsController;
