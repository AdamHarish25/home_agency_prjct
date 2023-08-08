/* eslint-disable */

import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { AbtPersonalPage_1, AbtPersonalPage_2, AbtPersonalPage_3, AbtPersonalPage_4, AbtPersonalPage_5 } from "./Personal/Pages";

const AboutPersonal = () => {
    const className = {
      container: "w-screen h-auto font-Epilogue bg-light-creme",
      darkBox: "bg-dark-purple w-full",
    };

    return(
        <div className={className.container}>
            <Navbar title="Personal"/>
            <div className={className.darkBox}>
                <AbtPersonalPage_1 />
            </div>

            <AbtPersonalPage_2 />
            <AbtPersonalPage_3 />
            <AbtPersonalPage_4 />
            <AbtPersonalPage_5 />
            <Footer bgTheme="dark" gap="no" title="Personal"/>
        </div>
    )
}

export default AboutPersonal;