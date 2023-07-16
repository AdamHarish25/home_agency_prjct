/* eslint-disable */
import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import {
  PersHome_1,
  PersHome_2,
  PersHome_3,
  PersHome_4,
  PersHome_5,
  PersHome_6,
  PersHome_7,
  PersHome_8,
} from "./Personal/Pages";

const PersonalHome = () => {
  const className = {
    container: "w-screen h-auto font-Epilogue bg-light-creme",
    darkBox: "bg-dark-purple w-full",
  };

  return (
    <div className={className.container}>
      <Navbar title="Personal" />
      <div className={className.darkBox}>
        <PersHome_1 />
      </div>

      <PersHome_2 />

      <div className={className.darkBox}>
        <PersHome_3 />
      </div>

      <PersHome_4 />
      <PersHome_5 />
      <PersHome_6 />

      <div className={className.darkBox}>
        <PersHome_7/>
      </div>

      <PersHome_8 />

      <Footer bgTheme="dark" />
    </div>
  );
};

export default PersonalHome;
