import { Link } from "react-router-dom";
import "./Navigation.scss";
import Table from "../../assets/icons/vote-table.svg";
import Breeds from "../../assets/icons/pet-breeds.svg";
import Search from "../../assets/icons/images-search.svg";

const Navigation = () => {
  return (
    <nav className="mainNavigation">
      <Link className="linkContainer" to="/voting">
        <div className="img firstContainer">
          <img src={Table} alt="Tablet" />
        </div>
        <button  className="linkBtn"> VOTING</button>
      </Link>
      <Link className="linkContainer" to="/breeds">
        <div className="img secondContainer">
          <img src={Breeds} alt="Cat" />
        </div>
        <button className="linkBtn">BREEDS</button>
      </Link>
      <Link className="linkContainer" to="/gallery">
        <div className="img thirdContainer">
          <img src={Search} alt="Phone" />
        </div>
        <button className="linkBtn">GALLERY</button>
      </Link>
    </nav>
  );
};

export default Navigation;
