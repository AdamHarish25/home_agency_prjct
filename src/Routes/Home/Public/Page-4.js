import VideoPlayer from "../../../Component/VideoPlayer";
import { DataStorage } from "../../../Data/WholeData";

const PubHPage4 = () => {
    const className = {
      container:
        "w-screen bg-light-creme h-auto px-10 py-20 border-b border-b-dark-creme space-y-20 font-Epilogue",
      box1: "w-full grid grid-cols-1 lg:grid-cols-2 gap-16 place-items-center text-dark-brown",
      header: "text-light-accent font-light",
      title: "text-3xl md:text-4xl font-bold",
      paragraph: "text-dark-brown/60",
      videoPlayer: "w-full h-full",
      innerBox: "space-y-5",
      listVertical: "space-y-4 list-none ",
      listVerticalChild: "flex items-center gap-5 font-light text-dark-brown"
    };

    var Data = DataStorage.PublicHome.page_4;


    return (
        <div className={className.container}>
            <div className={className.box1}>
                <VideoPlayer src={Data.video} size={className.videoPlayer}/>
                <div className={className.innerBox}>
                    <h4 className={className.header}>
                        {Data.header1}
                    </h4>
                    <h1 className={className.title}>
                        {Data.title1}
                    </h1>
                    <p className={className.paragraph}>
                      {Data.subtitle1}  
                    </p>
                </div>
            </div>
            
            <div className={className.box1}>
                <div className={className.innerBox}>
                     <h4 className={className.header}>
                        {Data.header2}
                     </h4>
                     <h1 className={className.title}>
                        {Data.title2}
                     </h1>
                     <p className={className.paragraph}>
                        {Data.subtitle2}
                     </p>
                     <ul className={className.listVertical}>
                        {Data.list1.map((data, index) => (
                            <li key={index} className={className.listVerticalChild}>
                                <img src={data.dot} alt={data.title} />
                                <p>
                                    {data.title}
                                </p>
                            </li>
                        ))}
                     </ul>
                </div>
                
                <img src={Data.img} alt="vector#4"/>
            </div>
        </div>
    )
}

export default PubHPage4;