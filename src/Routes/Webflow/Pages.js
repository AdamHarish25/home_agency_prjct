import { Link } from "react-router-dom";
import { DataStorage } from "../../Data/WholeData";
import { useViewport } from "../../Component/Viewport";
import VideoPlayer from "../../Component/VideoPlayer/VideoPlayer";
import { useState } from "react";
import Dropdown from "../../Component/Dropdown/Dropdown";

const Database = DataStorage.Webflow;


export const WebFPage_1 = () => {
    const className = {
      container: "space-y-10 w-full p-10 lg:p-32",
      box: "w-full grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10",
      innerBox: "space-y-10 px-5",
      header: "text-light-accent",
      title: "text-2xl lg:text-5xl font-bold",
      subtitle: "text-white/70",
      buttonBox: "flex items-center gap-8",
      button:
        "block w-fit px-5 py-3 rounded-md bg-light-accent font-bold text-lg",
      link: "w-fit block hover:underline",
      border: "border border-dark-gray",
    };

    const Data = Database.page_1;
    return (
      <div className={className.container}>
        <div className={className.box}>
          <div className={className.innerBox}>
            <h4 className={className.header}>{Data.header}</h4>
            <h1 className={className.title}>{Data.title}</h1>
            <p className={className.subtitle}>{Data.subtitle}</p>

            <div className={className.buttonBox}>
              <Link className={className.button} to={Data.button1.link}>
                {Data.button1.title}
              </Link>

              <Link to={Data.button2.link} className={className.link}>
                {Data.button2.title}
              </Link>
            </div>
          </div>

          <img src={Data.img} alt="" />
        </div>

        <hr className={className.border}/>
      </div>
    );
}


export const WebFPage_2 = () => {
  const className = {
    container: "w-full space-y-14 p-10 lg:p-20 text-white",
    upperBox:
      "w-full grid grid-cols-1 lg:grid-cols-2 gap-14 place-items-center px-5",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-4xl font-bold",
    innerBox: "space-y-5 w-full px-5 md:px-10",
    bottomBox: "w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center",
    list: "w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-end",
    listChild: "w-full h-fit px-10 py-16 space-y-5 border",
    link: "block w-fit hover:underline",
    ListChildTitle: "text-lg font-medium",
    subtitle: "text-xs",
    button: "block w-fit py-2 px-5 rounded-lg bg-purple-500",
  };

  const Data = Database.page_2;

  return (
    <div className={className.container}>
      <div className={className.upperBox}>
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header1.toUpperCase()}</h4>
          <h1 className={className.title}>{Data.title1}</h1>
          <Link className={className.link} to={Data.button1.link}>
            {Data.button1.title}
          </Link>
        </div>

        <div className={className.list}>
          {Data.list.map((data, index) => (
            <div
              key={index}
              className={`${className.listChild} ${data.color} ${
                data.img === "" ? "" : "text-dark-brown"
              }`}
            >
              {data.img === "" ? (
                <div></div>
              ) : (
                <img src={data.img} alt={data.title} className="w-14 h-14" />
              )}
              <h1 className={className.ListChildTitle}>{data.title}</h1>
              <p className={`${className.subtitle}`}>{data.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={className.bottomBox}>
        <img src={Data.img} alt="" />

        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header2}</h4>
          <h1 className={className.title}>{Data.title2}</h1>

          <p>{Data.subheader}</p>

          <p className={`${className.subtitle} text-white/60`}>{Data.subtitle}</p>

          <Link to={Data.button2.link} className={className.button}> 
            {Data.button2.title}
          </Link>
        </div>
      </div>
    </div>
  );
};


export const WebFPage_3 = () => {
  const viewport = useViewport().windowSize;

  const className = {
    container: "w-full space-y-10 p-10 lg:p-20",
    headerBox: "space-y-5",
    header: "text-light-accent font-light",
    title: "text-white font-bold text-2xl lg:text-4xl",
    cardBox: "w-full grid grid-cols-1 lg:grid-cols-3",
    card: `w-full h-full border border-dark-creme bg-white text-dark-brown space-y-7 p-12 ${
      viewport.innerWidth < 1024
        ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
        : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
    }`,
    cardImg: "w-16 h-16",
    cardTitle: "text-xl font-bold",
    cardSubtitle: "text-xs text-gray-500",
    link: "block w-fit text-sm hover:underline",
  };

  const Data = Database.page_3;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header}</h4>

        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.cardBox}>
        {Data.card.map((data, index) => (
          <div className={className.card} key={index}>
            <img
              src={data.icon}
              alt={data.title}
              className={className.cardImg}
            />

            <h1 className={className.cardTitle}>{data.title}</h1>
            <p className={className.cardSubtitle}>{data.subtitle}</p>

            <Link to={data.button.link} className={className.link}>
              {data.button.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


export const WebFPage_4 = () => {
  const viewport = useViewport().windowSize;

  const className = {
    container: "w-full space-y-20 p-10 lg:p-20",
    gridBox: "w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10",
    title: "text-2xl lg:text-4xl font-bold",
    header: "text-light-accent font-light",
    subtitle: "text-sm text-gray-600/70",
    innerBox: "space-y-5 p-10",
    videoPlayer: "w-full h-full",
    cardBox: "w-full grid grid-cols-1 lg:grid-cols-3",
    cardValue: "font-bold text-3xl",
    card: `w-full h-full border border-dark-creme space-y-3 p-10 ${
      viewport.innerWidth < 1024
        ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
        : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
    }`,

    border: "border border-dark-creme",
    link: "w-fit block hover:underline",
    listBox: "space-y-8 list-none lg:w-fit w-full px-10 lg:px-0",
    list: "flex items-center gap-8",
    listCount: "w-10 text-5xl font-bold text-center",
    listTitle: "font-semibold",
  };

  const Data = Database.page_4

  return(
    <div className={className.container}>
      <div className={className.gridBox}>
        <VideoPlayer src={Data.video} size={className.videoPlayer}/>

        <div className={className.innerBox}>
          <h4 className={className.header}>
            {Data.header1}
          </h4>
          <h1 className={className.title}>
            {Data.title1}
          </h1>
          <p className={className.subtitle}>
            {Data.subtitle1}
          </p>
        </div>
      </div>

      <div className={className.cardBox}>
        {Data.card.map((data, index) => (
          <div className={className.card} key={index}>
            <h1 className={className.cardValue}>
              {data.value}
            </h1>
            <p>
              {data.title}
            </p>
          </div>
        ))}
      </div>

      <div className={className.gridBox}>
        <div className={className.innerBox}>
          <h4 className={className.header}>
            {Data.header2}
          </h4>
          <h1 className={className.title}>
            {Data.title2}
          </h1>
          <p className={className.subtitle}>
            {Data.subtitle2}
          </p>

          <Link to={Data.button.link} className={className.link}>
            {Data.button.title}
          </Link>
        </div>

        <ul className={className.listBox}>
          {Data.list.map((data, index) => (
            <li key={index} className={className.list}>
              <h1 className={className.listCount}>
                {index + 1}
              </h1>

              <p>
                {data.title}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <hr className={className.border}/>
    </div>
  )
}


export const WebFPage_5 = () => {
   const [filtered, setFilter] = useState("All");
   const viewport = useViewport().windowSize;

  const DataLength = (filt) =>
    Data.gridList.map((data) => data.tag).filter((tag) => tag === filt).length;

  const OnSelected = (option) => {
    option.filter === filtered ? setFilter("All") : setFilter(option.filter);
  };

  const className = {
    container: "w-full space-y-7 px-8 lg:px-14 xl:px-28 text-center py-10",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-4xl font-bold text-white",
    filterList: "flex items-center justify-center gap-7",
    buttonFilt: "relative p-3",
    filterLength: "absolute top-0 right-0 text-xs",
    gridList: `${
      filtered !== "All"
        ? "grid-cols-1"
        : "grid-cols-1 lg:grid-cols-3 "
    } w-full h-full grid place-items-start gap-5`,
    dropdownBox: "w-full h-fit grid place-items-center",
    buttonBox: "w-full grid place-items-center",
    button:
      "px-5 py-3 rounded-md font-bold text-white border border-white/30 block w-fit",

    gridBox: "w-full h-[420px] relative rounded-lg flex flex-col items-start",
    gridImg: `absolute w-full h-full object-cover`,
    gridContent: "h-full flex flex-col z-10 items-start justify-end gap-5 p-10",
    gridTag: "bg-white px-4 py-2 text-dark-brown rounded-full",
    gridTitle: "font-bold text-4xl text-white",
  };

  const Data = Database.page_5;

  return (
    <div className={className.container}>
      <h4 className={className.header}>{Data.header.toUpperCase()}</h4>

      <h1 className={className.title}>{Data.title}</h1>

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
      )}

      <div className={className.gridList}>
        {(filtered === "All"
          ? Data.gridList
          : Data.gridList.filter(({ tag }) => tag === filtered)
        ).map((data, idx) => (
            <div
              key={idx}
              className={`${
                viewport.innerWidth < 1024 || filtered !== "All"
                  ? ""
                  : data.size
              } ${className.gridBox}`}
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
        <Link to={Data.button.link} className={className.button}>
          {Data.button.title}
        </Link>
      </div>
    </div>
  );
}