import PubHPage1 from "./Public/Page-1";
import PubHPage2 from "./Public/Page-2";
import PubHPage3 from "./Public/Page-3";


const PublicHome = () => {
    const className = {
        container: "w-screen h-auto"
    }

    return (
        <div className={className.container}>
            <PubHPage1 />
            <PubHPage2 />
            <PubHPage3 />
        </div>
    );
}

export default PublicHome;