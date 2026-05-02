import { setRequestLocale } from "next-intl/server";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="bg-white">
        <NavBar />
        <Header />
        <About />

        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
