import { Link } from "react-router-dom";
import VideoPlayer from "../../../Component/VideoPlayer/VideoPlayer";
import { useViewport } from "../../../Component/Viewport";
import { DataStorage } from "../../../Data/WholeData";

const Database = DataStorage.AboutPersonal;

export const AbtPersonalPage_1 = () => {
  const className = {
    container: "w-full text-center text-white px-10 lg:px-0 py-36 space-y-6",
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

export const AbtPersonalPage_2 = () => {
  const className = {
    container: "w-full grid grid-cols-1 place-items-center gap-10 py-10 px-10",
    innerBox: "space-y-5 md:w-[600px]",
    header: "text-light-accent",
    title: "text-3xl lg:text-5xl font-bold",
    subtitle: "text-sm text-dark-brown/80",
    
    cardBox: "w-full grid grid-cols-1 md:grid-cols-2 lg:px-20",
    card: "w-full flex items-center gap-5 border border-dark-creme p-10 text-dark-brown",
    icon: "p-5 text-2xl rounded-full bg-light-accent text-white",
    cardValue: "text-2xl md:text-3xl font-bold",
    innerCard: "space-y-3"
  }

  const Data = Database.page_2;

  return (
    <div className={className.container}>
      <img src={Data.img} alt=""/>

      <div className={className.innerBox}>
        <h4 className={className.header}>
          {Data.header}
        </h4>
        <h1 className={className.title}>
          {Data.title}
        </h1>

        <p className={className.subtitle}>
          {Data.subtitle}
        </p>
      </div>

      <div className={className.cardBox}>
        {Data.card.map((data, index) => (
          <div key={index} className={className.card}>
            <div className={className.icon}>
              {data.icon}
            </div>

            <div className={className.innerCard}>
                <h3 className={className.cardValue}>
                  {data.value}
                </h3>
                <p>
                  {data.title}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export const AbtPersonalPage_3 = () => {
  const className = {
    container: "w-full grid grid-cols-1 place-items-center py-10 px-10 gap-10 text-dark-brown",
    header: "text-light-accent",
    innerBox: "space-y-5 md:w-[600px]",
    title: "text-3xl md:text-4xl font-bold",
    paragraph: "text-sm text-gray-600/70 whitespace-pre-wrap",
    videoPlayer: "w-full",
    border: "border border-dark-creme w-full"
  }

  const Data = Database.page_3

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <h4 className={className.header}>{Data.header}</h4>
        <h1 className={className.title}>{Data.title}</h1>
        <p className={className.paragraph}>{Data.subtitle}</p>
      </div>

      <div className={className.innerBox}>
        <VideoPlayer src={Data.video} size={className.videoPlayer} />

        <p className={className.paragraph}>{Data.paragraph}</p>
      </div>

      <hr className={className.border} />
    </div>
  );
}

export const AbtPersonalPage_4 = () => {
  const className = {
    container: "w-full gap-10 grid grid-cols-1 place-items-center p-10",
    innerBox: "space-y-5 md:w-[600px]",
    header: "text-light-accent",
    title: "text-3xl md:text-4xl font-bold",
    name: "",
    position: "text-sm text-dark-brown/90",
    border: "border border-dark-creme w-full",
  }

  const Data = Database.page_4

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <h4 className={className.header}>
          {Data.header}
        </h4>
        <h1 className={className.title}>
          {Data.title}
        </h1>
        <h6>
          {Data.name}
        </h6>
        <p className={className.position}>
          {Data.position}
        </p>
      </div>

      <hr className={className.border}/>
    </div>
  )
}


export const AbtPersonalPage_5 = () => {
  const viewport = useViewport().windowSize;

  const className = {
    container: "w-full space-y-10 pt-10",
    listBox: "w-full flex items-center p-10 justify-center gap-20 list-none",
    verticalListBox: "flex flex-col items-center",

    banner:
      "py-20 px-10 lg:p-10 w-full bg-dark-creme rounded-lg grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 relative",
    floatingImg: "absolute left-7 lg:left-10 w-36 -top-20",
    bannerTitle: "text-dark-brown text-2xl font-bold",
    bannerButton:
      "block w-fit px-8 py-3 hover:shadow-md bg-light-accent text-white rounded-lg",
    bannerSubtitle: "text-gray-600/70",
    innerBox: "space-y-5 lg:px-5 z-10 w-full",
  };

  const Data = Database.page_5;
  const bannerData = Data.banner;

  return (
    <div className={className.container}>
      {viewport.innerWidth < 768 ? (
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

      <div className={className.banner}>
        <img src={bannerData.img1} className={className.floatingImg} alt="" />
        <div className={className.innerBox}>
          <h4 className={className.header}>{bannerData.header}</h4>
          <h1 className={className.bannerTitle}>{bannerData.title}</h1>
          <Link className={className.bannerButton} to={bannerData.button.link}>
            {bannerData.button.title}
          </Link>
        </div>

        <p className={className.bannerSubtitle}>{bannerData.subtitle}</p>

        <img src={bannerData.img2} alt="" />
      </div>
    </div>
  );
}