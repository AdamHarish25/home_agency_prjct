/* eslint-disable */

import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Component/Navbar";
import PublicHome from "./Routes/Home/PublicHome";
import PersonalHome from "./Routes/Home/PersonalHome";

function App() {
  return (
    <div id="App" className="w-screen h-auto relative bg-black">
      <Routes>
        <Route path="/" exact element={<PublicHome />} />
        <Route path="/Personal" element={<PersonalHome />} />
      </Routes>
    </div>
  );
}

export default App;
