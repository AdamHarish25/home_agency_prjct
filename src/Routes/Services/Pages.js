import { Link } from "react-router-dom";
import Accordion from "../../Component/Accordion/Accordion";
import { DataStorage } from "../../Data/WholeData";

const Database = DataStorage.Service;

export const ServicePage_1 = () => {
  const className = {
    container: "w-full space-y-5 px-10 py-36 text-center",
    title: "text-3xl lg:text-4xl font-bold",
    subtitle: "lg:px-72",
  };

  const Data = Database.page_1;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>
      <p className={className.subtitle}>{Data.subtitle}</p>
    </div>
  );
};

export const ServicePage_2 = () => {
  const className = {
    container:
      "w-full py-20 px-10 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-20",
    innerBox: "space-y-5",
    header: "text-light-accent",
    title: "text-dark-brown text-3xl lg:text-5xl font-bold",
    subtitle: "whitespace-pre-wrap text-gray-600/70 text-sm",
  };

  const Data = Database.page_2;

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <h4 className={className.header}>{Data.header}</h4>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <p className={className.subtitle}>{Data.subtitle}</p>
    </div>
  );
};

const AccordionChild = ({ header, children, icon }) => {
  <>
    <div>{icon}</div>
    <div>{header}</div>
    <div>{children}</div>
  </>;
};


export const ServicePage_3 = () => {

  const className = {
    container: "w-full space-y-5 px-10 md:px-20 py-10",
    gridBox: "w-full grid grid-cols-1 py-10 text-dark-brown lg:grid-cols-2 gap-20 place-items-start lg:place-items-center",
    innerBox: "space-y-5 text-start",
    title: "text-3xl md:text-4xl font-bold",
    subtitle: "text-gray-600/80 whitespace-pre-wrap",
    listBox: "space-y-3 list-none",
    list: "flex items-center gap-5",
    header: "text-light-accent",
    counterBox: "md:w-[50px] text-4xl md:text-6xl font-bold",
    listTitle: "text-xl font-bold"
  };

  const Data = Database.page_3;

  return (
    <div className={className.container}>
      <Accordion>
        <AccordionChild header={Data.header1.header} icon={Data.header1.icon}>
          <div className={className.gridBox}>
            <img src={Data.content1.img} alt="" />
            <div className={className.innerBox}>
              <h1 className={className.title}>{Data.content1.title}</h1>
              <p className={className.subtitle}>{Data.content1.subtitle}</p>
              <ul className={className.listBox}>
                {Data.content1.list.map((data, index) => (
                  <li key={index} className={className.list}>
                    <img src={data.img} alt="" />
                    <p>{data.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionChild>

        <AccordionChild header={Data.header2.header} icon={Data.header2.icon}>
          <div className={className.gridBox}>
            <div className={className.innerBox}>
              <h4 className={className.header}>{Data.content2.header}</h4>
              <h1 className={className.title}>{Data.content2.title}</h1>
            </div>
            <p className={className.subtitle}>{Data.content2.subtitle}</p>
          </div>
        </AccordionChild>

        <AccordionChild header={Data.header3.header} icon={Data.header3.icon}>
          <div className={className.gridBox}>
            <div className={className.innerBox}>
              <h4 className={className.header}>{Data.content3.header}</h4>
              <h1 className={className.title}>{Data.content3.title}</h1>
              <p className={className.subtitle}>{Data.content3.subtitle}</p>
            </div>
            <ul className={className.listBox}>
              {Data.content3.list.map((data, index) => (
                <li key={index} className={className.list}>
                  <div className={className.counterBox}>
                    <p>{index + 1}</p>
                  </div>
                  <h1 className={className.listTitle}>
                    {data.title}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
        </AccordionChild>
      </Accordion>
    </div>
  );
};


export const ServicePage_4 = () => {
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

    const Data = Database.page_4;

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
}