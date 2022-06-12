import "./itemsView.css";
import TabButtons from "../components/tabButtons";
import allProducts from "../fake-data/all-products";
import Item from "../components/itemCard";
import { useState } from "react";

function Items() {
  const [currentTab, setTab] = useState("");

  //Function to get all products, if currentTab is "" or filter accordingly
  //This will return an array of strings which are later used for rendering
  const products =
    currentTab === ""
      ? allProducts
      : allProducts.filter(
          //Remove FAKE from strings to more easily filter our array
          (product) => currentTab.replace(/FAKE: /, "") === product.category
        );

  //Function that gets called by child tab buttons
  const tabChangeHandler = (e, key) => {
    setTab(key === currentTab ? "" : key);
  };

  return (
    <div>
      <TabButtons
        activeTab={currentTab}
        tabchangeclick={tabChangeHandler}
      ></TabButtons>
      <ul className="products">
        {products.map((product, idx) => (
          <li key={idx}>
            <Item image={product.image} title={product.title}></Item>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
