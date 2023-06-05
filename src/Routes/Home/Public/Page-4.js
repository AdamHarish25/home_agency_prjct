import { Link } from "react-router-dom";
import VideoPlayer from "../../../Component/VideoPlayer";
import { DataStorage } from "../../../Data/WholeData";

const PubHPage4 = () => {
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

  var Data = DataStorage.PublicHome.page_4;

  return (
    <div className={className.container}>
      <div className={className.box}>
        <VideoPlayer src={Data.video} size={className.videoPlayer} />
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header1}</h4>
          <h1 className={className.title}>{Data.title1}</h1>
          <p className={className.paragraph}>{Data.subtitle1}</p>
        </div>
      </div>

      <div className={className.box}>
        <div className={`${className.innerBox} order-2 lg:order-1`}>
          <h4 className={className.header}>{Data.header2}</h4>
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
          <h4 className={className.header}>{Data.header3}</h4>
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

export default PubHPage4;
