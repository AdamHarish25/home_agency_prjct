import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { ServicePage_1, ServicePage_2, ServicePage_3, ServicePage_4 } from "./Pages";

const Service = () => {
    const className = {
      container: "w-screen h-auto font-Epilogue bg-light-creme",
      darkBox: "w-full bg-dark-purple text-white",
    };

    return (
      <div className={className.container}>
        <Navbar />
        <div className={className.darkBox}>
          <ServicePage_1 />
        </div>
        <ServicePage_2 />
        <ServicePage_3 />
        <ServicePage_4 />

        <Footer bgTheme="light" gap="yes"/>
      </div>
    );
}


export default Service;