import { Link, useNavigate } from "react-router-dom";
import { DataStorage } from "../../Data/WholeData";
import { useViewport } from "../../Component/Viewport";
import VideoPlayer from "../../Component/VideoPlayer/VideoPlayer";
import { useState } from "react";
import Dropdown from "../../Component/Dropdown/Dropdown";
import RatingStar from "../../Component/Rating/RatingStar";
import { FaMinus, FaPlus } from "react-icons/fa";
import FaqAccordion from "../../Component/FAQ/FaqAccordion";

const Database = DataStorage.Webflow;


export const WebFPage_1 = () => {
    const className = {
      container: "space-y-10 w-full p-10 lg:p-32",
      box: "w-full grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10",
      innerBox: "space-y-10 px-5",
      header: "text-light-accent",
      title: "text-4xl lg:text-5xl font-bold",
      subtitle: "text-white/70",
      buttonBox: "flex flex-col lg:flex-row items-start lg:items-center gap-8",
      button:
        "block w-fit px-5 py-3 rounded-md bg-light-accent font-bold text-lg",
      link: "w-fit block hover:underline px-5",
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
    list: "w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-end",
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
    container: "w-full space-y-10 p-10 lg:p-20 bg-gradient-to-b from-80% to-10% from-dark-purple to-light-creme",
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
    cardBox: "w-full grid grid-cols-1 md:grid-cols-3",
    cardValue: "font-bold text-3xl",
    card: `w-full h-full border border-dark-creme space-y-3 p-10 ${
      viewport.innerWidth < 768
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
    container: "w-full space-y-7 px-8 lg:px-14 from-dark-purple from-70% to-10% to-light-creme bg-gradient-to-t xl:px-28 text-center py-10",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-4xl font-bold text-dark-brown",
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
      "px-5 py-3 rounded-md font-bold shadow-md hover:shadow-white text-white border border-white/30 block w-fit",

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
                  filtered === data.filter ? "text-dark-brown" : "text-dark-brown/[0.64]"
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
        ).slice(0, (viewport.innerWidth < 768 ? 3 : (viewport.innerWidth < 1028 ? 4 : 6))).map((data, idx) => (
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


export const WebFPage_6 = () => {
  const className = {
    container: "w-full space-y-20 py-20 px-10 -z-20 lg:p-20",
    banner:
      "py-20 px-10 lg:p-10 w-full bg-light-creme rounded-lg grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 relative",
    floatingImg: "absolute left-7 lg:left-10 w-36 -top-20",
    bannerTitle: "text-dark-brown text-2xl font-bold",
    bannerButton: "block w-fit px-8 py-3 hover:shadow-md bg-light-accent text-white rounded-lg",
    bannerSubtitle: "text-gray-600/70",

    innerBox: "space-y-5 lg:px-5 z-10 w-full",
    header: "text-light-accent font-light",
    gridBox: "w-full grid grid-cols-1 text-white lg:grid-cols-2 place-items-center gap-7",
    title: "text-2xl lg:text-4xl font-bold",
    subtitle: "text-sm text-white/70",
    button: "block w-fit rounded-lg py-2 font-bold hover:shadow-white shadow-md transform duration-200 bg-light-purple px-6",
  };

  const Data = Database.page_6;
  const bannerData = Data.banner;

  return (
    <div className={className.container}>
      <div className={className.banner}>
        <img src={bannerData.img1} className={className.floatingImg} alt=""/>
        <div className={className.innerBox}>
          <h4 className={className.header}>
            {bannerData.header}
          </h4>
          <h1 className={className.bannerTitle}>
            {bannerData.title}
          </h1>
          <Link className={className.bannerButton} to={bannerData.button.link}>
            {bannerData.button.title}
          </Link>
        </div>

        <p className={className.bannerSubtitle}>
          {bannerData.subtitle}
        </p>

        <img src={bannerData.img2} alt=""/>
      </div>

      <div className={className.gridBox}>
        <img src={Data.img} alt=""/>

        <div className={className.innerBox}>
          <h4 className={className.header}>
            {Data.header}
          </h4>
          <h1 className={className.title}>
            {Data.title}
          </h1>
          <p>
            {Data.subheader}
          </p>
          <p className={className.subtitle}>
            {Data.subtitle}
          </p>
          <Link to={Data.button.link} className={className.button}>
            {Data.button.title}
          </Link>
        </div>
      </div>
    </div>
  )
}


export const WebFPage_7 = () => {
  const className = {
    container:
      "w-full from-dark-purple from-70% to-10% to-light-creme bg-gradient-to-b blur-none flex flex-col items-center gap-10 pt-20 pb-10 px-10 lg:px-28",
    header: "text-light-accent",
    title: "text-4xl font-bold w-auto lg:w-96",
    headerBox: "text-center space-y-4",
    gridBox: "w-full grid grid-cols-1 lg:grid-cols-2",
    card: `w-full bg-transparent border py-10 px-14 border-dark-creme flex flex-col justify-center text-dark-brown gap-8 bg-white hover:shadow-lg`,
    cardComment: "text-dark-brown",
    innerCard: "w-fit flex items-center gap-5",
    cardImg: "w-20 h-20 rounded-full",
    cardName: "text-xl md:text-2xl font-bold",
    cardCompany: "text-dark-brown",
    button: "bg-white text-dark-brown rounded-lg block w-fit px-10 py-3 font-bold shadow-md",
  };

  const Data = Database.page_7;

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


export const WebFPage_8 = () => {
 const className = {
   container: "w-full flex flex-col gap-8 bg-light-creme px-10 md:px-20 py-20",
   headerBox: "w-full md:w-96 flex flex-col items-start gap-2",
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

 const Data = Database.page_8;

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
}

export const WebFPage_9 = () => {
  const className = {
    container: "w-full space-y-10 p-10 md:p-20",
    headerBox: "space-y-8",
    header: "text-light-accent",
    title: "text-2xl md:text-4xl font-bold",
    subtitle: "text-gray-500",
    link: "block w-fit",
    innerContainer:
      "w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-start",

    listBox: "w-full flex items-center py-10 justify-center gap-20 list-none",
    verticalListBox: "flex flex-col items-center",
    border: "border border-dark-creme",
  };

  const Data = Database.page_9;
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

      <hr className={className.border}/>
    </div>
  );
};


export const WebFPage_10 = () => {
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

  const Data = Database.page_10;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>

      <ul className={className.lists}>
        {Data.list.map((data, index) => (
          <li key={index}>
            {index === 0 ? <hr className={className.topBorder} /> : <div />}
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
                <img src={data.awardLogo} alt="" className={className.img2} />
              </div>
            </div>
            <hr className={className.bottomBorder} />
          </li>
        ))}
      </ul>

      <div className={className.buttonBox}>
        <p className={className.sidetitle}>{Data.button.sidetitle}</p>
        <Link className={className.button} to={Data.button.link}>
          {Data.button.title}
        </Link>
      </div>
    </div>
  );
}


export const WebFPage_11 = () => {
 const className = {
   container:
     "w-full space-y-10 pt-10 px-14 bg-gradient-to-t from-dark-purple to-light-creme from-80% lg:from-60% to-10% text-white",
   headerCover:
     "w-full flex flex-col md:flex-row text-dark-brown gap-5 md:items-end justify-between",
   headerBox: "space-y-2 md:space-y-5 ",
   header: "text-light-accent",
   title: "text-2xl lg:text-4xl font-bold w-fit",
   button: "bg-white py-3 px-4 md:px-7 rounded-md block w-fit font-bold",
   gridBox: "grid grid-cols-1 lg:grid-cols-3 gap-7 place-items-center",
   card: "space-y-4 h-full w-full cursor-pointer group",
   cardImg: "w-full",
   cardTitle: "font-bold text-xl md:text-2xl group-hover:underline",
   cardDate: "text-sm text-white/70",
   border: "border-dark-gray",
 };

 var Data = Database.page_11;

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
         <div
           className={className.card}
           key={index}
           onClick={() => navigateTo(data.link)}
         >
           <img src={data.img} alt="" className={className.cardImg} />
           <h4>{data.header}</h4>

           <p className={className.cardTitle}>{data.title}</p>

           <p className={className.cardDate}>{data.date}</p>
         </div>
       ))}
     </div>

      <hr className={className.border}/>
   </div>
 );
} 


export const WebFPage_12 = () => {
  const className = {
    container: "w-full pb-10 px-10",

    newsletterBar:
      "w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7 py-10  border-b border-dark-gray",
    newsTitleBox: "space-y-3",
    newsTitle: "text-xl font-bold",
    newsFormBox:
      "w-full lg:w-auto flex flex-col md:flex-row items-start md:items-center gap-5",
    newsForm:
      "w-full lg:w-auto px-5 py-3 rounded-md outline-none text-gray-500 bg-white border border-dark-creme ",
    newsSubmitForm:
      "w-full md:w-auto px-10 py-3 rounded-md shadow-sm hover:shadow-md border border-light-creme font-bold",

    gridBox:
      "w-full p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10",
    cardForm:
      "order-2 lg:order-1 p-10 space-y-5 bg-white w-[400px] rounded-md text-dark-brown",
    form: "space-y-5",
    cardTitle: "text-xl font-semibold",
    button: "px-5 py-3 font-bold rounded-md gap-4 bg-light-accent text-white",
    input:
      "p-3 text-gray-500 border border-dark-creme rounded-lg w-full outline-none",
    textBox:
      "p-3 text-gray-500 resize-none border border-dark-creme rounded-lg w-full outline-none h-[130px]",

    descriptionBox: "space-y-4 text-white order-1 lg:order-2",
    header: "text-light-accent text-lg",
    title: "text-2xl lg:text-5xl font-bold",
    subtitle: "text-white/60",
    listBox: "space-y-3 list-none",
    list: "flex items-center gap-4",
    listIcon: "p-3 rounded-full bg-light-accent text-white",
  };

  const Data = Database.page_12;

  return (
    <div className={className.container}>
      <div className={className.newsletterBar}>
        <div className={className.newsTitleBox}>
          <h1 className={className.newsTitle}>{Data.newsBar.title}</h1>

          <p>{Data.newsBar.subtitle}</p>
        </div>

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

      <div className={className.gridBox}>
        <div className={className.cardForm}>
          <h1 className={className.cardTitle}>{Data.form.title}</h1>

          <form className={className.form}>
            <input
              placeholder={Data.form.placeholder.email}
              type={"email"}
              className={className.input}
            />

            <input
              placeholder={Data.form.placeholder.subject}
              type={"text"}
              className={className.input}
            />

            <textarea
              className={className.textBox}
              placeholder={Data.form.placeholder.message}
            ></textarea>

            <button className={className.button} type={"submit"}>
              {Data.form.button}
            </button>
          </form>
        </div>

        <div className={className.descriptionBox}>
          <h4 className={className.header}>{Data.header.toUpperCase()}</h4>
          <h1 className={className.title}>{Data.title}</h1>

          <p className={className.subtitle}>{Data.subtitle}</p>

          <ul className={className.listBox}>
            {Data.list.map((data, index) => (
              <li key={index} className={className.list}>
                <div className={className.listIcon}>{data.icon}</div>
                <p>{data.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export const WebFPage_13 = () => {
  const className = {
    container: "w-full p-10 lg:p-20 bg-gradient-to-b from-dark-purple to-light-creme from-80% to-10%",
    banner: "w-full bg-light-accent rounded-lg grid grid-cols-1 md:grid-cols-2 place-items-center p-10 text-white",
    title: "text-3xl lg:text-5xl font-bold",
    button: "block w-fit px-7 py-2 rounded-lg bg-white text-dark-brown font-semibold",
    innerBox: "space-y-5 md:px-5 order-2 md:order-1",
    img: "order-1 md:order-2"
  };

  const Data = Database.page_13;

  return (
    <div className={className.container}>
      <div className={className.banner}>
        <div className={className.innerBox}>
          <h1 className={className.title}>
            {Data.title}
          </h1>
          <p>
            {Data.subtitle}
          </p>

          <Link to={Data.button.link} className={className.button}>
            {Data.button.title}
          </Link>
        </div>

        <img src={Data.img} alt="" className={className.img}/>
      </div>
    </div>
  )
}