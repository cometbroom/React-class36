import "./tabButtons.css";
import allCategories from "../fake-data/all-categories";

function TabButtons(props) {
  //Use allCategories to get name of our buttons and add events
  const tabButtons = allCategories.map((cat, idx) => {
    //Parent lets use know which tab is active through props
    const className = props.activeTab === cat ? "active" : "";
    return (
      //Use index for our li for react optimization
      //Use the name of button as key for handling in the parent
      //Wrap handler function to send extra variables
      <li key={idx}>
        <button
          onClick={(e) => props.tabchangeclick(e, cat)}
          key={cat}
          className={className}
        >
          {cat}
        </button>
      </li>
    );
  });

  return <ul>{tabButtons}</ul>;
}

export default TabButtons;
