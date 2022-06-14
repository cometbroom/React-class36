import { useParams } from "react-router-dom";
import FavouritesController from "../controllers/FavouritesController";
import ItemsController from "../controllers/ItemsController";
import TabsController from "../controllers/TabsController";
import { FavouritesProvider } from "../FavouritesContext";

//The page that manages all product viewer page according to params.
function ProductPage() {
  const { tab } = useParams();

  const fetchUrl = tab
    ? `https://fakestoreapi.com/products/category/${tab}`
    : "https://fakestoreapi.com/products";

  return (
    // Context to allow favourites register
    <FavouritesProvider>
      <TabsController tab={tab}></TabsController>
      {tab && tab === "Favourites" ? (
        <FavouritesController />
      ) : (
        <ItemsController fetchUrl={fetchUrl}></ItemsController>
      )}
    </FavouritesProvider>
  );
}

export default ProductPage;
