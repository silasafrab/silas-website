"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import BlurText from "./BlurText";

const INTERVAL_MS = 5000;

export function RotatingRoleBlur() {
  const t = useTranslations("Header");
  const roles = [t("roleFrontend"), t("roleBackend"), t("roleUx")];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % 3);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const text = roles[index];

  return (
    <BlurText
      key={text}
      text={text}
      delay={400}
      animateBy="words"
      direction="top"
      className="text-4xl  monument text-right"
    />
  );
}
