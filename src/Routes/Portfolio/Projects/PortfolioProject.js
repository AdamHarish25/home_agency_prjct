import { Footer } from "../../../Component/Footer";
import Navbar from "../../../Component/Navbar";
import { PortfolioPrPage } from "./Pages";

const PortfolioProject = ({Data}) => {
    const className = {
      container: "w-screen h-auto font-Epilogue bg-light-creme",
      darkBox: "w-full bg-dark-purple text-white",
    };

    return (
        <div className={className.container}>
            <Navbar/>
            <PortfolioPrPage Data={Data}/>
            <Footer bgTheme="light"/>
        </div>
    )
}

export default PortfolioProject;