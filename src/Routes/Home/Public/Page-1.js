import { DataStorage } from "../../../Data/WholeData";

const PubHPage1 = () => {
    const className = {
      container:
        "w-screen h-auto py-32 px-10 xl:px-20 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 bg-dark-purple font-Epilogue",
      img: "order-1 lg:order-2",
      paragraphBox:
        "h-full flex flex-col justify-center items-center gap-16 w-full relative px-0 xl:px-20 order-2 lg:order-1",
      innerPBox: "space-y-8 text-white",
      header: "text-light-accent",
      title:
        "font-bold text-5xl lg:text-[58px] leading-tight bg-6-sides-star bg-no-repeat bg-contain bg-left-top",
      subtitle: "text-gray-400",
      buttonBox: "flex items-center gap-3",
      button1: "px-5 py-2 rounded-lg bg-light-accent text-white font-medium",
      button2: "px-5",
      feedbackBox: "flex items-center justify-start w-full gap-5",
      fbImg: "w-10",
      feedback: "space-y-2",
      fbCompany: "text-white",
    };

    const Data = DataStorage.PublicHome.page_1

    return (
      <div className={className.container}>
        <div className={className.paragraphBox}>
          <div className={className.innerPBox}>
            <h3 className={className.header}>{Data.header}</h3>
            <h1 className={className.title}>{Data.title}</h1>
            <p className={className.subtitle}>
                {Data.subtitle}
            </p>
            <div className={className.buttonBox}>
                <button className={className.button1}>
                    {Data.button1}
                </button>
                <button className={className.button2}>
                    {Data.button2}
                </button>
            </div>
          </div>

          <div className={className.feedbackBox}>
            <img className={className.fbImg} src={Data.companyPic} alt="company logo"/>

            <div className={className.feedback}>
                <p className={className.subtitle}>
                    {Data.companyFeedback}
                </p>

                <p className={className.fbCompany}>
                    {Data.companyName}
                </p>
            </div>
          </div>
        </div>

        <img src={Data.img} alt="img" className={className.img}/>
      </div>
    );
    
}

export default PubHPage1;