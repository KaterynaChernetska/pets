import "./Home.scss";
import Girl from "../../assets/girl-and-pet 1.png";
const Home = () => {
  return (
    <>
      <div className="container">
        <img className="girlImg" src={Girl} alt="Girl and cat" />
      </div>
    </>
  );
};
export default Home;
