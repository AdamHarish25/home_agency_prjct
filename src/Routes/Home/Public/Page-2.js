import { useViewport } from "../../../Component/Viewport";
import { DataStorage } from "../../../Data/WholeData";


const PubHPage2 = () => {

    const className = {
      container: "w-screen h-auto p-10 grid place-items-center bg-light-creme",
      listBox: "flex items-center py-10 w-fit justify-center gap-20 list-none",
      verticalListBox:
        "flex flex-col items-center border-b border-b-dark-creme",
    };

    const Data = DataStorage.PublicHome.page_2;
    const Viewport = useViewport().windowSize;

    return (
      <div className={className.container}>
        {Viewport.innerWidth < 1025 ? (
          <div className={className.verticalListBox}>
            <ul className={className.listBox}>
              {Data.slice(0, 2).map((data, index) => (
                <li key={index}>
                  <img src={data.img} alt={data.title} />
                </li>
              ))}
            </ul>
            <ul className={className.listBox}>
              {Data.slice(2, 4).map((data, index) => (
                <li key={index}>
                  <img src={data.img} alt={data.title} />
                </li>
              ))}
            </ul>
            <ul className={className.listBox}>
              {Data.slice(4, 5).map((data, index) => (
                <li key={index}>
                  <img src={data.img} alt={data.title} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className={`${className.listBox} border-b border-b-dark-creme`}>
            {Data.map((data, index) => (
              <li key={index}>
                <img src={data.img} alt={data.title} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default PubHPage2;