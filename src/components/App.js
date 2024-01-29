import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Voting from "../pages/Voting/Voting";
import Likes from "../pages/Likes/Likes";
import Breeds from "../pages/Breeds/Breeds";
import BreedDetails from "../pages/Breeds/BreedDetails/BreedDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="voting" element={<Voting />} />
        <Route path="breeds" element={<Breeds />} />
        <Route path="breeds/:breedId" element={<BreedDetails />} /> 

        {/* <Route path="likes" element={<Likes />} />
          <Route path="likes" element={<Likes />} /> */}
        <Route path="likes" element={<Likes />} />
      </Route>
    </Routes>
  );
}

export default App;
