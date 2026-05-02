"use client";

import Image, { type StaticImageData } from "next/image";

import AnimatedContent from "./AnimatedContent";
import silas from "./silas.png";

const portrait = silas as StaticImageData;

export function HeroPortrait() {
  const { width, height } = portrait;

  return (
    <AnimatedContent
      className="w-full origin-center"
      distance={0}
      direction="vertical"
      scale={0}
      duration={1.05}
      ease="power3.out"
      delay={0.08}
      initialOpacity={0}
      scrollStart="top bottom"
    >
      <div
        className="relative w-full max-h-[150px] md:max-h-[300px] lg:max-h-[500px] overflow-hidden "
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={silas}
          alt="Silas Afra"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 992px"
          priority
          draggable={false}
        />
      </div>
    </AnimatedContent>
  );
}
