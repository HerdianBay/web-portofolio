export default function Popup({ data, onClose }) {
  const { name, image, technology, year, link, type } = data;
  console.log(link);
  return (
    <div className="fixed inset-0 bg-[#FFFFFF88] z-20">
      <div className="px-5 flex items-center h-screen md:px-16 lg:px-24">
        <div className="bg-white w-full rounded-lg shadow-md px-2 pt-12 pb-4 relative md:px-4 lg:px-10">
          <button
            className="text-black absolute top-4 right-4"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="max-h-[75vh] overflow-y-auto">
            <h2 className="text-start font-semibold text-2xl mb-3">{name}</h2>
            <div className="md:flex gap-5 lg:gap-8 xl:gap-10">
              {type === "Web" ? (
                <img
                  src={image}
                  alt=""
                  className="rounded-lg w-full h-fit md:w-1/2"
                />
              ) : (
                <img
                  src={image}
                  alt=""
                  className="rounded-lg w-full h-fit md:w-1/2 md:-mt-7 lg:-mt-9 xl:-mt-14"
                />
              )}

              <div className="mt-12 md:mt-0 w-full">
                <div>
                  <h2 className="text-start font-semibold text-xl mb-2">
                    Technology
                  </h2>
                  <div className="flex pl-5 gap-5 mt-3">
                    {technology.map((d, i) => (
                      <img src={d} alt="" key={i} className="h-6 xl:h-8" />
                    ))}
                  </div>
                  <hr className="h-[1px] bg-green opacity-30 mt-6" />
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <h2 className="text-start font-semibold text-xl">Year</h2>
                    <p className="ml-5 mt-[3px]">{year}</p>
                  </div>
                  <hr className="h-[1px] bg-green opacity-30 mt-6" />
                </div>
                <div className="mt-6">
                  <div className="flex text-start">
                    <h2 className="font-semibold text-xl">Link</h2>
                    <a
                      href={link}
                      className="ml-5 mt-[3px] break-all"
                      target="blank"
                    >
                      {link}
                    </a>
                  </div>
                  <hr className="h-[1px] bg-green opacity-30 mt-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
