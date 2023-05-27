import { Link } from "react-router-dom";
import { DataStorage } from "../Data/WholeData";
import { useViewport } from "./Viewport";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const viewport = useViewport().windowSize;
  const [isOpen, setOpen] = useState(false);

  if (isOpen === true && viewport.innerWidth >= 1280) {
    setOpen(false);
  }

  const Data = DataStorage.Navbar;

  const className = {
    container: "w-screen absolute inset-x-0 top-0",
    desktopView:
      "w-full px-20 py-5 flex items-center justify-between bg-dark-purple",
    mobileView:
      "w-full flex xl:hidden items-center justify-between bg-dark-purple py-5 px-10",
    logo: "w-32 xl:w-40",
    list: "flex items-center justify-center gap-20 text-white",
    buttonLink:
      "px-10 w-fit h-fit block py-4 border-2 rounded-lg text-white bg-transparent border-white/25",
    sidebarToggle:
      `text-xl p-3 rounded-md border border-white/30 text-white z-20 ${isOpen ? "fixed" : "static"} right-5`,
    sidebar: `inset-y-0 right-0 w-full fixed bg-dark-purple/60 shadow-xl z-10 p-14 backdrop-blur-sm ${
      isOpen
        ? "translate-x-0 text-opacity-100"
        : "translate-x-full text-opacity-0"
    } duration-500 ease-in-out flex flex-col items-center justify-center gap-8`,
    verticalList: "space-y-4 text-lg font-medium text-white text-center",
  };

  return (
    <div className={className.container}>
      {viewport.innerWidth < 1025 ? (
        <div className={className.mobileView}>
          <img src={Data.logo} alt="Logo" className={className.logo} />

          <button
            className={className.sidebarToggle}
            onClick={() => setOpen(!isOpen)}
          >
            {!isOpen ? <FaBars/> : <FaTimes/>}
          </button>
        </div>
      ) : (
        <div className={className.desktopView}>
          <img src={Data.logo} alt="Logo" className={className.logo} />
          <ul className={className.list}>
            {Data.menus.map((data, index) => (
              <Link key={index} to={data.link}>
                {data.title}
              </Link>
            ))}
          </ul>
          <Link to={Data.button.link} className={className.buttonLink}>
            {Data.button.title}
          </Link>
        </div>
      )}

      <aside className={className.sidebar}>
        <ul className={className.verticalList}>
          {Data.menus.map((data2, index) => (
            <li key={index}>
              <Link to={data2.link}>{data2.title}</Link>
            </li>
          ))}
        </ul>

        <Link to={Data.button.link} className={className.buttonLink}>
          {Data.button.title}
        </Link>
      </aside>
    </div>
  );
};

export default Navbar;
