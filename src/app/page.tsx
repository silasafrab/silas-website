import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

/** Rota `/` explícita: evita bug de HMR do Turbopack com árvore só `[locale]`. */
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
