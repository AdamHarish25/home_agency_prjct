import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { WebFPage_1, WebFPage_2, WebFPage_3, WebFPage_4, WebFPage_5 } from "./Pages";


export const Webflow = () => {
    const className = {
      container: "w-screen h-auto font-Epilogue bg-light-creme ",
      darkBox: "w-full bg-dark-purple text-white",
    };


    return(
        <div className={className.container}>
            <Navbar title="Webflow" />
            <div className={className.darkBox}>
                <WebFPage_1 />
                <WebFPage_2 />
                <WebFPage_3 />
            </div>

            <WebFPage_4 />

            <div className={className.darkBox}>
                <WebFPage_5 />
            </div>
            <Footer gap="yes"/>
        </div>
    )
}