import Breakline from "../Breakline";
import Button from "../Button";

export default function Introduction() {
  return (
    <>
      <section id="introduction">
        <div className="md:flex items-center justify-center gap-2 lg:gap-5">
          <div className="md:w-1/2">
            <h1 className="font-bold text-5xl leading-16 lg:text-6xl lg:leading-[150%] xl:text-8xl">
              Hey there! I'm <span className="text-green">Herdian</span>,
            </h1>
            <p className="mt-6 font-medium leading-7 lg:text-xl lg:leading-[160%] xl:text-2xl">
              A Junior Front-End & Android Developer from Salatiga, Indonesia
            </p>
            <div className="mt-10 flex gap-2.5">
              <Button style={`bg-blue text-white`} id={"#myprojects"}>
                My Projects
              </Button>
              <Button style={`border-2 border-black`} id={"#contact"}>
                Contact Me
              </Button>
            </div>
          </div>
          <div className="mt-16 -mx-5 md:mt-0 md:w-3/5 lg:w-4/5 xl:w-1/2">
            <img
              src="/Pic.png"
              alt="Profile Picture"
              className="lg:w-5/6 lg:ml-auto"
            />
          </div>
        </div>
        <Breakline />
      </section>
    </>
  );
}
