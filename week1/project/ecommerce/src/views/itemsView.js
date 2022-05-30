import "./itemsView.css";
import TabButtons from "../components/tabButtons";
import allProducts from "../fake-data/all-products";
import Item from "../components/itemCard";
import {useState} from 'react';
import allCategories from "../fake-data/all-categories";

function Items() {
    const [currentTab, setTab] = useState(allCategories[0]);

    const products = allProducts.filter(product => currentTab.includes(product.category));
    const productsView = products.map((product, idx) => {
        return (
            <li key={idx}><Item image={product.image} title={product.title}></Item></li>
        )
    });

    const tabChangeHandler = (e, key) => {
        setTab(allCategories[key]);
    }

    return (
        <div>
        <TabButtons tabchangeclick={tabChangeHandler}></TabButtons>
        <ul className="products">
            {productsView}
        </ul>
        </div>
    )
}

export default Items;