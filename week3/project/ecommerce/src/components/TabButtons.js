import { useNavigate } from "react-router-dom";
import "./TabButtons.css";

function TabButtons({ categories, activeTab }) {
  const navigate = useNavigate();

  return (
    <ul>
      {categories.map((cat, idx) => (
        //Use index for react optimization
        <li key={idx}>
          <button
            onClick={(e) => navigate(activeTab === cat ? "/" : cat)}
            key={cat}
            //Apply active class for css
            className={activeTab === cat ? "active" : ""}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TabButtons;
