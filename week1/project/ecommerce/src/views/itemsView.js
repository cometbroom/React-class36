import "./itemsView.css";
import TabButtons from "../components/tabButtons";
import allProducts from "../fake-data/all-products";
import Item from "../components/itemCard";
import { useState } from "react";

function Items() {
  const [currentTab, setTab] = useState("");

  //Function to get all products or filter according to state
  //It will return JSX of a bunch of <li> with ItemCard in them.
  function getTargetProducts() {
    //If no currentTab then show everything
    const products =
      currentTab === ""
        ? allProducts
        : allProducts.filter(
            (product) => currentTab.replace(/FAKE: /, "") === product.category
          );

    return products.map((product, idx) => (
      <li key={idx}>
        <Item image={product.image} title={product.title}></Item>
      </li>
    ));
  }
  //Set our JSX elements to a variable to put in final render
  const productsView = getTargetProducts();

  //Function that gets called by child tab buttons
  const tabChangeHandler = (e, key) => {
    if (key === currentTab) {
      setTab("");
    } else {
      setTab(key);
    }
  };

  return (
    <div>
      <TabButtons
        activeTab={currentTab}
        tabchangeclick={tabChangeHandler}
      ></TabButtons>
      <ul className="products">{productsView}</ul>
    </div>
  );
}

export default Items;
