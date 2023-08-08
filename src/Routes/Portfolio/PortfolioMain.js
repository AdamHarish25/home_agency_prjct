import { Footer } from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { PortfolioMPage_1, PortfolioMPage_2, PortfolioMPage_3 } from "./Pages";

const PortfolioMain = () => {
    const className = {
      container: "w-screen h-auto font-Epilogue bg-light-creme",
      darkBox: "w-full bg-dark-purple text-white",
      
    };

    return( 
        <div className={className.container}>
             <Navbar/>
             <div className={className.darkBox}>
                <PortfolioMPage_1 />
             </div>

             <PortfolioMPage_2 />
             <PortfolioMPage_3 />

             <Footer bgTheme="light"/>
        </div>
    )
}

export default PortfolioMain;