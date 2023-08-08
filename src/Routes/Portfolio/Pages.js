import { Link, Navigate, useNavigate } from "react-router-dom";
import { DataStorage } from "../../Data/WholeData";
import { useViewport } from "../../Component/Viewport";
import { useState } from "react";
import Dropdown from "../../Component/Dropdown/Dropdown";

const Database = DataStorage.PortfolioMain;

export const PortfolioMPage_1 = () => {
  const className = {
    container: "w-full space-y-5 text-center px-10 py-36 text-white",
    title: "text-4xl lg:text-6xl font-bold",
    subtitle: "text-white/80",
  };

  const Data = Database.page_1;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>
      <p className={className.subtitle}>{Data.subtitle}</p>
    </div>
  );
};

export const PortfolioMPage_2 = () => {
  const [filtered, setFilter] = useState("All");
  const viewport = useViewport().windowSize;
  const [showAll, setShowAll] = useState(true);

  const DataLength = (filt) =>
    Data.gridList.map((data) => data.tag).filter((tag) => tag === filt).length;

  const OnSelected = (option) => {
    option.filter === filtered ? setFilter("All") : setFilter(option.filter);
  };

  const className = {
    container: "w-full py-10 px-8 lg:px-14 space-y-7 xl:px-28",
    filterList: "flex items-center justify-center gap-7",
    buttonFilt: "relative p-3",
    filterLength: "absolute top-0 right-0 text-xs",
    gridList: `${
      filtered !== "All" ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3 "
    } w-full h-full grid place-items-start gap-5`,
    dropdownBox: "w-full h-fit grid place-items-center",
    buttonBox: "w-full grid place-items-center",
    button:
      "px-5 py-3 rounded-md font-bold shadow-md shadow-white hover:shadow-gray-300 text-dark-brown border border-dark-creme block w-fit",

    gridBox: "w-full h-[420px] relative rounded-lg flex flex-col items-start",
    gridImg: `absolute w-full h-full object-cover`,
    gridContent: "h-full flex flex-col z-10 items-start justify-end gap-5 p-10",
    gridTag: "bg-white px-4 py-2 text-dark-brown rounded-full",
    gridTitle: "font-bold text-4xl text-white",
  };

  const Data = Database.page_2;

  var navigateTo = useNavigate();

  return (
    <div className={className.container}>
      {viewport.innerWidth < 1024 ? (
        <div className={className.dropdownBox}>
          <Dropdown options={Data.filterList} onChange={OnSelected} />
        </div>
      ) : (
        <ul className={className.filterList}>
          {Data.filterList.map((data, idx) => (
            <li key={idx}>
              <button
                className={`${
                  filtered === data.filter
                    ? "text-dark-brown"
                    : "text-dark-brown/[0.64]"
                } ${className.buttonFilt}`}
                onClick={() =>
                  filtered === data.filter
                    ? setFilter("All")
                    : setFilter(data.filter)
                }
              >
                <p className={className.filterLength}>
                  {idx === 0 ? Data.gridList.length : DataLength(data.filter)}
                </p>
                {data.title}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className={className.gridList}>
        {(filtered === "All"
          ? Data.gridList
          : Data.gridList.filter(({ tag }) => tag === filtered)
        )
          .slice(0, showAll === true ? Data.gridList.length : 6)
          .map((data, idx) => (
            <div
              key={idx}
              className={`${
                viewport.innerWidth < 1024 || filtered !== "All"
                  ? ""
                  : data.size
              } ${className.gridBox}`}
              onClick={() => navigateTo(data.link)}
            >
              <img
                src={data.img}
                alt={data.title}
                className={className.gridImg}
              />
              <div className={className.gridContent}>
                <div className={className.gridTag}>{data.tag}</div>
                <h1 className={className.gridTitle}>
                  {data.title.toUpperCase()}
                </h1>
              </div>
            </div>
          ))}
      </div>

      <div className={className.buttonBox}>
        <button onClick={() => setShowAll(!showAll)} className={className.button}>
          {showAll === true ? "Load Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};


export const PortfolioMPage_3 = () => {
  const className = {
    container: "w-full px-10 md:px-20 py-10 ",
    banner:
      "w-full bg-light-accent rounded-lg grid grid-cols-1 md:grid-cols-2 place-items-center p-10 text-white",
    title: "text-3xl lg:text-5xl font-bold",
    button:
      "block w-fit px-7 py-2 rounded-lg bg-white text-dark-brown font-semibold",
    innerBox: "space-y-5 md:px-5 order-2 md:order-1",
    img: "order-1 md:order-2",
  };

  const Data = Database.page_3;

  return (
    <div className={className.container}>
      <div className={className.banner}>
        <div className={className.innerBox}>
          <h1 className={className.title}>{Data.title}</h1>
          <p>{Data.subtitle}</p>

          <Link to={Data.button.link} className={className.button}>
            {Data.button.title}
          </Link>
        </div>

        <img src={Data.img} alt="" className={className.img} />
      </div>
    </div>
  );
};