import { useNavigate } from "react-router-dom";
import "./GoBackBtn.scss";
import Arrow from "../../assets/icons/arrow left 1.svg";

const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <button className="goBackBtn" onClick={() => navigate(-1)}>
      <img className="goBackArrow" src={Arrow} alt="arrow back" />
    </button>
  );
};

export default GoBackBtn;
