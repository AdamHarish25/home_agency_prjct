/* eslint-disable */

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const BlogProjectPage = ({ Data }) => {
  const className = {
    container:
      "w-full grid place-items-center gap-20 px-10 pt-36 text-dark-brown",
    innerBox: "w-full md:w-[600px] space-y-10",
    mainTitle: "text-5xl md:text-6xl font-bold",
    backButton: "flex items-center gap-5",

    flexBox:
      "w-full flex flex-col md:flex-row gap-8 items-start md:items-center justify-between",

    img: "w-full",
    paragraph: "text-dark-brown/60 whitespace-pre-wrap",
    header: "text-4xl font-bold",

    listBox: "space-y-2 text-start px-5",
    list: "text-light-accent text-4xl",
    listTitle: "text-dark-brown text-base",

    quoteBox: "w-full bg-gray-creme flex items-start text-xl gap-10 p-8",

    border: "border border-dark-creme w-full",

    wrapBox: "flex items-center gap-5",
    editorName: "text-lg",
    editorPosition: "text-sm text-dark-brown/60",
    socialIcon: "block w-fit p-5 rounded-full bg-light-accent text-white",

    gridBox: "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
    card: "space-y-3 w-full cursor-pointer group",
    cardTitle: "text-2xl font-bold group-hover:underline",
    cardDate: "text-xs text-dark-brown/60",
    titleBox: "w-full text-3xl font-bold grid place-items-start",
    cardBox: "space-y-10",

    banner:
      "w-full bg-light-accent rounded-lg grid grid-cols-1 md:grid-cols-2 place-items-center p-10 text-white",
    bannerTitle: "text-3xl lg:text-5xl font-bold",
    bannerButton:
      "block w-fit px-7 py-2 rounded-lg bg-white text-dark-brown font-semibold",
    bannerBox: "space-y-5 md:px-5 order-2 md:order-1",
    bannerImg: "order-1 md:order-2",
  };

  let navigateTo = useNavigate();

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <Link to={Data.backButton.link} className={className.backButton}>
          <FaArrowLeft />
          <p>{Data.backButton.title}</p>
        </Link>
        <h1 className={className.mainTitle}>{Data.title}</h1>

        <div className={className.flexBox}>
          <p>{Data.storyTeller}</p>
          <p>{Data.date}</p>
        </div>

        <img src={Data.img} alt="" className={className.img} />
      </div>
      <div className={className.innerBox}>
        <h4 className={className.subtitle}>{Data.subtitle}</h4>
        <p className={className.paragraph}>{Data.paragraph1}</p>

        <h1 className={className.header}>{Data.header2}</h1>
        <p className={className.paragraph}>{Data.paragraph2_1}</p>

        <ul className={`${className.listBox} list-disc`}>
          {Data.list2.map((data, index) => (
            <li key={index} className={className.list}>
              <p className={className.listTitle}>{data.title}</p>
            </li>
          ))}
        </ul>

        <p className={className.paragraph}>{Data.paragraph2_2}</p>
      </div>

      <div className={className.innerBox}>
        <h1 className={className.header}>{Data.header3}</h1>
        <p className={className.paragraph}>{Data.paragraph3_1}</p>

        <ul className={`${className.listBox} list-decimal`}>
          {Data.list3.map((data, index) => (
            <li key={index} className={className.listTitle}>
              {data.title}
            </li>
          ))}
        </ul>

        <p className={className.paragraph}>{Data.paragraph3_2}</p>
      </div>

      <div className={className.innerBox}>
        <div className={className.quoteBox}>
          <img src={Data.quote.img} alt="" />
          <h5>{Data.quote.title}</h5>
        </div>

        <p className={className.paragraph}>{Data.paragraph4}</p>

        <hr className={className.border} />
      </div>

      <div className={className.innerBox}>
        <div className={className.flexBox}>
          <div className={className.wrapBox}>
            <img src={Data.editorial.img} alt="" />
            <div>
              <h5 className={className.editorName}>{Data.editorial.name}</h5>
              <p className={className.editorPosition}>
                {Data.editorial.position}
              </p>
            </div>
          </div>

          <div className={className.wrapBox}>
            {Data.editorial.socialList.map((data, index) => (
              <Link to={data.link} className={className.socialIcon}>
                {data.list}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr className={className.border} />

      <div className={className.cardBox}>
        <div className={className.titleBox}>
          <h6>{Data.title2}</h6>
        </div>
        <div className={className.gridBox}>
          {Data.BlogRow.map((data, index) => (
            <div
              onClick={() => navigateTo(data.link)}
              key={index}
              className={className.card}
            >
              <img src={data.img} alt="" />
              <h4>{data.header}</h4>
              <h1 className={className.cardTitle}>{data.title}</h1>
              <p className={className.cardDate}>{data.date}</p>
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
