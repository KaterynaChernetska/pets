import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import Table from "../../assets/icons/vote-table.svg";
import Breeds from "../../assets/icons/pet-breeds.svg";
import Search from "../../assets/icons/images-search.svg";

const Navigation = () => {
  return (
    <nav className="mainNavigation">
      <NavLink className="linkContainer" to="/voting">
        <div className="img firstContainer">
          <img src={Table} alt="Tablet" />
        </div>
        <div className="linkBtn"> VOTING</div>
      </NavLink>
      <NavLink className="linkContainer" to="/breads">
        <div className="img secondContainer">
          <img src={Breeds} alt="Cat" />
        </div>
        <div className="linkBtn">BREEDS</div>
      </NavLink>
      <NavLink className="linkContainer" to="/gallery">
        <div className="img thirdContainer">
          <img src={Search} alt="Phone" />
        </div>
        <div className="linkBtn">GALLERY</div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
