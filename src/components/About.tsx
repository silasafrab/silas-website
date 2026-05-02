import { getTranslations } from "next-intl/server";

import BlurText from "./BlurText";

export async function About() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="overflow-hidden bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full  h-full flex justify-between container  ">
        <div className="w-[1px] h-full bg-slate-400/20"></div>
        <div className="w-[1px] h-full bg-slate-400/20"></div>
        <div className="w-[1px] h-full bg-slate-400/20"></div>
        <div className="w-[1px] h-full bg-slate-400/20"></div>
        <div className="w-[1px] h-full bg-slate-400/20"></div>
        <div className="w-[1px] h-full bg-slate-400/20"></div>
        <div className="w-[1px] h-full bg-slate-400/20"></div>
        <div className="w-[1px] h-full bg-slate-400/20"></div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center relative w-full">
          <div className=" w-full mb-10">
            <BlurText
              as="h2"
              text={t("title")}
              delay={100}
              animateBy="words"
              direction="top"
              className="w-full text-3xl md:text-4xl text-center text-black mb-5 justify-center"
            />
          </div>

          <div className="max-w-3xl">
            <p className=" lg:text-lg text-xs  font-normal  text-gray-700 ">
              {t("p1")}
              <br />
              <br />
              {t("p2")}
              <br />
              <br />
              {t("p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
