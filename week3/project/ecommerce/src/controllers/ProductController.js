import { Loading } from "react-loading-dot/lib";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import ItemCard from "../components/ItemCard";
import useFetch from "../hooks/useFetch";
import "./ProductController.css";

function ProductController() {
  const { id } = useParams();
  const [data, loading, error] = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  return (
    <div>
      {error && <Error error={"Product not found."}></Error>}
      {loading ? (
        <Loading background="black"></Loading>
      ) : (
        <div className="product-detail">
          <ItemCard image={data.image} title={data.title}></ItemCard>
          <div className="generic-details">
            <span>{data.category}</span>
            <span>{data.rating.rate}</span>
            <span>{data.price}$</span>
          </div>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProductController;
