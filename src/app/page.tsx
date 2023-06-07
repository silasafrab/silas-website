import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
