import { Link } from "react-router-dom";
import { DataStorage } from "../../../Data/WholeData";
import { useViewport } from "../../../Component/Viewport";

const PubHPage3 = () => {

  var viewport = useViewport().windowSize;

  const className = {
    container:
      "w-screen bg-light-creme h-auto px-10 py-20 border-b border-b-dark-creme space-y-20 font-Epilogue",
    box1: "w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center text-dark-brown",
    innerBox: "space-y-7 px-10",
    header: "text-light-accent font-light",
    title: "text-3xl md:text-5xl font-bold",
    sub: "text-lg",
    paragraph: "text-dark-brown/60",
    button1:
      "px-5 py-2 text-dark-brown rounded-lg bg-white block w-fit text-xs font-semibold shadow-sm hover:shadow-md transition-shadow duration-200",
    list1Box: "w-full px-10 grid grid-cols-1 lg:grid-cols-3 list-none",
    list1: `w-full h-full border border-dark-creme space-y-3 p-10 ${
      viewport.innerWidth < 1025
        ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
        : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
    }`,
    list1Count: "font-bold text-3xl",
    list2Box: "space-y-8 list-none lg:w-fit w-full px-10 lg:px-0",
    list2: "flex items-center gap-8",
    list2Count: "w-10 text-5xl font-bold text-center",
    list2Title: "font-semibold",
  };

  var Data = DataStorage.PublicHome.page_3;

  return (
    <div className={className.container}>
      <div className={className.box1}>
        <img src={Data.img} alt={Data.header1} />
        <div className={className.innerBox}>
          <h3 className={className.header}>{Data.header1}</h3>
          <h1 className={className.title}>{Data.title1}</h1>
          <h4 className={className.sub}>{Data.sub}</h4>
          <p className={className.paragraph}>{Data.paragraph1}</p>

          <Link to={Data.button1.link} className={className.button1}>
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
          <h3 className={className.header}>{Data.header2}</h3>
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
    </div>
  );
};

export default PubHPage3;
