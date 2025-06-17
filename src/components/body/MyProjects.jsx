import { useState } from "react";
import { getAllData } from "../../utils/data";
import Wrapper from "../Wrapper";
import Button from "../Button";

export default function MyProjects() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(getAllData);
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadData = () => {
    setVisibleCount((prev) => prev + 2);
  };
  const isAllDataVisible = visibleCount >= data.length;

  return (
    <section id="myprojects" className="scroll-mt-16 text-center mb-16">
      <div className="pt-16">
        <h2 className="text-4xl leading-[125%] font-bold lg:text-5xl lg:leading-[130%] xl:text-6xl">
          My <span className="text-green">Projects</span>
        </h2>
        <p className="mt-6 leading-[180%] lg:w-1/2 lg:mx-auto">
          Here are some of the projects I’ve worked on — including freelance
          work and personal explorations. Most of these projects are relatively
          simple in scope, but they’ve allowed me to apply core concepts of
          front-end and Android development using tools like React and Kotlin.
          Through each project, I’ve gained valuable hands-on experience in
          turning ideas into functional interfaces, working with components,
          managing layouts, and implementing responsive designs. These
          experiences have helped me grow as a developer and deepened my
          understanding
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-4">
        {data.slice(0, visibleCount).map((d, i) => (
          <Wrapper key={i} data={d} />
        ))}
      </div>
      {!isAllDataVisible && (
        <Button style={`border-2 border-black`} onClick={handleLoadData}>
          Load More
        </Button>
      )}
    </section>
  );
}
