import { getTranslations } from "next-intl/server";

import BlurText from "./BlurText";
import IconLinkedin from "./icons/IconLinkedin";
import Waves from "./waves/Waves";
import IconTelegram from "./icons/IconTelegram";
import IconWhatsapp from "./icons/IconWhatsapp";

export async function Contact() {
  const t = await getTranslations("Contact");
  const mailtoHref = `mailto:silasafra@gmail.com?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(t("emailBody"))}`;

  return (
    <section id="contact" className="relative bg-black mb-40 lg:mb-32 overflow-hidden">
      <Waves
        className="z-0"
        lineColor="rgba(255, 255, 255, 0.13)"
        backgroundColor="transparent"
        waveSpeedX={0.012}
        waveSpeedY={0.0045}
        waveAmpX={28}
        waveAmpY={14}
        xGap={11}
        yGap={30}
      />
      <div className="relative z-10 container mx-auto px-4 py-56 h-[90vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-10 ">
            <BlurText
              text={t("heading")}
              delay={100}
              animateBy="words"
              direction="top"
              className="text-lg font-bold text-gray-400 mb-3 text-center justify-center"
            />
            <a href={mailtoHref} className="group block w-full cursor-pointer">
              <BlurText
                as="span"
                text="silasfra@gmail.com"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-lg lg:text-5xl md:text-2xl text-gray-50 mb-5 text-center justify-center w-full transition-all ease-in-out duration-300 group-hover:tracking-widest"
              />
            </a>
          </div>

          <div className="flex gap-1 bg-white/10 p-1  w-fit m-auto link-footer">
            <div className="font-bold text-gray-50  p-3  ">{t("cta")}</div>
            <a href="https://wa.me/5573988878903" target="_blank">
              <div className=" bg-black  hover:bg-black/70 link-btn p-3 cursor-pointer">
                <IconWhatsapp width={24} height={24} />
              </div>
            </a>
            <div className=" bg-black  hover:bg-black/80 link-btn p-3 cursor-pointer">
              <IconTelegram width={24} height={24} />
            </div>
            <a href="https://www.linkedin.com/in/silasafra/" target="_blank">
              <div className=" bg-black  hover:bg-black/80 link-btn p-3 cursor-pointer">
                <IconLinkedin width={24} height={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
