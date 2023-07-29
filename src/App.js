/* eslint-disable */

import { Route, Routes } from "react-router";
import "./App.css";
import PublicHome from "./Routes/Home/PublicHome";
import PersonalHome from "./Routes/Home/PersonalHome";
import { Webflow } from "./Routes/Webflow/Webflow";

function App() {
  return (
    <div id="App" className="w-screen h-auto relative bg-black">
      <Routes>
        <Route path="/" exact element={<PublicHome />} />
        <Route path="/Personal" element={<PersonalHome />} />
        <Route path="/Webflow" element={<Webflow/>}/>
      </Routes>
    </div>
  );
}

export default App;
