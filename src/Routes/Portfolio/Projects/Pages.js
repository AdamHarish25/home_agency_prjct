import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import VideoPlayer from "../../../Component/VideoPlayer/VideoPlayer";

export const PortfolioPrPage = ({ Data }) => {
  const className = {
    container:
      "w-full grid grid-cols-1 gap-20 place-items-center px-10 pt-36 text-dark-brown",
    button: "flex items-center gap-4 font-semibold",
    innerBox: "space-y-7 w-full md:w-[600px]",
    socialBox: "w-full flex flex-col items-center gap-5",

    mainTitle: "text-5xl lg:text-6xl font-bold",
    title: "text-3xl md:text-4xl font-bold",
    subtitle: "text-lg",
    paragraph: "text-dark-brown/60 whitespace-pre-wrap",

    list: "space-y-4",
    subheader: "text-light-accent",
    gridBox: "grid grid-cols-1 md:grid-cols-2 gap-5 w-full",
    gridImg: "grid grid-cols-2 place-items-center gap-5 w-full",
    gridCol: "grid grid-cols-1 md:grid-cols-2 gap-5 w-full place-items-center",

    img: "w-full",
    videoPlayer: "w-full h-fit",
    listBox: "flex items-center gap-3",
    iconLink: "block w-fit p-4 rounded-full text-white bg-light-accent",
    border: "border border-dark-creme w-full",
    innerContainer: "w-full space-y-7",

    banner:
      "w-full bg-light-accent rounded-lg grid grid-cols-1 md:grid-cols-2 place-items-center p-10 text-white",
    bannerTitle: "text-3xl lg:text-5xl font-bold",
    bannerButton:
      "block w-fit px-7 py-2 rounded-lg bg-white text-dark-brown font-semibold",
    bannerBox: "space-y-5 md:px-5 order-2 md:order-1",
    bannerImg: "order-1 md:order-2",

    gridCont: "w-full h-[420px] relative rounded-lg flex flex-col items-start",
    gridPic: `absolute w-full h-full object-cover`,
    gridContent: "h-full flex flex-col z-10 items-start justify-end gap-5 p-10",
    gridTag: "bg-white px-4 py-2 text-dark-brown rounded-full",
    gridTitle: "font-bold text-4xl text-white",
  };

  var navigateTo = useNavigate();

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <Link to={Data.backButton.link} className={className.button}>
          <FaArrowLeft />
          <p>{Data.backButton.title}</p>
        </Link>

        <h1 className={className.mainTitle}>{Data.title}</h1>
        <h4 className={className.subtitle}>{Data.subtitle}</h4>

        <p className={className.paragraph}>{Data.paragraph}</p>

        <div className={className.gridBox}>
          <ul className={className.list}>
            <li className={className.subheader}>Category</li>
            {Data.category.map((data, index) => (
              <li key={index}>{data.title}</li>
            ))}
          </ul>

          <div className={className.list}>
            <ul className={className.list}>
              <li className={className.subheader}>Client</li>
              <li>
                <img src={Data.client} alt="" />
              </li>
            </ul>

            <ul className={className.list}>
              <li className={className.subheader}>Date</li>
              <li>{Data.date}</li>
            </ul>
          </div>
        </div>
      </div>

      <img src={Data.img} alt="" className={className.img} />

      <div className={className.innerBox}>
        <h1 className={className.title}>{Data.header1}</h1>
        <p className={className.paragraph}>{Data.paragraph1}</p>
      </div>

      <div className={className.gridCol}>
        <VideoPlayer src={Data.video} size={className.videoPlayer} />
        <div className={className.gridImg}>
          {Data.imgCards.map((data, index) => (
            <img src={data.src} key={index} alt="" className={className.img} />
          ))}
        </div>
      </div>

      <div className={className.innerBox}>
        <h1 className={className.title}>{Data.header2}</h1>
        <p className={className.paragraph}>{Data.paragraph2}</p>
      </div>

      <div className={className.socialBox}>
        <p className={className.paragraph}>Share On</p>

        <ul className={className.listBox}>
          {Data.list.map((data, index) => (
            <li key={index}>
              <Link to={data.link} className={className.iconLink}>
                {data.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <hr className={className.border} />

      <div className={className.innerContainer}>
        <h4 className={className.title}>{Data.title3}</h4>
        <div className={className.gridCol}>
          {Data.gridList.map((data, index) => (
            <div
              key={index}
              className={className.gridCont}
              onClick={() => navigateTo(data.link)}
            >
              <img
                src={data.img}
                alt={data.title}
                className={className.gridPic}
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
      </div>

      <div className={className.banner}>
        <div className={className.bannerBox}>
          <h1 className={className.bannerTitle}>{Data.banner.title}</h1>
          <p>{Data.banner.subtitle}</p>

          <Link to={Data.banner.button.link} className={className.bannerButton}>
            {Data.banner.button.title}
          </Link>
        </div>

        <img src={Data.banner.img} alt="" className={className.bannerImg} />
      </div>
    </div>
  );
};
