export default function Footer() {
  return (
    <footer id="footer">
      <div className="pt-16 px-5 text-center md:px-16 md:flex md:gap-10 lg:px-24 xl:justify-between xl:gap-0">
        <h2 className="text-5xl leading-[125%] font-bold lg:text-6xl lg:leading-[130%] xl:text-8xl">
          Thank<span className="text-green">you</span>
        </h2>
        <p className="mt-6 leading-[180%] text-justify md:mt-3 lg:mt-5 xl:w-1/3 xl:mt-7">
          Thank you for taking the time to visit my portfolio. I truly
          appreciate your interest in my work. If you think I could be a good
          fit for your team or project, feel free to reach out — I’m always open
          to new opportunities, collaborations, or even just a friendly chat
          about tech and development. Looking forward to what the future holds!
        </p>
      </div>
      <div className="px-5 mb-8 mt-16 flex items-center md:px-16 lg:px-24">
        <hr className="h-[1px] bg-green opacity-30 w-1/5 lg:w-2/6" />
        <p className="w-3/5 text-center text-base lg:w-2/6">
          Developed by{" "}
          <span className="font-bold">Mohammad Herdian Bayu Pratama</span>
        </p>
        <hr className="h-[1px] bg-green opacity-30 w-1/5 lg:w-2/6" />
      </div>
    </footer>
  );
}
