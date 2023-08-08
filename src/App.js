/* eslint-disable */

import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import PublicHome from "./Routes/Home/PublicHome";
import PersonalHome from "./Routes/Home/PersonalHome";
import Webflow from "./Routes/Webflow/Webflow";
import AboutAgency from "./Routes/About/ABTAgency";
import AboutPersonal from "./Routes/About/ABTPersonal";
import Service from "./Routes/Services/Services";
import PortfolioMain from "./Routes/Portfolio/PortfolioMain";
import PortfolioProject from "./Routes/Portfolio/Projects/PortfolioProject";
import { DataStorage } from "./Data/WholeData";
import Blog from "./Routes/Blog/Blog";
import BlogProject from "./Routes/Blog/BlogProject/BlogProject";
import ContactPages from "./Routes/Contact/Contact";


const Data = DataStorage.PortfolioProject;

const DataArrayPortfolio = [
  {
    data: Data.post_1,
  },
  {
    data: Data.post_2,
  },
  {
    data: Data.post_3,
  },
  {
    data: Data.post_4,
  },
  {
    data: Data.post_5,
  },
  {
    data: Data.post_6,
  },
  {
    data: Data.post_7,
  },
  {
    data: Data.post_8,
  },
  {
    data: Data.post_9,
  },
  {
    data: Data.post_10,
  },
  {
    data: Data.post_11,
  },
  {
    data: Data.post_12,
  },
];

const Data2 = DataStorage.BlogArticlePage;

const DataArrayBlog = [
  {
    data: Data.post_1,
  },
  {
    data: Data.post_2,
  },
  {
    data: Data.post_3,
  },
  {
    data: Data.post_4,
  },
  {
    data: Data.post_5,
  },
  {
    data: Data.post_6,
  },
  {
    data: Data.post_7,
  },
  {
    data: Data.post_8,
  },
  {
    data: Data.post_9,
  },
];

function App() {

  

  return (
    <div id="App" className="w-screen bg-black relative">
      <Routes>
        <Route path="/" exact element={<PublicHome />} />
        <Route path="/Personal" element={<PersonalHome />} />
        <Route path="/Webflow" element={<Webflow />} />
        <Route path="/About" element={<AboutAgency />} />
        <Route path="/About/Personal" element={<AboutPersonal />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Work" element={<PortfolioMain />} />
        <Route path="/Portfolio" element={<Navigate to="/Work" replace />} />
        {DataArrayPortfolio.map((item, index) => (
          <Route
            path={`/Work/Post_${index}`}
            element={<PortfolioProject Data={item.data} />}
          />
        ))}

        <Route path="/Blog" element={<Blog />} />
        {DataArrayBlog.map((item, index) => (
          <Route path={`/Blog/Post_${index + 1}`} element={<BlogProject Data={item.data} />} />
        ))}

        <Route path="/Contact" element={<ContactPages />}/>
      </Routes>
    </div>
  );
}

export default App;
