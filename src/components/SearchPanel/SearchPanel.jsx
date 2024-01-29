import { Link } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import "./SearchPanel.scss";
import Like from "../../assets/icons/like.svg";
import Dislike from "../../assets/icons/dislike.svg";
import Fav from "../../assets/icons/favorite.svg";

const SearchPanel = () => {
 
  return (
    <div className="searchContainer">
      <form className="searchForm">
        <input
          className="searchInput"
          type="text"
          placeholder="Search for breeds by name"
        />
        <button className="searchBtn" type="submit">
          <img className="searchImg" src={Search} alt="Search icon" />
        </button>
      </form>
      <ul className="iconsList">
        <li>
          <Link className="iconListItem" to="/likes">
            <img className="iconListImg" src={Like} alt="smiley face" />
          </Link>
        </li>
        <li>
          <Link className="iconListItem" to="/favorite">
            <img className="iconListImg" src={Fav} alt="heart" />
          </Link>
        </li>
        <li>
          <Link className="iconListItem" to="/dislike">
            <img className="iconListImg" src={Dislike} alt="sad face" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchPanel;
