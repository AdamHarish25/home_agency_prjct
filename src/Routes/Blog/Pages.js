import { useState } from "react";
import { DataStorage } from "../../Data/WholeData";
import { Link, useNavigate } from "react-router-dom";

const Database = DataStorage.BlogArticle;

export const BlogArtPage_1 = () => {
    const className = {
        container: "w-full grid place-items-center text-white bg-dark-purple py-36 px-10 text-center gap-5",
        title: "text-5xl md:text-6xl font-bold",
        subtitle: "text-white/70"
    }

    const Data = Database.blogTitle;

    return (
        <div className={className.container}>
            <h1 className={className.title}>
                {Data.title}
            </h1>
            <p className={className.subtitle}>
                {Data.subtitle}
            </p>
        </div>
    )
}

export const BlogArtPage_2 = () => {
    const className = {
      container: "w-full space-y-10 p-10",
      gridBox: "w-full grid text-dark-brown grid-cols-1 lg:grid-cols-2 gap-5",
      card: "space-y-5 w-full cursor-pointer group",
      title: "text-3xl font-bold group-hover:underline",
      date: "text-sm text-dark-brown/60",
      border: "border border-dark-creme w-full",
    };

    const Data = Database.BlogRow1;

    let navigateTo = useNavigate();


    return (
      <div className={className.container}>
        <div className={className.gridBox}>
          {Data.map((data, index) => (
            <div onClick={() => navigateTo(data.link)} key={index} className={className.card}>
              <img src={data.img} alt="" />
              <h4>{data.header}</h4>
              <h1 className={className.title}>{data.title}</h1>
              <p className={className.date}>{data.date}</p>
            </div>
          ))}
        </div>
        <hr className={className.border} />
      </div>
    );
}


export const BlogArtPage_3 = () => {
    const [showAll, setShowAll] = useState(false);

    const className = {
      container: "w-full grid place-items-center gap-10 p-10 text-dark-brown",
      gridBox: "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
      card: "space-y-3 w-full cursor-pointer group",
      header: "",
      title: "text-2xl font-bold group-hover:underline",
      date: "text-xs text-dark-brown/60",
      border: "border border-dark-creme w-full",
      button: "py-3 px-6 bg-white font-bold rounded-md",
    };

    const Data = Database.BlogRow2;

    let navigateTo = useNavigate();

    return (
      <div className={className.container}>
        <div className={className.gridBox}>
          {Data.slice(0, showAll === true ? Data.length : 3).map((data, index) => (
            <div onClick={() => navigateTo(data.link)} key={index} className={className.card}>
              <img src={data.img} alt="" />
              <h4>{data.header}</h4>
              <h1 className={className.title}>{data.title}</h1>
              <p className={className.date}>{data.date}</p>
            </div>
          ))}
        </div>

        <button onClick={() => setShowAll(!showAll)} className={className.button}>
            {showAll === true ? "Load Less" : "Load More"}
        </button>
        <hr className={className.border}/>
      </div>
    );
}


export const BlogArtPage_4 = () => {
  const className = {
    container: "w-full space-y-5 p-10",
    newsletterBar:
      "w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7 pb-10",
    newsTitleBox: "space-y-3",
    newsTitle: "text-3xl font-bold",
    newsFormBox:
      "w-full lg:w-auto flex flex-col md:flex-row items-start md:items-center gap-5",
    newsForm:
      "w-full lg:w-auto px-5 py-3 rounded-md outline-none text-gray-500 bg-white border border-dark-creme ",
    newsSubmitForm:
      "w-full md:w-auto px-10 py-3 rounded-md shadow-sm bg-white hover:shadow-md border border-light-creme font-bold",

    border: "w-full border border-dark-creme",
  };

  const Data = Database;


  return (
    <div className={className.container}>
      <div className={className.newsletterBar}>
        <h1 className={className.newsTitle}>{Data.newsBar.title}</h1>

        <form className={className.newsFormBox}>
          <input
            type={`email`}
            placeholder={Data.newsBar.form}
            className={className.newsForm}
          />

          <button type={"submit"} className={className.newsSubmitForm}>
            {Data.newsBar.submitButton.title}
          </button>
        </form>
      </div>

      <hr className={className.border}/>
    </div>
  );
}


export const BlogArtPage_5 = () => {
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

  const Data = Database.banner;

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


