import HeroMain from "@/components/Hero/HeroMain";

export default async function Index() {
  return (
    <div className="w-full flex">
      <div className="animate-in flex flex-col gap-20 opacity-0 px-3">
        <HeroMain />
      </div>
    </div>
  );
}
