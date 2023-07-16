/* eslint-disable */
import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import {
  PubHPage1,
  PubHPage2,
  PubHPage3,
  PubHPage4,
  PubHPage5,
  PubHPage6,
  PubHPage7,
  PubHPage8,
  PubHPage9,
  PubHPage10,
  PubHPage11,
  PubHPage12,
  PubHPage13,
  PubHPage14,
  PubHPage15,
  PubHPage16,
} from "../Home/Public/Pages";

const PublicHome = () => {
  const className = {
    container: "w-screen h-auto font-Epilogue bg-light-creme",
    darkBox: "bg-dark-purple w-full",
  };

  return (
    <div className={className.container}>
      <Navbar title="Agency" />
      <div className={className.darkBox}>
        <PubHPage1 />
      </div>
      <PubHPage2 />
      <PubHPage3 />
      <PubHPage4 />
      <PubHPage5 />
      <div className={className.darkBox}>
        <PubHPage6 />
        <PubHPage7 />
        <PubHPage8 />
        <PubHPage9 />
      </div>
      <PubHPage10 />
      <PubHPage11 />
      <PubHPage12 />
      <PubHPage13 />
      <PubHPage14 />
      <PubHPage15 />
      <PubHPage16 />

      <Footer />
    </div>
  );
};

export default PublicHome;
