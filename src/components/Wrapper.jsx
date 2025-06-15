import { useState } from "react";
import Popup from "./Popup";

export default function Wrapper({ data }) {
  const { image, name, year, type } = data;
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      {isClick && <Popup data={data} onClose={handleClick} />}
      {type === "Web" ? (
        <div className="mb-8">
          <button className="w-full" onClick={handleClick}>
            <img
              src={image}
              alt=""
              className="rounded-lg object-center object-cover h-60 w-full lg:h-96"
            />
          </button>
          <h3 className="ml-4 mt-4 text-start font-semibold text-xl">{name}</h3>
          <p className="ml-4 text-start">{year}</p>
          <hr className="bg-green opacity-30 mt-3 h-[1px]" />
        </div>
      ) : (
        <div className="mb-8">
          <button onClick={handleClick}>
            <img
              src={image}
              alt=""
              className="rounded-lg object-center object-cover h-60 lg:h-96"
            />
          </button>
          <h3 className="ml-4 mt-4 text-start font-semibold text-xl">{name}</h3>
          <p className="ml-4 text-start">{year}</p>
          <hr className="bg-green opacity-30 mt-3 h-[1px]" />
        </div>
      )}
    </>
  );
}
