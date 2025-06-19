import Breakline from "../Breakline";
import Button from "../Button";

export default function AboutMe() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1ckGPRrUA3WrPv9kJMWE8mtQKHsxpC34R/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <section id="aboutme" className="scroll-mt-16">
        <div className="pt-16 text-center">
          <h2 className="text-center text-4xl font-bold lg:text-5xl lg:leading-[130%] xl:text-6xl">
            About <span className="text-green">Me</span>
          </h2>
          <p className="mt-6 text-justify leading-7 lg:w-1/2 lg:mx-auto lg:leading-[180%] ">
            Hi! I'm Mohammad Herdian Bayu Pratama, a fresh graduate in
            Information Technology from Universitas Brawijaya with a strong
            interest in front-end and Android development. While I haven’t had
            full-time or internship experience yet, I’ve worked on several
            simple freelance projects where I applied React to build responsive
            and functional web interfaces. In addition to client work, I also
            regularly challenge myself by doing UI slicing on my own to sharpen
            my skills and explore new techniques. I enjoy turning ideas into
            clean, user-friendly digital experiences, and I’m currently looking
            for opportunities where I can grow as a developer and contribute to
            meaningful web or mobile projects. Beyond that, I have a genuine
            passion for staying up-to-date with the latest trends in front-end
            and Android technology. I find great excitement in discovering new
            tools, frameworks, and best practices in the ever-evolving tech
            landscape.
          </p>
          <div className="mt-8 flex justify-center">
            <Button style={`bg-blue text-white`} onClick={handleClick}>
              Download Curriculum Vitae
            </Button>
          </div>
        </div>
        <Breakline />
      </section>
    </>
  );
}
