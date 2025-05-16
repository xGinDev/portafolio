import HeroMain from "@/components/Hero/HeroMain";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default async function Index() {
  return (
    <div className="w-full flex md:max-w-7xl md:mx-auto">
      <div className="animate-in flex flex-col gap-10 opacity-0 px-3">
        <HeroMain />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
