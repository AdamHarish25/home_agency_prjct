/* eslint-disable */

import { useViewport } from "../../../Component/Viewport";
import { DataStorage } from "../../../Data/WholeData";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import VideoPlayer from "../../../Component/VideoPlayer/VideoPlayer";
import Dropdown from "../../../Component/Dropdown/Dropdown";
import { FaClock, FaMinus, FaPlus } from "react-icons/fa";
import Carousel from "../../../Component/Carousel/Carousel";
import RatingStar from "../../../Component/Rating/RatingStar";
import FaqAccordion from "../../../Component/FAQ/FaqAccordion";
import Map from "../../../Component/Map/Map";

// To search things press "Ctrl" + "F" simultaneously

const Database = DataStorage.PublicHome;

export const PubHPage1 = () => {
  const className = {
    container:
      "w-full h-auto py-32 px-10 xl:px-20 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 font-Epilogue",
    img: "order-1 lg:order-2",
    paragraphBox:
      "h-full flex flex-col justify-center items-center gap-16 w-full relative px-0 xl:px-20 order-2 lg:order-1",
    innerPBox: "space-y-8 text-white",
    header: "text-light-accent",
    title:
      "font-bold text-5xl lg:text-[58px] leading-tight bg-6-sides-star bg-no-repeat bg-contain bg-left-top",
    subtitle: "text-gray-400",
    buttonBox: "flex items-center gap-3",
    button1: "px-5 py-2 rounded-lg bg-light-accent text-white font-medium",
    button2: "px-5",
    feedbackBox: "flex items-center justify-start w-full gap-5",
    fbImg: "w-10",
    feedback: "space-y-2",
    fbCompany: "text-white",
  };

  const Data = Database.page_1;

  return (
    <div className={className.container}>
      <div className={className.paragraphBox}>
        <div className={className.innerPBox}>
          <h3 className={className.header}>{Data.header.toUpperCase()}</h3>
          <h1 className={className.title}>{Data.title}</h1>
          <p className={className.subtitle}>{Data.subtitle}</p>
          <div className={className.buttonBox}>
            <button className={className.button1}>{Data.button1}</button>
            <button className={className.button2}>{Data.button2}</button>
          </div>
        </div>

        <div className={className.feedbackBox}>
          <img
            className={className.fbImg}
            src={Data.companyPic}
            alt="company logo"
          />

          <div className={className.feedback}>
            <p className={className.subtitle}>{Data.companyFeedback}</p>

            <p className={className.fbCompany}>{Data.companyName}</p>
          </div>
        </div>
      </div>

      <img src={Data.img} alt="img" className={className.img} />
    </div>
  );
};

export const PubHPage2 = () => {
  const className = {
    container: "w-screen h-auto p-10 grid place-items-center bg-light-creme",
    listBox: "flex items-center py-10 w-fit justify-center gap-20 list-none",
    verticalListBox: "flex flex-col items-center",
  };

  const Data = Database.page_2;
  const Viewport = useViewport().windowSize;

  return (
    <div className={className.container}>
      {Viewport.innerWidth < 1025 ? (
        <div className={className.verticalListBox}>
          <ul className={className.listBox}>
            {Data.slice(0, 2).map((data, index) => (
              <li key={index}>
                <img src={data.img} alt={data.title} />
              </li>
            ))}
          </ul>
          <ul className={className.listBox}>
            {Data.slice(2, 4).map((data, index) => (
              <li key={index}>
                <img src={data.img} alt={data.title} />
              </li>
            ))}
          </ul>
          <ul className={className.listBox}>
            {Data.slice(4, 5).map((data, index) => (
              <li key={index}>
                <img src={data.img} alt={data.title} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className={className.listBox}>
          {Data.map((data, index) => (
            <li key={index}>
              <img src={data.img} alt={data.title} />
            </li>
          ))}
        </ul>
      )}

      <div className="w-full px-20">
        <hr className="border-dark-creme" />
      </div>
    </div>
  );
};

export const PubHPage3 = () => {
  var viewport = useViewport().windowSize;

  const className = {
    container:
      "w-screen bg-light-creme h-auto px-10 py-20 space-y-20 font-Epilogue",
    box1: "w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center text-dark-brown",
    innerBox: "space-y-7 lg:px-10",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-5xl font-bold",
    sub: "text-lg",
    paragraph: "text-dark-brown/60",
    button:
      "px-5 py-2 text-dark-brown rounded-lg bg-white block w-fit text-xs font-semibold shadow-sm hover:shadow-md transition-shadow duration-200",
    list1Box: "w-full px-10 grid grid-cols-1 lg:grid-cols-3 list-none",
    list1: `w-full h-full border border-dark-creme space-y-3 p-10 ${
      viewport.innerWidth < 1024
        ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
        : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
    }`,
    list1Count: "font-bold text-3xl",
    list2Box: "space-y-8 list-none lg:w-fit w-full px-10 lg:px-0",
    list2: "flex items-center gap-8",
    list2Count: "w-10 text-5xl font-bold text-center",
    list2Title: "font-semibold",
  };

  var Data = Database.page_3;

  return (
    <div className={className.container}>
      <div className={className.box1}>
        <img src={Data.img} alt={Data.header1} />
        <div className={className.innerBox}>
          <h3 className={className.header}>{Data.header1.toUpperCase()}</h3>
          <h1 className={className.title}>{Data.title1}</h1>
          <h4 className={className.sub}>{Data.sub}</h4>
          <p className={className.paragraph}>{Data.paragraph1}</p>

          <Link to={Data.button1.link} className={className.button}>
            {Data.button1.title}
          </Link>
        </div>
      </div>

      <ul className={className.list1Box}>
        {Data.list1.map((data1, index) => (
          <li key={index} className={className.list1}>
            <h1 className={className.list1Count}>{data1.count}</h1>
            <p>{data1.title}</p>
          </li>
        ))}
      </ul>

      <div className={className.box1}>
        <div className={className.innerBox}>
          <h3 className={className.header}>{Data.header2.toUpperCase()}</h3>
          <h1 className={className.title}>{Data.title2}</h1>
          <p className={className.paragraph}>{Data.paragraph2}</p>
          <Link to={Data.button2.link} className="block w-fit">
            {Data.button2.title}
          </Link>
        </div>

        <ul className={className.list2Box}>
          {Data.list2.map((data2, index) => (
            <li key={index} className={className.list2}>
              <div className={className.list2Count}>
                <p>{index + 1}</p>
              </div>

              <h1 className={className.list2Title}>{data2.title}</h1>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full px-20">
        <hr className="border-dark-creme" />
      </div>
    </div>
  );
};

export const PubHPage4 = () => {
  const className = {
    container:
      "w-screen bg-light-creme h-auto px-10 py-20 space-y-20 font-Epilogue",
    box: "w-full grid grid-cols-1 lg:grid-cols-2 gap-14 place-items-center text-dark-brown px-5",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-4xl font-bold",
    paragraph: "text-dark-brown/60",
    videoPlayer: "w-full h-full",
    innerBox: "space-y-5 w-full",
    listVertical: "space-y-4 list-none ",
    listVerticalChild: "flex items-center gap-5 font-light text-dark-brown",
    listHorizontal:
      "w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-end",
    listHorizontalChild: "w-full h-fit px-10 py-16 space-y-5 border",
    link: "block w-fit",
    LHCTitle: "text-lg font-medium",
  };

  var Data = Database.page_4;

  return (
    <div className={className.container}>
      <div className={className.box}>
        <VideoPlayer src={Data.video} size={className.videoPlayer} />
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header1.toUpperCase()}</h4>
          <h1 className={className.title}>{Data.title1}</h1>
          <p className={className.paragraph}>{Data.subtitle1}</p>
        </div>
      </div>

      <div className={className.box}>
        <div className={`${className.innerBox} order-2 lg:order-1`}>
          <h4 className={className.header}>{Data.header2.toUpperCase()}</h4>
          <h1 className={className.title}>{Data.title2}</h1>
          <p className={className.paragraph}>{Data.subtitle2}</p>
          <ul className={className.listVertical}>
            {Data.list1.map((data, index) => (
              <li key={index} className={className.listVerticalChild}>
                <img src={data.dot} alt={data.title} />
                <p>{data.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <img src={Data.img} alt="vector#4" className="order-1 lg:order-2" />
      </div>

      <div className={className.box}>
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header3.toUpperCase()}</h4>
          <p className={`${className.paragraph} lg:pr-60`}>{Data.subtitle3}</p>
          <Link className={className.link} to={Data.button.link}>
            {Data.button.title}
          </Link>
        </div>

        <div className={className.listHorizontal}>
          {Data.list2.map((data, index) => (
            <div
              key={index}
              className={`${className.listHorizontalChild} ${data.color}`}
            >
              {data.img === "" ? (
                <div></div>
              ) : (
                <img src={data.img} alt={data.title} className="w-14 h-14" />
              )}
              <h1 className={className.LHCTitle}>{data.title}</h1>
              <p className={`${className.paragraph} text-xs`}>
                {data.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PubHPage5 = () => {
  var viewport = useViewport().windowSize;

  const className = {
    container: "w-screen bg-light-creme p-10 space-y-20 font-Epilogue",
    box1: "w-full grid grid-cols-1 lg:grid-cols-2 gap-16 place-items-center text-dark-brown px-5",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-4xl font-bold lg:w-80",
    paragraph: "text-dark-brown/60",
    innerBox: "space-y-8 lg:px-10",
    link: "block w-fit",
    button:
      "px-5 py-2 text-dark-brown rounded-lg bg-white block w-fit text-xs font-semibold shadow-sm hover:shadow-md transition-shadow duration-200",
    outerListBox: "space-y-8 w-full lg:px-10",
    listBox: "w-full h-auto grid grid-cols-1 lg:grid-cols-3 place-items-center",
    list: `w-full h-full border border-dark-creme bg-transparent space-y-7 p-12 ${
      viewport.innerWidth < 1024
        ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
        : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
    }`,
    listTitle: "text-xl font-bold",
    listImg: "w-16 h-16",
    customerSect: "flex gap-4",
    customerImg: "w-12 h-12",
    customerProf: "space-y-2",
    customerQuote: "text-xs text-gray-500",
    customerName: "text-sm",
  };

  var Data = Database.page_5;

  return (
    <div className={className.container}>
      <div className={className.box1}>
        <img src={Data.img} alt={Data.title1} />

        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header.toUpperCase()}</h4>
          <h1 className={className.title}>{Data.title1}</h1>
          <p className={className.paragraph}>{Data.subtitle}</p>

          <div className={className.customerSect}>
            <img
              src={Data.customer.img}
              alt={Data.customer.name}
              className={className.customerImg}
            />
            <div className={className.customerProf}>
              <p className={className.customerQuote}>{Data.customer.quote}</p>
              <h3 className={className.customerName}>{Data.customer.name}</h3>
            </div>
          </div>

          <Link className={className.button} to={Data.button.link}>
            {Data.button.title}
          </Link>
        </div>
      </div>

      <div className={className.outerListBox}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>
        <h1 className={className.title}>{Data.title2}</h1>

        <div className={className.listBox}>
          {Data.list.map((data, index) => (
            <div key={index} className={className.list}>
              <img
                src={data.img}
                alt={data.title}
                className={className.listImg}
              />

              <h1 className={className.listTitle}>{data.title}</h1>
              <p className={className.customerQuote}>{data.subtitle}</p>

              <Link to={data.buttonLink} className={className.link}>
                {data.buttonTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PubHPage6 = () => {
  const [filtered, setFilter] = useState("All");
  const viewport = useViewport().windowSize;

  const className = {
    container:
      "w-screen h-auto flex flex-col items-center py-10 px-8 lg:px-14 xl:px-28 gap-20 font-Epilogue",

    header: "text-light-accent font-light",
    title: "text-3xl md:text-4xl font-bold text-white",
    filterList: "flex items-center justify-center gap-7",
    buttonFilt: "relative p-3",
    filterLength: "absolute top-0 right-0 text-xs",
    gridList: `${
      filtered !== "All"
        ? "grid-cols-1"
        : "grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 "
    } w-full h-full grid place-items-start gap-5`,

    buttonBox: "w-full grid place-items-center",
    button:
      "px-5 py-3 rounded-md font-bold text-white border border-white/30 block w-fit",

    gridBox: "w-full h-[420px] relative rounded-lg flex flex-col items-start",
    gridImg: `absolute w-full h-full object-cover`,
    gridContent: "h-full flex flex-col z-10 items-start justify-end gap-5 p-10",
    gridTag: "bg-white px-4 py-2 text-dark-brown rounded-full",
    gridTitle: "font-bold text-4xl text-white",
    showcase: "space-y-7 w-full text-center",

    banner:
      "w-full rounded-lg bg-light-creme grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10 pt-20 px-8 lg:py-14 lg:px-8 overflow-visible relative",
    bannerImg1: "absolute object-contain w-28 -top-16 left-7 lg:left-20",
    bannerImg2: "w-full",
    bannerImg3: "lg:absolute w-72 lg:w-64 object-contain bottom-0 right-10",
    bannerContent:
      "w-full h-full lg:px-6 xl:px-16 flex flex-col gap-4 text-start items-start justify-center text-dark-brown",
    bannerTitle: "text-xl font-bold",
    bannerLink:
      "bg-light-accent text-white font-bold px-5 py-3 block w-fit rounded-lg",
  };

  const Data = Database.page_6;

  const DataLength = (filt) =>
    Data.gridList.map((data) => data.tag).filter((tag) => tag === filt).length;

  const OnSelected = (option) => {
    option.filter === filtered ? setFilter("All") : setFilter(option.filter);
  };

  return (
    <div className={className.container}>
      <div className={className.showcase}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>

        <h1 className={className.title}>{Data.title}</h1>

        {viewport.innerWidth < 1024 ? (
          <div className="w-full h-fit grid place-items-center">
            <Dropdown options={Data.filterList} onChange={OnSelected} />
          </div>
        ) : (
          <ul className={className.filterList}>
            {Data.filterList.map((data, idx) => (
              <li key={idx}>
                <button
                  className={`${
                    filtered === data.filter
                      ? "text-white"
                      : "text-white/[0.64]"
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
            .slice(0, viewport.innerWidth < 1024 ? 3 : 4)
            .map((data, idx) => (
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
          <Link className={className.button}>{Data.button.title}</Link>
        </div>
      </div>

      <div className={className.banner}>
        <img src={Data.banner.img1} className={className.bannerImg1} alt="" />
        <div className={className.bannerContent}>
          <h4 className={className.header}>
            {Data.banner.header.toUpperCase()}
          </h4>
          <h1 className={className.bannerTitle}>{Data.banner.title}</h1>
          <Link className={className.bannerLink}>{Data.banner.button}</Link>
        </div>
        <img
          src={Data.banner.img2}
          alt={Data.banner.header}
          className={className.bannerImg2}
        />
        <img
          src={Data.banner.img3}
          alt={Data.banner.header}
          className={className.bannerImg3}
        />
      </div>
    </div>
  );
};

export const PubHPage7 = () => {
  const className = {
    container: "space-y-10 w-screen p-10",
    header: "text-light-accent font-light",
    headerBox: "text-center space-y-5",
    title: "text-3xl md:text-5xl font-bold text-white xl:px-[450px]",
    gridBox: "w-full grid grid-cols-1 lg:grid-cols-3 gap-5",
    card: "p-10 border border-dark-gray rounded-md text-white space-y-10 h-full",
    buttonBox: "w-full grid place-items-center",
    button:
      "px-5 py-3 rounded-md font-bold text-white border border-white/30 block w-fit",
    headerCard: "flex items-center justify-start gap-3",
    date: "text-7xl font-bold",
    monYear: "text-xl font-semibold",
    timeDuration: "flex items-center gap-2",
    icon: "text-light-accent",
    border: "border-dark-gray",
    titleCard: "space-y-4 pr-10 xl:pr-20",
    titleIn: "text-xl font-semibold",
    buttonIn: "block w-fit",
  };

  const Data = Database.page_7;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>

        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.gridBox}>
        {Data.list.map((data, index) => (
          <div key={index} className={className.card}>
            <p className={className.headerCard}>
              <h1 className={className.date}>{data.date}</h1>
              <h2 className={className.monYear}>
                <p>{data.month}</p>
                <p>{data.year}</p>
              </h2>
            </p>

            <h5 className={className.timeDuration}>
              <FaClock className={className.icon} /> {data.timeDuration}
            </h5>

            <hr className={className.border} />

            <div className={className.titleCard}>
              <h1 className={className.titleIn}>{data.title}</h1>
              <p>{data.subtitle}</p>
            </div>

            <Link className={className.buttonIn} to={data.button.link}>
              {data.button.title}
            </Link>
          </div>
        ))}
      </div>

      <div className={className.buttonBox}>
        <Link className={className.button}>{Data.button.title}</Link>
      </div>
    </div>
  );
};

export const PubHPage8 = () => {
  const className = {
    container:
      "w-screen h-auto py-0 px-5 lg:p-10 space-y-7 relative font-Epilogue text-white",
    headerBox: "pr-10 static pl-10 lg:pl-0 lg:absolute top-2 left-20 space-y-4",
    header: "text-light-accent",
    title: "text-4xl font-bold",
    carouselBox: "px-5 lg:px-10 py-10",
    cardBox: "grid place-items-center h-full",
    card: "flex flex-col gap-5 justify-center w-fit h-full",
    imgCard:
      "w-full border border-gray-400 rounded-lg flex items-end justify-center px-10 pt-5",
    contentsCard: "space-y-3",
    nameCard: "text-xl font-bold",
    roleCard: "text-gray-400",
  };

  var Data = Database.page_8;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.carouselBox}>
        <Carousel show={3}>
          {Data.carousel.map((data, index) => (
            <div className={className.cardBox}>
              <div className={className.card} key={index}>
                <div className={className.imgCard}>
                  <img
                    draggable={false}
                    src={data.img}
                    alt={data.name}
                    className="object-contain"
                  />
                </div>
                <div className={className.contentsCard}>
                  <h3 className={className.nameCard}>{data.name}</h3>
                  <h4 className={className.roleCard}>{data.role}</h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export const PubHPage9 = () => {
  const className = {
    container:
      "w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 text-white py-10 px-10",
    contentBox:
      "relative flex flex-col justify-center items-start gap-5 h-full",
    background: "absolute right-10 top-5 opacity-50",
    header: "text-light-accent z-20",
    title: "text-3xl lg:text-4xl font-bold z-20 pr-10",
    infoBox: "space-y-2 z-20",
    infoRole: "text-xs text-gray-500",
  };

  const Data = Database.page_9;

  return (
    <div className={className.container}>
      <img src={Data.img} alt={`${Data.name}'s Pic`} />

      <div className={className.contentBox}>
        <img
          src={Data.background}
          alt="background"
          className={className.background}
        />
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>

        <h1 className={className.title}>{Data.title}</h1>

        <div className={className.infoBox}>
          <h5>{Data.name}</h5>

          <p className={className.infoRole}>{Data.role}</p>
        </div>
      </div>
    </div>
  );
};

export const PubHPage10 = () => {
  const className = {
    container:
      "w-full bg-light-creme flex flex-col items-center gap-10 pt-20 pb-10 px-10 lg:px-32",
    header: "text-light-accent",
    title: "text-4xl font-bold text-dark-brown w-auto lg:w-96",
    headerBox: "text-center space-y-4",
    gridBox: "w-full grid grid-cols-1 lg:grid-cols-2",
    card: `w-full bg-transparent border py-10 px-14 border-dark-creme flex flex-col justify-center gap-8 hover:bg-white hover:shadow-lg`,
    cardComment: "text-gray-500",
    innerCard: "w-fit flex items-center gap-5",
    cardImg: "w-20 h-20 rounded-full",
    cardName: "text-xl md:text-2xl font-bold",
    cardCompany: "text-dark-brown",
    button: "bg-white rounded-lg block w-fit px-10 py-3 font-bold shadow-md",
  };

  const Data = Database.page_10;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>

        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.gridBox}>
        {Data.card.map((data, index) => (
          <div key={index} className={className.card}>
            <RatingStar rating={data.rating} />

            <p className={className.cardComment}>{data.comment}</p>

            <div className={className.innerCard}>
              <img
                className={className.cardImg}
                src={data.img}
                alt={`${data.name}'s Pic`}
              />
              <div>
                <h2 className={className.cardName}>{data.name}</h2>

                <p className={className.cardCompany}>{data.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to={Data.button.link} className={className.button}>
        {Data.button.title}
      </Link>
    </div>
  );
};

export const PubHPage11 = () => {
  const className = {
    container: "w-full flex flex-col gap-8 bg-light-creme px-10 md:px-20 py-20",
    headerBox: "w-full flex flex-col items-start gap-2 ",
    header: "text-light-accent",
    title: "text-3xl lg:text-5xl font-bold",
    gridBox: "grid grid-cols-1 lg:grid-cols-3 place-items-end",
    card: "p-10 space-y-8 border border-dark-creme w-full",
    cardHighlight:
      "bg-light-accent rounded-full px-[10px] w-fit py-[5px] text-white",
    cardHeader: "space-y-5",
    cardPrice: "text-2xl font-bold",
    cardSubheader: "text-gray-500",
    cardListBox: "space-y-3 list-none",
    cardList: "flex items-center gap-2",
    cardListIcon:
      "p-1 grid place-items-center text-white font-bold rounded-full",
    cardButton: "w-fit block px-10 py-3 font-bold rounded-lg shadow-md",
  };

  const Data = Database.page_11;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.gridBox}>
        {Data.card.map((data, index) => (
          <div
            key={index}
            className={`${className.card} ${
              data.highlight !== "" ? "bg-white shadow-lg" : "bg-transparent"
            }`}
          >
            {data.highlight !== "" ? (
              <div className={className.cardHighlight}>{data.highlight}</div>
            ) : (
              <div />
            )}

            <div className={className.cardHeader}>
              <h4 className={className.header}>{data.header.toUpperCase()}</h4>
              <h2 className={className.cardPrice}>{data.price}</h2>
              <p className={className.cardSubheader}>{data.subheader}</p>
            </div>

            <ul className={className.cardListBox}>
              {data.benefits.map((data2, idx) => (
                <li
                  className={`${className.cardList} ${
                    data2.available === 1
                      ? "text-dark-brown"
                      : "text-dark-brown/50"
                  }`}
                >
                  <div
                    className={`${className.cardListIcon} ${
                      data2.available === 1
                        ? "bg-light-accent"
                        : "bg-light-accent/50"
                    }`}
                  >
                    {data2.available === 1 ? <FaPlus /> : <FaMinus />}
                  </div>
                  <p>{data2.title}</p>
                </li>
              ))}
            </ul>

            <Link
              to={data.button.link}
              className={`${className.cardButton} ${
                data.highlight !== ""
                  ? "text-white bg-light-accent"
                  : "text-dark-brown bg-white"
              }`}
            >
              {data.button.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PubHPage12 = () => {
  const className = {
    container:
      "w-full p-10 space-y-5 grid grid-cols-1 lg:grid-cols-2 gap-5 bg-light-creme",
    headerBox: "space-y-8",
    header: "text-light-accent",
    title: "text-2xl md:text-4xl font-bold",
    subtitle: "text-gray-500",
    link: "block w-fit",
  };

  const Data = Database.page_12;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>
        <h1 className={className.title}>{Data.title}</h1>

        <p className={className.subtitle}>{Data.subtitle}</p>

        <Link to={Data.button.link} className={className.link}>
          {Data.button.title}
        </Link>
      </div>

      <FaqAccordion faqs={Data.faqs} />
    </div>
  );
};

export const PubHPage13 = () => {
  const className = {
    container: "w-full space-y-14 py-10 px-10 md:px-16",
    title: "text-2xl md:text-4xl font-bold text-center",
    lists: "space-y-7 list-none w-full",
    topBorder: "w-full mb-5 border-dark-creme",
    bottomBorder: "w-full mt-5 border-dark-creme",
    list: "w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:justify-between",
    listLeft: "flex flex-col lg:flex-row items-center gap-3 lg:w-60 text-lg",
    listRight:
      "flex flex-col lg:flex-row items-center justify-end gap-3 lg:w-60",
    img1: "w-28 h-auto rounded-xl",
    img2: "w-14 h-auto order-1 lg:order-2",
    awardName: "font-medium order-2 lg:order-1",
    buttonBox: "w-full justify-center flex items-center gap-3",
    sidetitle: "text-gray-500/80",
    button: "block w-fit hover:underline",
  };

  const Data = Database.page_13;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>

      <ul className={className.lists}>
        {Data.list.map((data, index) => (
          <li key={index}>
            {index === 0 ? (
              <hr className={className.topBorder} />
            ) : (
              <div />
            )}
            <div className={className.list}>
              <div className={className.listLeft}>
                <img src={data.img} alt="" className={className.img1} />
                <p>{data.title}</p>
              </div>

              <div>
                <p>{data.date}</p>
              </div>

              <div className={className.listRight}>
                <p className={className.awardName}>{data.award}</p>
                <img
                  src={data.awardLogo}
                  alt=""
                  className={className.img2}
                />
              </div>
            </div>
            <hr className={className.bottomBorder} />
          </li>
        ))}
      </ul>

      <div className={className.buttonBox}>
              <p className={className.sidetitle}>
                {Data.button.sidetitle}
              </p>
              <Link className={className.button} to={Data.button.link}>
                {Data.button.title}
              </Link>
      </div>
    </div>
  );
};


export const PubHPage14 = () => {
  const className = {
    container: "w-full space-y-10 py-10 px-14 ",
    headerCover: "w-full flex flex-col md:flex-row gap-5 md:items-end justify-between",
    headerBox: "space-y-2 md:space-y-5",
    header: "text-light-accent",
    title: "text-2xl lg:text-4xl font-bold w-fit",
    button: "bg-white py-3 px-4 md:px-7 rounded-md block w-fit font-bold",
    gridBox: "grid grid-cols-1 lg:grid-cols-3 gap-7 place-items-center",
    card: "space-y-4 h-full w-full cursor-pointer",
    cardImg: "w-full",
    cardTitle: "font-bold text-xl md:text-2xl",
    cardDate: "text-sm text-gray-500/90",
    border: "border-dark-creme",
  };

  var Data = Database.page_14;

  var navigateTo = useNavigate();


  return (
    <div className={className.container}>
      <div className={className.headerCover}>
        <div className={className.headerBox}>
          <h4 className={className.header}>{Data.header}</h4>

          <h1 className={className.title}>{Data.title}</h1>
        </div>

        <Link className={className.button} to={Data.button.link}>
          {Data.button.title}
        </Link>
      </div>

      <div className={className.gridBox}>
        {Data.posts.map((data, index) => (
          <div className={className.card} key={index} onClick={() => navigateTo(data.link)}>
            <img src={data.img} alt="" className={className.cardImg}/>
            <h4>
              {data.header}
            </h4>

            <p className={className.cardTitle}>
              {data.title}
            </p>

            <p className={className.cardDate}>
              {data.date}
            </p>
          </div>
        ))}
      </div>

      <hr className={className.border}/>
    </div>
  );
}


export const PubHPage15 = () => {

  const viewport = useViewport().windowSize;

    const className = {
      container: "w-full space-y-10 py-10",
      box1: "w-full flex px-10 flex-col md:flex-row items-start lg:items-center justify-between gap-10 text-dark-brown",
      title1: "text-2xl md:text-4xl font-bold",
      title2: "text-xl font-semibold",
      button1: "px-5 py-3 font-bold rounded-md bg-white w-full lg:w-auto",
      form1: "flex flex-col lg:flex-row items-center gap-4 w-full md:w-[500px]",
      input:
        "p-3 placeholder-gray-500 border border-dark-creme rounded-lg w-full outline-none",
      textBox:
        "p-3 placeholder-gray-500 border resize-none border-dark-creme rounded-lg w-full outline-none h-[130px]",
      button2:
        "px-5 py-3 font-bold rounded-md gap-4 bg-light-accent text-white",
      map: "w-full h-[600px] border-none",
      floatingCardForm:
        "absolute right-20 top-2/4 -translate-y-2/4 p-10 space-y-5 bg-white w-[400px] rounded-md",
      form2: "space-y-5",
      cardForm: "p-10 space-y-5 bg-white w-[400px] rounded-md",
      mobileFormContainer: "w-full flex flex-col items-center gap-10",
      desktopFormContainer: "w-full relative",

      infosContainer: "w-full grid grid-cols-1 lg:grid-cols-3 px-10",
      infoCard: "space-y-6 py-5 px-8 border border-dark-creme",
      infoTitleCard: "flex items-center gap-4",
      infoTitle: "text-lg text-light-accent font-light",
    };

    const Data = Database.page_15;

    const markerPosition = { lat: -6.225850289274498, lng: 107.00105493760948 };

    return (
      <div className={className.container}>
        <div className={className.box1}>
          <h1 className={className.title1}>{Data.title1}</h1>

          <form className={className.form1} action="">
            <input
              type="email"
              className={className.input}
              placeholder={Data.form1.placeholder}
            />
            <button type="submit" className={className.button1}>
              {Data.button1}
            </button>
          </form>
        </div>

        {viewport.innerWidth >= 870 ? (
          <div className={className.desktopFormContainer}>
            {/* <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
              loadingElement={<div style={{ height: "600px" }} />}
              containerElement={<div style={{ height: "600px" }} />}
              mapElement={<div style={{ height: "600px" }} />}
              markerPosition={markerPosition}
            /> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.659934808637!2d106.99968742176348!3d-6.225955637151516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c71cf814d97%3A0xd22a5d56809f070a!2sSummarecon%20Mall%20Bekasi!5e0!3m2!1sen!2sid!4v1688612059501!5m2!1sen!2sid"
              allowFullScreen=""
              className={className.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className={className.floatingCardForm}>
              <h1 className={className.title2}>{Data.title2}</h1>

              <form className={className.form2}>
                <input
                  placeholder={Data.form2.placeholder.email}
                  type={Data.form2.type.email}
                  className={className.input}
                />

                <input
                  placeholder={Data.form2.placeholder.subject}
                  type={Data.form2.type.subject}
                  className={className.input}
                />
                <textarea
                  className={className.textBox}
                  placeholder={Data.form2.placeholder.message}
                ></textarea>

                <button className={className.button2} type={"submit"}>
                  {Data.button2}
                </button>
              </form>
            </div>
          </div> //Desktop View Map
        ) : (
          <div className={className.mobileFormContainer}>
            <div className={className.cardForm}>
              <h1 className={className.title2}>{Data.title2}</h1>

              <form className={className.form2}>
                <input
                  placeholder={Data.form2.placeholder.email}
                  type={Data.form2.type.email}
                  className={className.input}
                />

                <input
                  placeholder={Data.form2.placeholder.subject}
                  type={Data.form2.type.subject}
                  className={className.input}
                />

                <textarea
                  className={className.textBox}
                  placeholder={Data.form2.placeholder.message}
                ></textarea>

                <button className={className.button2} type={"submit"}>
                  {Data.button2}
                </button>
              </form>
            </div>

            {/* <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
              loadingElement={<div style={{ height: "600px" }} />}
              containerElement={<div style={{ height: "600px" }} />}
              mapElement={<div style={{ height: "600px" }} />}
              markerPosition={markerPosition}
            /> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.659934808637!2d106.99968742176348!3d-6.225955637151516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c71cf814d97%3A0xd22a5d56809f070a!2sSummarecon%20Mall%20Bekasi!5e0!3m2!1sen!2sid!4v1688612059501!5m2!1sen!2sid"
              allowFullScreen=""
              className={className.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> //Mobile View Map
        )}

        <div className={className.infosContainer}>
          {Data.list.map((data, index) => (
            <div key={index} className={className.infoCard}>
              <div className={className.infoTitleCard}>
                <img src={data.icon} alt="" />
                <p className={className.infoTitle}>{data.title}</p>
              </div>

              <p>{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
}


export const PubHPage16 = () => {

  const className = {
    container: "w-full p-10 py-10 lg:px-32",
    innerBox: "place-items-center grid grid-cols-1 gap-7 lg:grid-cols-2 bg-light-accent p-20 rounded-md",
    headerBox: "space-y-5 order-2 lg:order-1",
    title: "text-3xl md:text-4xl lg:text-6xl font-bold text-white",
    subtitle: "text-white/60",
    button: "block w-fit px-8 py-3 bg-white text-dark-brown rounded-xl",
    img: "order-1 lg:order-2",

  };

  const Data = Database.page_16;

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <div className={className.headerBox}>
          <h1 className={className.title}>{Data.title}</h1>
          <p className={className.subtitle}>
            {Data.subtitle}
          </p>

          <Link to={Data.button.link} className={className.button}>
            {Data.button.title}
          </Link>
        </div>

        <img src={Data.img} alt="" className={className.img}/>
      </div>
    </div>
  );

}

