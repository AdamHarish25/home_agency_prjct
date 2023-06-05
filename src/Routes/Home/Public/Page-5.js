import { Link } from "react-router-dom";
import { DataStorage } from "../../../Data/WholeData";
import { useViewport } from "../../../Component/Viewport";


const PubHPage5 = () => {

    var viewport = useViewport().windowSize;

    const className = {
      container: "w-screen bg-light-creme p-10 space-y-20 font-Epilogue",
      box1: "w-full grid grid-cols-1 lg:grid-cols-2 gap-16 place-items-center text-dark-brown px-5",
      header: "text-light-accent font-light",
      title: "text-3xl md:text-4xl font-bold lg:w-80",
      paragraph: "text-dark-brown/60",
      innerBox: "space-y-8 md:px-10",
      link: "block w-fit",
      button:
        "px-5 py-2 text-dark-brown rounded-lg bg-white block w-fit text-xs font-semibold shadow-sm hover:shadow-md transition-shadow duration-200",
      outerListBox: "space-y-8 w-full px-10",
      listBox:
        "w-full h-auto grid grid-cols-1 lg:grid-cols-3 place-items-center",
      list: `w-full h-full border border-dark-creme bg-transparent space-y-7 p-12 ${
        viewport.innerWidth < 1024
          ? "last-of-type:rounded-b-lg first-of-type:rounded-t-lg"
          : "last-of-type:rounded-r-lg first-of-type:rounded-l-lg"
      }`,
      listTitle: "text-xl font-bold",
      listImg: "w-16 h-16",
      customerSect: "flex gap-4",
      customerImg: "w-12 h-12",
      customerProf: "space-y-2",
      customerQuote: "text-xs text-gray-500",
      customerName: "text-sm",
    };

    var Data = DataStorage.PublicHome.page_5;

    return(
        <div className={className.container}>
            <div className={className.box1}>
                <img src={Data.img} alt={Data.title1} />
                
                <div className={className.innerBox}>
                    <h4 className={className.header}>
                        {Data.header}
                    </h4>
                    <h1 className={className.title}>
                        {Data.title1}
                    </h1>
                    <p className={className.paragraph}>
                        {Data.subtitle}
                    </p>

                    <div className={className.customerSect}>
                        <img src={Data.customer.img} alt={Data.customer.name} className={className.customerImg}/>
                        <div className={className.customerProf}>
                            <p className={className.customerQuote}>
                                {Data.customer.quote}
                            </p>
                            <h3 className={className.customerName}>
                                {Data.customer.name}
                            </h3>
                        </div>
                    </div>

                    <Link className={className.button} to={Data.button.link}>
                        {Data.button.title}
                    </Link>
                </div>

            </div>

            <div className={className.outerListBox}>

                <h4 className={className.header}>
                    {Data.header}
                </h4>
                <h1 className={className.title}>
                    {Data.title2}
                </h1>

                <div className={className.listBox}>
                    {Data.list.map((data, index) => (
                        <div key={index} className={className.list}>
                            <img src={data.img} alt={data.title} className={className.listImg}/>

                            <h1 className={className.listTitle}>
                                {data.title}
                            </h1>
                            <p className={className.customerQuote}>
                                {data.subtitle}
                            </p>

                            <Link to={data.buttonLink} className={className.link}>
                                {data.buttonTitle}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PubHPage5;