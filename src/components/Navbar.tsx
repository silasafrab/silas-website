import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNavDropdown } from "./MobileNavDropdown";

export async function NavBar() {
  const t = await getTranslations("Nav");

  const links = [
    { name: t("about"), hash: "about" },
    { name: t("projects"), hash: "works" },
    { name: t("contact"), hash: "contact" },
  ] as const;

  return (
    <nav className="container mx-auto px-4 py-8 flex justify-between   h-[5dvh]">
      <MobileNavDropdown
        links={links}
        ariaLabelOpen={t("openMenu")}
        ariaLabelClose={t("closeMenu")}
      />
      <ul className=" gap-10 text-xl monument font-semibold hidden md:flex">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={{ pathname: "/", hash: item.hash }}
              className="opacity-40 hover:opacity-100 duration-500"
              scroll={true}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <LocaleSwitcher />
    </nav>
  );
}
