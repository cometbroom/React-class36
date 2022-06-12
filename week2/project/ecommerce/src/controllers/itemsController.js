import Items from "../views/ItemsView";
import TabButtons from "../components/TabButtons";
import useFetch from "../hooks/useFetch";
import { Loading } from "react-loading-dot";
import Error from "../components/Error";
import { useParams } from "react-router-dom";

function ItemsController() {
  //Function to get all products, if currentTab is "" or filter accordingly
  //This will return an array of strings which are later used for rendering
  const { tab } = useParams();

  const [categories, loadCat, errCat] = useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  const fetchUrl = tab
    ? `https://fakestoreapi.com/products/category/${tab}`
    : "https://fakestoreapi.com/products";
  const [products, loadProd, errProd] = useFetch(fetchUrl);

  return (
    <div className="product-view">
      <h1>Products</h1>
      {errCat && <Error error={errCat}></Error>}
      {loadCat ? (
        <Loading background="black"></Loading>
      ) : (
        <TabButtons categories={categories} activeTab={tab}></TabButtons>
      )}
      {errProd && <Error error={errProd}></Error>}
      {loadProd ? (
        <Loading background="black"></Loading>
      ) : (
        <Items products={products}></Items>
      )}
    </div>
  );
}

export default ItemsController;
