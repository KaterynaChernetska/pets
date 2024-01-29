import "./Home.scss";
import Girl from "../../assets/girl-and-pet 1.png";

const Home = () => {
  return (
    <>
      <div className="container">
       <div className="containerImg">
       <img className="girlImg" src={Girl} alt="Girl and cat" />
       </div>
      </div>
    </>
  );
};
export default Home;
