import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";
import Paw from "../../assets/icons/paw.svg";
import Logo from "../../assets/icons/PetsPaw.svg";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div className="mainContainer">
      <div className="permanent">
        <header>
          <Link className="logoContainer" to="/">
            <img src={Paw} alt="Cat Paw" />
            <img src={Logo} alt="Logo" />
          </Link>
        </header>

        <h1 className="greetings">HI! 👋</h1>
        <p className="welcomeText">Welcome to MacPaw Bootcamp 2023</p>
        <h2 className="startUsingApp">Let's start using The Cat API</h2>

        <Navigation />
      </div>
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
