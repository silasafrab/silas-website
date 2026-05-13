import type { ReactNode } from "react";
//import { Analytics } from "@vercel/analytics/next"

/** Root layout só repassa árvore; idioma em `app/[locale]/layout.tsx` (next-intl). */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
