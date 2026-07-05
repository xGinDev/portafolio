import HeroMain from "@/components/Hero/HeroMain";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import { Experience } from "@/components/Experience/Experience";
import MarqueeServices from "@/components/CarrouselText/CarrouselText";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";

export default async function Index() {
  return (
    <div className="w-full flex">
      <div className="animate-in flex flex-col gap-10 opacity-0 w-full">
        <HeroMain />
        {/*         <About />
        <MarqueeServices />
        <Projects />
        <Skills />
        <Experience />
        <Contact /> */}
      </div>
    </div>
  );
}
