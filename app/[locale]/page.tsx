import dynamic from "next/dynamic";

const HeroMain = dynamic(() => import("@/components/Hero/HeroMain"), {
  loading: () => <div className="h-screen" />,
});

const Projects = dynamic(() => import("@/components/Projects/Projects"), {
  loading: () => <div className="h-96" />,
});

const Skills = dynamic(() => import("@/components/Skills/Skills"), {
  loading: () => <div className="h-96" />,
});

const MarqueeServices = dynamic(
  () => import("@/components/CarrouselText/CarrouselText"),
  { loading: () => <div className="h-20" /> }
);

const About = dynamic(() => import("@/components/About/About").then(m => ({ default: m.About })), {
  loading: () => <div className="h-96" />,
});

export default async function Index() {
  return (
    <div className="w-full flex">
      <div className="animate-in flex flex-col gap-4 lg:gap-8 opacity-0 w-full">
        <HeroMain />
        <MarqueeServices />
        <About />
        <Skills />
        <Projects />
        {/*
        
        
        <Contact /> */}
      </div>
    </div>
  );
}
