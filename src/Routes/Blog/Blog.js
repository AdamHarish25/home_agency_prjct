import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { BlogArtPage_1, BlogArtPage_2, BlogArtPage_3, BlogArtPage_4, BlogArtPage_5 } from "./Pages";

const Blog = () => {
  const className = {
    container: "w-screen h-auto font-Epilogue bg-light-creme",
    darkBox: "w-full bg-dark-purple text-white",
  };

  return (
    <div className={className.container}>
        <Navbar />
        <BlogArtPage_1 />
        <BlogArtPage_2 />
        <BlogArtPage_3 />
        <BlogArtPage_4 />
        <BlogArtPage_5 />
        <Footer bgTheme="light"/>
    </div>
  );
};

export default Blog;
