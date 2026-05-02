"use client";
import "./portfolio.css";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import AnimatedContent from "./AnimatedContent";
import BlurText from "./BlurText";

/** Desktop: texto sobe suavemente; mobile igual à coluna (de cima para baixo). */
const PORT_ROW_BODY_MD = {
    distance: 32,
    direction: "vertical" as const,
    reverse: false,
};

const PORT_ROW_MEDIA_MD = {
    distance: 72,
    direction: "horizontal" as const,
    reverse: true,
};

const WORK_META = [
    {
        link: "https://www.koinoniaone.com",
        img: "/img_feature_01.png",
    },
    {
        link: "https://menuplusapp.com/",
        img: "/img_feature_02.png",
    },
    {
        link: "https://www.onairparking.com/",
        img: "/img_feature_03.png",
    },
    {
        link: "https://www.blippy.com.br/",
        img: "/img_feature_04.png",
    },
    {
        link: "https://telecarga.com.br/",
        img: "/img_feature_05.png",
    },
    {
        link: "https://www.fhopstore.com/",
        img: "/img_feature_06.png",
    },
    {
        link: "https://www.capef.com.br/",
        img: "/img_feature_07.png",
    },
] as const;

type PortfolioItem = { name: string; description: string };

export const Portfolio = () => {
    const t = useTranslations("Portfolio");
    const items = t.raw("items") as PortfolioItem[];

    const viewLabel = t("viewProject");

    return (
        <section className="relative overflow-x-clip" id="works">
            <div className="container mx-auto px-4 py-24 ">
                <div className="flex justify-between flex-col md:flex-row  w-full gap-2">
                    <div className="">
                        <BlurText
                            as="h2"
                            text={t("title")}
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="w-full text-4xl"
                        />
                    </div>
                    <BlurText
                        text={t("intro")}
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="max-w-md w-full text-left md:text-right md:ml-auto opacity-50"
                    />
                </div>
                <div className="mt-20">
                    {items.map((item, index) => {
                        const meta = WORK_META[index];
                        if (!meta) return null;
                        return (
                            <div
                                key={item.name}
                                className="w-full border-t group border-black/20 py-10 bg-white sticky top-0"
                            >
                                <div className="flex flex-col md:flex-row gap-5 justify-between md:items-start">
                                    <div className="w-40 shrink-0  group-hover:pl-10 duration-300">
                                        <BlurText
                                            as="span"
                                            text={item.name}
                                            delay={100}
                                            animateBy="words"
                                            direction="top"
                                            className="monument text-lg"
                                        />
                                    </div>

                                    <AnimatedContent
                                        className="max-w-md w-full flex-1 min-w-0"
                                        scrollStart="top bottom"
                                        duration={0.82}
                                        ease="power3.out"
                                        delay={0.06}
                                        initialOpacity={0}
                                        distance={36}
                                        direction="vertical"
                                        reverse
                                        scale={1}
                                        mdOverrides={PORT_ROW_BODY_MD}
                                    >
                                        <p className="opacity-50 mb-10">{item.description}</p>
                                        <Link
                                            href={meta.link}
                                            target="_blank"
                                            className="underline hidden md:block"
                                        >
                                            {viewLabel}
                                        </Link>
                                    </AnimatedContent>

                                    <AnimatedContent
                                        className="w-full shrink-0 md:w-auto md:max-w-[368px] group-hover:pr-10 duration-300"
                                        scrollStart="top bottom"
                                        duration={0.85}
                                        ease="power3.out"
                                        delay={0.12}
                                        initialOpacity={0}
                                        distance={44}
                                        direction="vertical"
                                        reverse
                                        scale={1}
                                        mdOverrides={PORT_ROW_MEDIA_MD}
                                    >
                                        <Image
                                            src={meta.img}
                                            width={368}
                                            height={206}
                                            alt={item.name}
                                            className="w-full h-auto max-w-[368px] ml-auto md:ml-0 block"
                                        />
                                        <div className="mt-4 w-full flex md:hidden justify-end">
                                            <Link
                                                href={meta.link}
                                                target="_blank"
                                                className="underline"
                                            >
                                                {viewLabel}
                                            </Link>
                                        </div>
                                    </AnimatedContent>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
