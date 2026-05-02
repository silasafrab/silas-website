import { getTranslations } from "next-intl/server";

import "./footer.css";

import IconBehance from "./icons/IconBehance";
import IconCV from "./icons/IconCV";
import IconDribbble from "./icons/IconGitHub";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-4 py-8 fixed bottom-0 z-[-1] left-0 right-0 ">
      <div className=" p-1 flex items-center lg:justify-between lg:flex-row flex-col ">
        <p className="text-gray-500 mb-3 text-xs">{t("copyright", { year })}</p>

        <div className="flex gap-1 bg-gray-50 p-1 rounded-lg w-fit link-footer">
          <a href="https://www.behance.net/silasafra" target="_blank">
            <div className=" bg-black    link-btn p-3 cursor-pointer">
              <IconBehance width={24} height={24} />
            </div>
          </a>
          <a href="https://github.com/silasafra" target="_blank">
            <div className=" bg-black link-btn p-3 cursor-pointer">
              <IconDribbble width={24} height={24} />
            </div>
          </a>
          <a href="/silas_afra_CV.pdf" target="_blank">
            <div className=" bg-black  link-btn p-3 cursor-pointer">
              <IconCV width={24} height={24} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
