/* eslint-disable */
import FaqAccordion from "../../Component/FAQ/FaqAccordion";
import { useViewport } from "../../Component/Viewport";
import { DataStorage } from "../../Data/WholeData";

const Database = DataStorage.Contact;

export const ContactPage_1 = () => {
    const className = {
        container: "w-full grid place-items-center bg-dark-purple text-white gap-5 py-36 px-10",
        title: "text-4xl md:text-6xl font-bold",
        subtitle: "text-white/70"
    };

    const Data = Database.page_1;

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

export const ContactPage_2 = () => {
    const className = {
      container: "w-full space-y-10 pb-10 pt-10 md:pt-0",

      title: "text-xl font-semibold",
      input:
        "p-3 placeholder-gray-500 border border-dark-creme rounded-lg w-full outline-none",
      textBox:
        "p-3 placeholder-gray-500 border resize-none border-dark-creme rounded-lg w-full outline-none h-[130px]",
      button:
        "px-5 py-3 font-bold rounded-md gap-4 bg-light-accent text-white",
      map: "w-full h-[600px] border-none",
      floatingCardForm:
        "absolute right-20 top-2/4 -translate-y-2/4 p-10 space-y-5 bg-white w-[400px] rounded-md",
      form: "space-y-5",
      cardForm: "p-10 space-y-5 bg-white w-[400px] rounded-md",
      mobileFormContainer: "w-full flex flex-col items-center gap-10",
      desktopFormContainer: "w-full relative",

      infosContainer: "w-full grid grid-cols-1 md:grid-cols-3 px-10",
      infoCard: "space-y-6 py-5 px-6 lg:px-8 border border-dark-creme",
      infoTitleCard: "flex items-center gap-4",
      infoTitle: "text-lg text-light-accent font-light",
    };

    const viewport = useViewport().windowSize;

    const Data = Database.page_2;

    return (
      <div className={className.container}>
        {viewport.innerWidth >= 768 ? (
          <div className={className.desktopFormContainer}>
            {/* <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
              loadingElement={<div style={{ height: "600px" }} />}
              containerElement={<div style={{ height: "600px" }} />}
              mapElement={<div style={{ height: "600px" }} />}
              markerPosition={markerPosition}
            /> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.659934808637!2d106.99968742176348!3d-6.225955637151516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c71cf814d97%3A0xd22a5d56809f070a!2sSummarecon%20Mall%20Bekasi!5e0!3m2!1sen!2sid!4v1688612059501!5m2!1sen!2sid"
              allowFullScreen=""
              className={className.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className={className.floatingCardForm}>
              <h1 className={className.title}>{Data.title}</h1>

              <form className={className.form}>
                <input
                  placeholder={Data.form.placeholder.email}
                  type={Data.form.type.email}
                  className={className.input}
                />

                <input
                  placeholder={Data.form.placeholder.subject}
                  type={Data.form.type.subject}
                  className={className.input}
                />
                <textarea
                  className={className.textBox}
                  placeholder={Data.form.placeholder.message}
                ></textarea>

                <button className={className.button} type={"submit"}>
                  {Data.button}
                </button>
              </form>
            </div>
          </div> //Desktop View Map
        ) : (
          <div className={className.mobileFormContainer}>
            <div className={className.cardForm}>
              <h1 className={className.title}>{Data.title}</h1>

              <form className={className.form}>
                <input
                  placeholder={Data.form.placeholder.email}
                  type={Data.form.type.email}
                  className={className.input}
                />

                <input
                  placeholder={Data.form.placeholder.subject}
                  type={Data.form.type.subject}
                  className={className.input}
                />

                <textarea
                  className={className.textBox}
                  placeholder={Data.form.placeholder.message}
                ></textarea>

                <button className={className.button} type={"submit"}>
                  {Data.button}
                </button>
              </form>
            </div>

            {/* <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
              loadingElement={<div style={{ height: "600px" }} />}
              containerElement={<div style={{ height: "600px" }} />}
              mapElement={<div style={{ height: "600px" }} />}
              markerPosition={markerPosition}
            /> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.659934808637!2d106.99968742176348!3d-6.225955637151516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c71cf814d97%3A0xd22a5d56809f070a!2sSummarecon%20Mall%20Bekasi!5e0!3m2!1sen!2sid!4v1688612059501!5m2!1sen!2sid"
              allowFullScreen=""
              className={className.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> //Mobile View Map
        )}

        <div className={className.infosContainer}>
          {Data.list.map((data, index) => (
            <div key={index} className={className.infoCard}>
              <div className={className.infoTitleCard}>
                <img src={data.icon} alt="" />
                <p className={className.infoTitle}>{data.title}</p>
              </div>

              <p>{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export const ContactPage_3 = () => {
    const className = {
      container:
        "grid grid-cols-1 md:grid-cols-2 py-10 px-8 md:px-14 gap-10 w-full place-items-center",
      innerBox: "space-y-5",
      header: "text-light-accent",
      title: "text-3xl md:text-4xl font-bold",
      subtitle: "text-gray-600/70",
      faqBox: "w-full",
    };

    const Data = Database.page_3;

    return (
      <div className={className.container}>
        <div className={className.innerBox}>
          <h4 className={className.header}>{Data.header}</h4>
          <h1 className={className.title}>{Data.title}</h1>
          <p className={className.subtitle}>{Data.subtitle}</p>
        </div>

        <div className={className.faqBox}>
          <FaqAccordion faqs={Data.faqs} />
        </div>
      </div>
    );
}