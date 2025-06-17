import Breakline from "../Breakline";
import Image from "../Image";

export default function MySkill() {
  return (
    <section id="myskill">
      <div className="pt-16 text-center">
        <h2 className="text-4xl leading-[125%] font-bold lg:text-5xl lg:leading-[130%] xl:text-6xl">
          My <span className="text-green">Skill On</span>
        </h2>
        <p className="text-base font-medium lg:w-1/2 lg:mx-auto lg:leading-[180%]">
          Technology that i have tried
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        <Image source="/figma.png" alt="Figma Icon" />
        <Image source="/react.png" alt="React Icon" />
        <Image source="/tailwind.png" alt="Tailwind Icon" />
        <Image source="/kotlin.png" alt="Kotlin Icon" />
        <Image source="/android-studio.png" alt="Android Studio Icon" />
        <Image source="/node-js.png" alt="Kotlin Icon" />
        <Image source="/mysql.png" alt="Mysql Icon" />
      </div>
      <Breakline />
    </section>
  );
}
