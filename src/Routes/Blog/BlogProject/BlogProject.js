/* eslint-disable */
import { Footer } from "../../../Component/Footer";
import Navbar from "../../../Component/Navbar";
import { BlogProjectPage } from "./Pages";

const BlogProject = ({ Data }) => {
  const className = {
    container: "w-screen h-auto font-Epilogue bg-light-creme",
    darkBox: "w-full bg-dark-purple text-white",
  };

  return (
    <div className={className.container}>
      <Navbar />
      <BlogProjectPage Data={Data} />
      <Footer bgTheme="light" />
    </div>
  );
};

export default BlogProject;
