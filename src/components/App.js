import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Voting from "../pages/Voting/Voting";
import Likes from "../pages/Likes/Likes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/voting" element={<Voting />} />
        {/* <Route path="/voting" element={<Voting />} />
        <Route path="/voting" element={<Voting />} /> */}

        {/* <Route path="likes" element={<Likes />} />
          <Route path="likes" element={<Likes />} /> */}
        <Route path="/likes" element={<Likes />} />
      </Route>
    </Routes>
  );
}

export default App;
