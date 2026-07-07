"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  variant?: "solid" | "muted";
}

function ParallaxText({ children, baseVelocity = 100, variant = "solid" }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 3000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="overflow-hidden whitespace-nowrap flex"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        aria-hidden="true"
        className={cn(
          bebas.className,
          "uppercase flex whitespace-nowrap items-baseline",
          "text-[32px] sm:text-[42px] lg:text-[56px]",
          "tracking-wide leading-none",
          variant === "solid" ? "text-foreground" : "text-muted-foreground"
        )}
        style={{ x }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex items-baseline">
            {children}
            <span className="text-accent mx-8 text-[0.5em] tracking-normal">
              //
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="relative w-full border-y border-border py-5 flex flex-col gap-1 bg-secondary/40">
      <ParallaxText baseVelocity={-5} variant="solid">
        React — Next.js — TypeScript — TailwindCSS — ReactNative — CSS
      </ParallaxText>
      <ParallaxText baseVelocity={5} variant="muted">
        Git — VTEX — Figma — Shopify — Expo — Scrum
      </ParallaxText>
    </section>
  );
}