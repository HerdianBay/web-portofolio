import Breakline from "../Breakline";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="pt-16 text-center">
        <h2 className="text-4xl font-bold leading-[125%] lg:text-5xl lg:leading-[130%] xl:text-6xl">
          Let's <span className="text-green">Discuss</span>
        </h2>
        <p className="text-base font-medium">
          You can reach me on my social media
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <a href="mailto:herdianbayu14@gmail.com" target="blank">
          <img src="/email.svg" alt="Email" className="h-10" />
        </a>
        <a href="https://wa.me/6281228977677" target="blank">
          <img src="/whatsapp.svg" alt="Whatsapp" className="h-10" />
        </a>
        <a href="https://www.instagram.com/herdian_bayuu27" target="blank">
          <img src="/instagram.svg" alt="Instagram" className="h-10" />
        </a>
        <a href="https://www.linkedin.com/in/mherdianbayup/" target="blank">
          <img src="/linkedin.svg" alt="Linkedin" className="h-10" />
        </a>
        <a href="https://github.com/HerdianBay" target="blank">
          <img src="/github.svg" alt="Github" className="h-10" />
        </a>
      </div>
      <Breakline />
    </section>
  );
}
