import "./tabButtons.css";
import allCategories from "../fake-data/all-categories";

function TabButtons(props) {
  return (
    <ul>
      {/* Use all to get name of our buttons and add events */}
      {allCategories.map((cat, idx) => (
        //Use index for react optimization
        <li key={idx}>
          {/* Use name of button for click handling */}
          <button
            onClick={(e) => props.tabchangeclick(e, cat)}
            key={cat}
            //Apply active class for css
            className={props.activeTab === cat ? "active" : ""}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TabButtons;
