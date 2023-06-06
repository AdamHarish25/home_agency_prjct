import { Link } from "react-router-dom";
import { useViewport } from "../../../Component/Viewport";
import { DataStorage } from "../../../Data/WholeData";
import { useState } from "react";

const PubHPage6 = () => {
  const [filtered, setFilter] = useState("All");
  const viewport = useViewport().windowSize;

  const className = {
    container:
      "w-screen h-auto bg-dark-purple flex flex-col items-center text-center py-10 px-20 gap-14 font-Epilogue",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-4xl font-bold lg:w-80 text-white",
    filterList: "flex items-center justify-center gap-7",
    buttonFilt: "relative p-3",
    filterLength: "absolute top-0 right-0 text-xs",
    gridList: `${
      filtered !== "All"
        ? "grid-cols-1"
        : "grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 "
    } w-full h-full grid place-items-start gap-5`,
    button: "px-5 py-3 rounded-md font-bold text-white border border-white/30 block w-fit",
  };

  const Data = DataStorage.PublicHome.page_6;

  const DataLength = (filt) =>
    Data.gridList.map((data) => data.tag).filter((tag) => tag === filt).length;

  return (
    <div className={className.container}>
      <h4 className={className.header}>{Data.header}</h4>

      <h1 className={className.title}>{Data.title}</h1>

      <ul className={className.filterList}>
        {Data.filterList.map((data, idx) => (
          <li key={idx}>
            <button
              className={`${
                filtered === data.filter ? "text-white" : "text-white/[0.64]"
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

      <div className={className.gridList}>
        {(filtered === "All"
          ? Data.gridList
          : Data.gridList.filter(({ tag }) => tag === filtered)
        ).map((data, idx) => (
          <div
            key={idx}
            className={`${
              viewport.innerWidth < 1024 || filtered !== "All" ? "" : data.size
            } w-full h-[420px] relative rounded-lg flex flex-col items-start`}
          >
            <img
              src={data.img}
              alt={data.title}
              className={`absolute w-full h-full object-cover`}
            />
            <div className="h-full flex flex-col z-10 items-start justify-end gap-5 p-10">
              <div className="bg-white px-4 py-2 text-dark-brown rounded-full">
                {data.tag}
              </div>
              <h1 className="font-bold text-4xl text-white">
                {data.title.toUpperCase()}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full grid place-items-center">
            <Link  className={className.button}>
                {Data.button.title}
            </Link>
      </div>
    </div>
  );
};

export default PubHPage6;
