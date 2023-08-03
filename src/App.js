/* eslint-disable */

import { Route, Routes } from "react-router";
import "./App.css";
import PublicHome from "./Routes/Home/PublicHome";
import PersonalHome from "./Routes/Home/PersonalHome";
import { Webflow } from "./Routes/Webflow/Webflow";
import { AboutAgency } from "./Routes/About/ABTAgency";
import { AboutPersonal } from "./Routes/About/ABTPersonal";

function App() {
  return (
    <div id="App" className="w-screen bg-black relative">
      <Routes>
        <Route path="/" exact element={<PublicHome />} />
        <Route path="/Personal" element={<PersonalHome />} />
        <Route path="/Webflow" element={<Webflow/>}/>
        <Route path="/About" element={<AboutAgency />}/>
        <Route path="/About/Personal" element={<AboutPersonal />}/>
      </Routes>
    </div>
  );
}

export default App;
