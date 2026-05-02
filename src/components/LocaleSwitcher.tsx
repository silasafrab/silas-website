"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Nav");

  return (
    <ul className="flex gap-2 text-sm monument font-semibold">
      {routing.locales.map((code) => {
        const active = locale === code;
        const label = code === "pt" ? t("langPt") : t("langEn");
        return (
          <li key={code}>
            {active ? (
              <span
                className="inline-block opacity-100 underline underline-offset-4"
                aria-current="true"
              >
                {label}
              </span>
            ) : (
              <Link
                href={pathname}
                locale={code}
                className="inline-block opacity-40 hover:opacity-100 duration-500"
              >
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
