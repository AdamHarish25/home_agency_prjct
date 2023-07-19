import { Link } from "react-router-dom";
import { DataStorage } from "../Data/WholeData";


export const Footer = ({bgTheme = "dark", gap = "yes"}) => {
    const className = {
      container: `${
        bgTheme === "dark" ? "bg-dark-purple text-white" : "bg-transparent"
      } w-full space-y-10 p-10 lg:p-20 ${gap === "yes" ? "mt-10" : "mt-0"}`,
      upContainer:
        "w-full grid grid-cols-1 lg:grid-cols-4 gap-10 place-items-center lg:place-items-start",
      title: `${
        bgTheme === "dark" ? "text-white" : "text-dark-brown"
      } font-bold text-xl`,
      menuBox: "flex flex-col items-center lg:items-start gap-3",
      menuTitle: "text-lg text-light-accent py-5",
      menu: "hover:underline w-fit",
      socialList: "flex items-center gap-4",
      socialIcon: "block w-fit p-4 rounded-full bg-light-accent text-white",
      downContainer:
        "py-4 border-t border-t-dark-creme flex flex-col lg:flex-row items-center gap-5 justify-between w-full",
      copyright: `${bgTheme === "dark" ? "text-white/60" : "text-gray-600/80"}`,
      policies: "flex items-center gap-5 text-gray-400",
    };

    const Data = DataStorage.footer;

    return (
      <div className={className.container}>
        <div className={className.upContainer}>
          <h1 className={className.title}>{Data.title}</h1>

          <ul className={className.menuBox}>
            <li className={className.menuTitle}>{Data.menuTitle1}</li>

            {Data.menu1.map((data, index) => (
              <li key={index} className={className.menu}>
                <Link to={data.link}>{data.title}</Link>
              </li>
            ))}
          </ul>

          <ul className={className.menuBox}>
            <li className={className.menuTitle}>{Data.menuTitle2}</li>

            {Data.menu2.map((data, index) => (
              <li key={index} className={className.menu}>
                <Link to={data.link}>{data.title}</Link>
              </li>
            ))}
          </ul>

          <ul className={className.socialList}>
            {Data.socialList.map((data, index) => (
              <li key={index}>
                <Link target={"_blank"} to={data.link} className={className.socialIcon}>
                  {data.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={className.downContainer}>
            <p className={className.copyright}>
                {Data.copyright}
            </p>

            <ul className={className.policies}>
                {Data.policies.map((data, index) => (
                    <li key={index}>
                        <Link to={data.link}>
                            {data.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    );
}