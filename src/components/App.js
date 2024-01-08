import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Voting from "../pages/Voting/Voting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/voting" element={<Voting />} />
      </Route>
    </Routes>
  );
}

export default App;
