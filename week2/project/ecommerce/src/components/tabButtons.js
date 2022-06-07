import { useNavigate } from "react-router-dom";
import "./tabButtons.css";

function TabButtons(props) {
  const navigate = useNavigate();

  return (
    <ul>
      {/* Use all to get name of our buttons and add events */}
      {props.categories.map((cat, idx) => (
        //Use index for react optimization
        <li key={idx}>
          {/* Use name of button for click handling */}
          <button
            onClick={(e) =>
              props.activeTab === cat ? navigate("/") : navigate(cat)
            }
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
