import "./tabButtons.css";
import allCategories from "../fake-data/all-categories";

function TabButtons(props) {
    const tabButtons = allCategories.map((cat, key) => 
    <li><button onClick={(e) => props.tabchangeclick(e, key)} key={key}>{cat}</button></li>
    );

    return (
        <ul>
            {tabButtons}
        </ul>
    )
}

export default TabButtons;