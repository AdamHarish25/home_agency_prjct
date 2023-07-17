import { Link } from "react-router-dom";
import { DataStorage } from "../../../Data/WholeData";
import { useViewport } from "../../../Component/Viewport";
import { FaPlus } from "react-icons/fa";

import check from "../../../Attachments/Image/check.png";
import RatingStar from "../../../Component/Rating/RatingStar";
import FaqAccordion from "../../../Component/FAQ/FaqAccordion";

const Database = DataStorage.PersonalHome;

export const PersHome_1 = () => {
  const className = {
    container:
      "w-full h-auto py-32 px-10 xl:px-20 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 font-Epilogue",
    img: "order-1 lg:order-2",
    paragraphBox:
      "h-full flex flex-col justify-center items-center gap-16 w-full relative px-0 xl:px-20 order-2 lg:order-1",
    innerPBox: "space-y-8 text-white",
    header: "text-light-accent",
    title: "font-bold text-5xl lg:text-[58px] leading-tight",
    subtitle: "text-gray-400",
    buttonBox: "flex items-center gap-3",
    button1:
      "px-5 py-2 block w-fit rounded-lg bg-light-accent text-white font-medium",
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
            <Link className={className.button1} to={Data.button.link}>
              {Data.button.title}
            </Link>
          </div>
        </div>
      </div>

      <img
        draggable={false}
        src={Data.img}
        alt="img"
        className={className.img}
      />
    </div>
  );
};

export const PersHome_2 = () => {
  const viewport = useViewport().windowSize;

  const className = {
    container: "w-full space-y-16 p-20 text-dark-brown",
    headerBox: "space-y-3 text-center",
    header: "text-light-accent",
    title: "text-4xl font-bold ",
    cardBox: "grid grid-cols-1 lg:grid-cols-2 w-full",
    card: `p-10 space-y-10
    border
    border-dark-creme
    ${
      viewport < 1024
        ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
        : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
    }`,
    cardHeader: "flex items-center gap-5 text-xl font-bold",
    subtitle: "text-gray-600/70",
    cardButton: "flex items-center gap-5 cursor-pointer group",
    cardLink:
      "group-hover:shadow-md transform duration-200 block w-fit p-5 bg-white rounded-full text-light-accent",
    buttonFooter:
      "w-full flex items-center justify-center gap-3 text-gray-600/50",
    linkFooter: "hover:underline text-dark-brown",
  };

  const Data = Database.page_2;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header}</h4>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.cardBox}>
        {Data.cards.map((data, index) => (
          <div key={index} className={className.card}>
            <div className={className.cardHeader}>
              <img draggable={false} src={data.icon} alt="" />
              <h2>{data.title}</h2>
            </div>

            <p className={className.subtitle}>{data.subtitle}</p>

            <div className={className.cardButton}>
              <Link to={data.btnLink} className={className.cardLink}>
                <FaPlus />
              </Link>

              <p>{data.btnTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={className.buttonFooter}>
        <p>{Data.footer}</p>

        <Link to={Data.footerButton.link} className={className.linkFooter}>
          {Data.footerButton.title}
        </Link>
      </div>
    </div>
  );
};

export const PersHome_3 = () => {
  const className = {
    container: "w-full px-10 py-16 space-y-20",
    headerBox:
      "w-full flex flex-col md:flex-row items-start md:items-center px-5 justify-between gap-5 text-white",
    header: "text-light-accent",
    titleBox: "space-y-6",
    title: "text-3xl lg:text-5xl font-bold",
    button: "w-fit block px-7 py-3 border border-dark-creme rounded-md",
    cardBox: "w-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-5",
    card: "h-[500px] flex flex-col justify-end items-start gap-3 bg-cover p-10",
    cardTag: "p-3 bg-white text-dark-brown text-sm rounded-full",
    cardTitle: "text-2xl lg:text-4xl font-bold text-white",
  };

  const Data = Database.page_3;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <div className={className.titleBox}>
          <h4 className={className.header}>{Data.header}</h4>
          <h1 className={className.title}>{Data.title}</h1>
        </div>

        <Link className={className.button} to={Data.button.link}>
          {Data.button.title}
        </Link>
      </div>

      <div className={className.cardBox}>
        {Data.cards.map((data, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${data.img})` }}
            className={className.card}
          >
            <h4 className={className.cardTag}>{data.tag}</h4>

            <h1 className={className.cardTitle}>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PersHome_4 = () => {
  const className = {
    container: "w-full space-y-20 p-10 lg:p-20",
    upContainer:
      "w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center",
    headerBox: "space-y-8 text-dark-brown",
    header: "text-light-accent",
    title: "text-3xl lg:text-5xl font-bold",
    subtitle: "text-xs lg:text-sm text-dark-brown/60",
    link: "w-fit block px-5 py-3 bg-white rounded-md shadow hover:shadow-lg font-medium transform duration-200",

    downContainer: "w-full grid grid-cols-1 md:grid-cols-2 ",
    card: "w-full px-10 py-7 border border-dark-creme flex items-center gap-6",
    innerCard: "space-y-3 text-dark-brown",
    cardValue: "text-3xl font-bold",
  };

  const Data = Database.page_4;

  return (
    <div className={className.container}>
      <div className={className.upContainer}>
        <img draggable={false} src={Data.img} alt="" />

        <div className={className.headerBox}>
          <h4 className={className.header}>{Data.header.toUpperCase()}</h4>

          <h1 className={className.title}>{Data.title}</h1>

          <h5>{Data.subheader}</h5>

          <p className={className.subtitle}>{Data.subtitle}</p>

          <Link to={Data.button.link} className={className.link}>
            {Data.button.title}
          </Link>
        </div>
      </div>

      <div className={className.downContainer}>
        {Data.cards.map((data, index) => (
          <div key={index} className={className.card}>
            <img draggable={false} src={data.icon} alt="" />

            <div className={className.innerCard}>
              <h1 className={className.cardValue}>{data.value}</h1>

              <h4>{data.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PersHome_5 = () => {
  const className = {
    container: "w-full overflow-visible",
    darkBox:
      "w-full bg-dark-purple grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 lg:px-20 py-28 place-items-center",
    innerBox: "space-y-8 text-white order-2 lg:order-1",
    header: "text-light-accent",
    title: "text-3xl font-bold lg:text-5xl",
    listBox: "space-y-4 list-none",
    list: "flex items-center gap-4",
    img1: "order-1 lg:order-2",

    banner:
      "w-full grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10 px-10 md:px-16 pt-28 pb-16 lg:py-16 relative bg-gray-creme",
    img2: "absolute left-10 -top-20 ",
    innerBanner: "flex h-full flex-col items-start justify-center gap-4 w-full",
    bannerTitle: "text-xl md:text-3xl",
    button:
      "block w-fit py-3 px-6 bg-light-accent text-white font-semibold rounded-md",
    subtitle: "text-gray-600/60 pr-20",
    img3: "w-full",
  };

  const Data = Database.page_5;

  return (
    <div className={className.container}>
      <div className={className.darkBox}>
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header}</h4>
          <h1 className={className.title}>{Data.title}</h1>
          <p>{Data.subtitle}</p>

          <ul className={className.listBox}>
            {Data.lists.map((data, index) => (
              <li key={index} className={className.list}>
                <img draggable={false} src={check} alt="" />
                <p>{data.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <img
          draggable={false}
          src={Data.img}
          alt=""
          className={className.img1}
        />
      </div>

      <div className={className.banner}>
        <img
          draggable={false}
          src={Data.banner.img2}
          alt=""
          className={className.img2}
        />

        <div className={className.innerBanner}>
          <h4 className={className.header}>{Data.banner.header}</h4>
          <h1 className={className.bannerTitle}>{Data.banner.title}</h1>

          <Link className={className.button} to={Data.banner.button.link}>
            {Data.banner.button.title}
          </Link>
        </div>

        <p className={className.subtitle}>{Data.banner.subtitle}</p>

        <img
          draggable={false}
          src={Data.banner.img3}
          alt=""
          className={className.img3}
        />
      </div>
    </div>
  );
};

export const PersHome_6 = () => {
  const className = {
    container:
      "w-full flex flex-col items-center gap-16 bg-light-creme px-10 md:px-20 py-20",
    headerBox: "w-full flex flex-col items-center gap-5",
    header: "text-light-accent",
    title: "text-3xl lg:text-5xl font-bold",
    gridBox: "grid grid-cols-1 lg:grid-cols-3 place-items-start",
    card: "p-10 space-y-8 border border-dark-creme w-full",
    innerCard: "w-fit flex items-center gap-5",
    cardImg: "w-20 h-20 rounded-full",
    cardName: "text-xl md:text-2xl font-bold",
    cardCompany: "text-dark-brown",
    cardComment: "text-gray-500",

    button: "bg-white rounded-lg block w-fit px-10 py-3 font-bold shadow-md",
  };

  const Data = Database.page_6;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h4 className={className.header}>{Data.header.toUpperCase()}</h4>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.gridBox}>
        {Data.cards.map((data, index) => (
          <div
            key={index}
            className={`${className.card} ${
              data.highlight !== 0 ? "bg-white shadow-lg" : "bg-transparent"
            }`}
          >
            <RatingStar rating={data.rating} />

            <p className={className.cardComment}>{data.comment}</p>

            <div className={className.innerCard}>
              <img
                draggable={false}
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

export const PersHome_7 = () => {
  const className = {
    container: "w-full space-y-10 p-10 md:p-20 text-white",
    headerBox: "space-y-8",
    header: "text-light-accent",
    title: "text-2xl md:text-4xl font-bold",
    subtitle: "text-gray-500",
    link: "block w-fit",
    innerContainer:
      "w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-start",

    listBox: "w-full flex items-center py-10 justify-center gap-20 list-none",
    verticalListBox: "flex flex-col items-center",
  };

  const Data = Database.page_7;
  const Viewport = useViewport().windowSize;

  return (
    <div className={className.container}>
      <div className={className.innerContainer}>
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

      {Viewport.innerWidth < 1025 ? (
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

export const PersHome_8 = () => {

  const className = {
    container: "w-full space-y-14 p-10 lg:p-20 text-dark-brown",
    headerBox:
      "w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 ",
    header: "text-light-accent font-light",
    titleBox: "space-y-5",
    title: "text-2xl lg:text-4xl font-bold",
    Link: "block w-fit py-3 rounded-md px-6 bg-white hover:shadow-md font-bold",

    cardBox: "w-full grid grid-cols-1 lg:grid-cols-4 gap-8 place-items-center",
    card1: "lg:col-start-1 lg:col-end-4 w-full space-y-4 lg:space-y-6",
    cardTitleL: "text-xl lg:text-3xl font-bold block w-fit hover:underline",
    cardDate: "text-gray-600/50",
    colCards: "h-full w-full grid grid-rows-2 gap-5",
    card2: "space-y-4 w-full",
    cardTitleS: "text-xl font-bold block w-fit hover:underline",

    newsletterBar: "w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7 py-10 border-t border-dark-creme",
    newsTitleBox: "space-y-3",
    newsTitle: "text-xl font-bold",
    newsFormBox: "w-full lg:w-auto flex flex-col md:flex-row items-start md:items-center gap-5",
    newsForm: "w-full lg:w-auto px-5 py-4 rounded-md outline-none bg-white border border-dark-creme ",
    newsSubmitForm: "w-full lg:w-auto px-10 py-3 rounded-md shadow-sm hover:shadow-md bg-white font-bold",
  };

  const Data = Database.page_8;


  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <div className={className.titleBox}>
          <h4 className={className.header}>{Data.header}</h4>
          <h1 className={className.title}>
            {Data.title}
          </h1>
        </div>

        <Link className={className.Link} to={Data.button.link}>
          {Data.button.title}
        </Link>
      </div>

      <div className={className.cardBox}>
        <div className={className.card1}>
          <img draggable={false} src={Data.card1.img} alt=""/>
          
          <h5>
            {Data.card1.header}
          </h5>
          <Link to={Data.card1.link} className={className.cardTitleL}>
            {Data.card1.title}
          </Link>
          <p className={className.cardDate}>
            {Data.card1.date}
          </p>
        </div>

        <div className={className.colCards}>
          {Data.cards.map((data, index) => (
            <div key={index} className={className.card2}>
              <img draggable={false} src={data.img} alt=""/>

              <h5>
                {data.header}
              </h5>
              <Link to={data.link} className={className.cardTitleS}>
                {data.title}
              </Link>
              <p className={className.cardDate}>
                {data.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={className.newsletterBar}>
          <div className={className.newsTitleBox}>
            <h1 className={className.newsTitle}>
              {Data.newsBar.title}
            </h1>

            <p>
              {Data.newsBar.subtitle}
            </p>
          </div>

          <form className={className.newsFormBox}>
              <input type={`email`} placeholder={Data.newsBar.form} className={className.newsForm}/>

              <button type={'submit'} className={className.newsSubmitForm}>
                {Data.newsBar.submitButton.title}
              </button>
          </form>
      </div>
    </div>
  );

}


export const PersHome_9 = () => {

  const className = {
    container: "w-full p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-6",
    formBox: "",
    descriptionBox: "",
  }


  return (
    <div className={className.container}>
      <form>

      </form>

      <div>

      </div>
    </div>
  )
}