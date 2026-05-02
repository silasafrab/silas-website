import { getTranslations } from "next-intl/server";

import BlurText from "./BlurText";
import { HeroPortrait } from "./HeroPortrait";
import { RotatingRoleBlur } from "./RotatingRoleBlur";

export async function Header() {
    const t = await getTranslations("Header");

    return (
        <header
            id="header"
            className="flex content-center   hero relative overflow-hidden"
        >
            <div className="container mx-auto px-4 py-8 relative flex items-start justify-center flex-col z-10">
                <BlurText
                    text={t("greeting")}
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="lg:text-2xl monument"
                />
                <div className="flex justify-between flex-col md:flex-row  w-full gap-2">
                    <div className="">
                        <BlurText
                            text="Silas Afra"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            className="text-6xl mb-8 monument"
                        />
                    </div>
                    <div className="max-w-md text-left  md:text-right opacity-50">
                        <BlurText
                            text={t("tagline")}
                            delay={300}
                            animateBy="words"
                            direction="top"
                            className="text-lg "
                        />
                    </div>
                </div>
                <div className=" w-full mt-4 md:mt-0">
                    <HeroPortrait />
                </div>
                <div className=" w-full flex justify-end">
                    <RotatingRoleBlur />
                </div>
            </div>
        </header>
    );
}
