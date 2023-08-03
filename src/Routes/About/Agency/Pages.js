/* eslint-disable */
import { Link } from "react-router-dom";
import Carousel from "../../../Component/Carousel/Carousel";
import Carousel2 from "../../../Component/Carousel2/Carousel2";
import FaqAccordion from "../../../Component/FAQ/FaqAccordion";
import VideoPlayer from "../../../Component/VideoPlayer/VideoPlayer";
import { useViewport } from "../../../Component/Viewport";
import { DataStorage } from "../../../Data/WholeData";

const Database = DataStorage.AboutAgency;

export const AbtAgencyPage_1 = () => {
  const className = {
    container: "w-full text-center text-white px-10 lg:px-0 py-32 space-y-6",
    title: "text-4xl md:text-5xl font-bold",
    subtitle: "lg:px-96",
  };
  const Data = Database.page_1;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>
      <p className={className.subtitle}>{Data.subtitle}</p>
    </div>
  );
};

export const AbtAgencyPage_2 = () => {
  const className = {
    container: "w-full space-y-20 py-16 px-10",
    gridBox:
      "grid grid-cols-1 text-dark-brown md:grid-cols-2 gap-5 place-items-center w-full",
    header: "text-light-accent",
    title: "font-bold text-4xl md:text-5xl",
    innerBox: "space-y-6",
    subtitle: "whitespace-pre-wrap px-0 md:px-10",
    videoplayer: "w-full",
    gridCard: "grid grid-cols-2 place-items-center w-full gap-3",
  };

  const Data = Database.page_2;

  return (
    <div className={className.container}>
      <div className={className.gridBox}>
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header}</h4>
          <h1 className={className.title}>{Data.title}</h1>
        </div>
        <p className={className.subtitle}>{Data.subtitle}</p>
      </div>

      <div className={className.gridBox}>
        <VideoPlayer src={Data.video} size={className.videoplayer} />
        <div className={className.gridCard}>
          {Data.imgCard.map((data, index) => (
            <img src={data.src} key={index} className="w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export const AbtAgencyPage_3 = () => {
  const viewport = useViewport().windowSize;

  const className = {
    container: "w-full space-y-20 p-10 lg:14 xl:p-20",
    gridBox: "w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10",
    innerBox: "space-y-5 pr-10",
    header: "text-light-accent",
    subtitle: "text-sm font-light",

    list: "grid grid-cols-1 md:grid-cols-2 place-items-end",
    listChild: "w-full h-fit px-6 lg:px-10 py-16 space-y-5 border",
    ListTitle: "text-lg font-medium",

    gridCard: "w-full grid grid-cols-1 md:grid-cols-3",
    card: `w-full h-full border border-dark-creme space-y-5 p-12 ${
      viewport.innerWidth < 1024
        ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
        : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
    }`,
    cardValue: "text-3xl font-bold",
    cardTitle: "text-lg",
  };

  const Data = Database.page_3;

  return (
    <div className={className.container}>
      <div className={className.gridBox}>
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header}</h4>
          <h1>{Data.title}</h1>
          <p className={className.subtitle}>{Data.subtitle}</p>
        </div>
        <div className={className.list}>
          {Data.list.map((data, index) => (
            <div key={index} className={`${className.listChild} ${data.color}`}>
              {data.img === "" ? (
                <div></div>
              ) : (
                <img src={data.img} alt={data.title} className="w-14 h-14" />
              )}
              <h1 className={className.ListTitle}>{data.title}</h1>
              <p className={`${className.paragraph} text-xs`}>
                {data.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={className.gridCard}>
        {Data.card.map((data, index) => (
          <div key={index} className={className.card}>
            <h1 className={className.cardValue}>{data.value}</h1>
            <p className={className.cardTitle}>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AbtAgencyPage_4 = () => {
  const className = {
    container:
      "w-screen h-auto py-10 px-5 lg:p-10 space-y-7 relative font-Epilogue text-white",
    headerBox:
      "pr-10 static pl-10 lg:pl-0 lg:absolute top-20 left-20 space-y-4",
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

  var Data = Database.page_4;

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

export const AbtAgencyPage_5 = () => {
  const className = {
    container: "w-full text-center text-white py-10 space-y-14",
    header: "text-light-accent",
    headerBox: "space-y-3",
    title: "text-3xl lg:text-5xl font-bold",
    carouselBox: "w-full overflow-x-hidden grid place-items-center",
  };

  const Data = Database.page_5;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header}</h4>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.carouselBox}>
        <Carousel2 items={Data.card} />
      </div>
    </div>
  );
};

export const AbtAgencyPage_6 = () => {
  const Viewport = useViewport().windowSize;

  const className = {
    container: "w-full p-10 space-y-10 text-white",
    gridCol:
      "grid grid-cols-1 py-10 px-0 md:px-14 lg:px-32 gap-10 w-full place-items-center",
    innerBox: "space-y-5",
    header: "text-light-accent",
    title: "text-3xl md:text-4xl font-bold",
    subtitle: "text-white/70",
    faqBox: "w-full",

    listBox: "w-full flex items-center py-10 justify-center gap-20 list-none",
    verticalListBox: "flex flex-col items-center",
    border: "border border-dark-creme",
  };

  const Data = Database.page_6;

  return (
    <div className={className.container}>
      <div className={className.gridCol}>
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header}</h4>
          <h1 className={className.title}>{Data.title}</h1>
          <p className={className.subtitle}>{Data.subtitle}</p>
        </div>

        <div className={className.faqBox}>
          <FaqAccordion faqs={Data.faqs} />
        </div>
      </div>

      {Viewport.innerWidth < 768 ? (
        <div className={className.verticalListBox}>
          <ul className={className.listBox}>
            {Data.logos.slice(0, 2).map((data, index) => (
              <li key={index}>
                <img draggable={false} src={data.img} alt={data.title} />
              </li>
            ))}
          </ul>
          <ul className={className.listBox}>
            {Data.logos.slice(2, 4).map((data, index) => (
              <li key={index}>
                <img draggable={false} src={data.img} alt={data.title} />
              </li>
            ))}
          </ul>
          <ul className={className.listBox}>
            {Data.logos.slice(4, 5).map((data, index) => (
              <li key={index}>
                <img draggable={false} src={data.img} alt={data.title} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className={className.listBox}>
          {Data.logos.map((data, index) => (
            <li key={index}>
              <img draggable={false} src={data.img} alt={data.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const AbtAgencyPage_7 = () => {
  const className = {
    container:
      "w-full p-10 lg:p-20 bg-gradient-to-b from-dark-purple to-light-creme from-80% to-10%",
    banner:
      "w-full p-10 bg-light-accent text-white grid grid-cols-1 place-items-center md:grid-cols-2 gap-5 rounded-lg",
    innerBox: "space-y-5",
    title: "text-3xl md:text-5xl font-bold",
    subtitle: "text-white/60 font-light",

    button:
      "w-fit block py-2 px-5 bg-white text-dark-brown font-bold rounded-xl",
  };

  const Data = Database.page_7;

  return (
    <div className={className.container}>
      <div className={className.banner}>
        <div className={className.innerBox}>
          <h1 className={className.title}>{Data.title}</h1>
          <p className={className.subtitle}>{Data.subtitle}</p>

          <Link to={Data.button.link} className={className.button}>
            {Data.button.title}
          </Link>
        </div>
        <img src={Data.img} alt="" />
      </div>
    </div>
  );
};
