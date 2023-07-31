import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { WebFPage_1, WebFPage_10, WebFPage_11, WebFPage_12, WebFPage_13, WebFPage_2, WebFPage_3, WebFPage_4, WebFPage_5, WebFPage_6, WebFPage_7, WebFPage_8, WebFPage_9 } from "./Pages";


export const Webflow = () => {
    const className = {
      container: "w-screen h-auto font-Epilogue bg-light-creme ",
      darkBox: "w-full bg-dark-purple text-white",
    };


    return (
      <div className={className.container}>
        <Navbar title="Webflow" />
        <div className={className.darkBox}>
          <WebFPage_1 />
          <WebFPage_2 />
        </div>
        <WebFPage_3 />
        <WebFPage_4 />

        <WebFPage_5 />
        <div className={className.darkBox}>
          <WebFPage_6 />
          <WebFPage_7 />
        </div>

        <WebFPage_8 />
        <WebFPage_9 />
        <WebFPage_10 />
        <WebFPage_11 />
        
        <div className={className.darkBox}>
          <WebFPage_12 />
          <WebFPage_13 />
        </div>
        <Footer gap="no" title="Webflow" bgTheme="white" />
      </div>
    );
}