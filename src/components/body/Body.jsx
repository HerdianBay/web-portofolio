import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Introduction from "./Introduction";
import MyProjects from "./MyProjects";
import MySkill from "./MySkill";

export default function Body() {
  return (
    <main className="pt-[84px] px-5 md:px-16 lg:px-24 lg:pt-28">
      <Introduction />
      <AboutMe />
      <MySkill />
      <MyProjects />
      <Contact />
    </main>
  );
}
