/* eslint-disable */
import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import {
  AbtAgencyPage_1,
  AbtAgencyPage_2,
  AbtAgencyPage_3,
  AbtAgencyPage_4,
  AbtAgencyPage_5,
  AbtAgencyPage_6,
  AbtAgencyPage_7,
} from "./Agency/Pages";

const AboutAgency = () => {
  const className = {
    container: "w-screen h-auto font-Epilogue bg-light-creme",
    darkBox: "bg-dark-purple w-full",
  };

  return (
    <div className={className.container}>
      <Navbar title="Agency" />
      <div className={className.darkBox}>
        <AbtAgencyPage_1 />
      </div>
      <AbtAgencyPage_2 />
      <AbtAgencyPage_3 />

      <div className={className.darkBox}>
        <AbtAgencyPage_4 />
        <AbtAgencyPage_5 />
        <AbtAgencyPage_6 />
        <AbtAgencyPage_7 />
      </div>

      <Footer bgTheme="light"/>
    </div>
  );
};


export default AboutAgency