/* eslint-disable */
import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { ContactPage_1, ContactPage_2, ContactPage_3 } from "./Pages";

const ContactPages = () => {
  const className = {
    container: "w-screen h-auto font-Epilogue bg-light-creme",
    darkBox: "bg-dark-purple w-full",
  };

  return (
    <div className={className.container}>
      <Navbar />
      <ContactPage_1 />
      <ContactPage_2 />
      <ContactPage_3 />
      <Footer bgTheme="light" />
    </div>
  );
};

export default ContactPages;
