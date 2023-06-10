import { NavMenu } from './NavMenu';
import Link from 'next/link';
import DesignerStroke from './icons/DesignerStroke';
import FreelancerStroke from './icons/FreelancerStroke';
import DeveloperStroke from './icons/DeveloperStroke';
import ArrowUpRight from './icons/ArrowUpRight';

export const Header = () => {
  return (
    <header
      id="header"
      className=" flex content-center bg-slate-50 h-screen relative overflow-hidden"
    >
      <nav className="container mx-auto px-4 py-8  flex justify-between fixed left-0 right-0 top-0 z-20">
        <Link href="/" className="mix-blend-exclusion">
          <h1 className="	 text-black">
            SILAS <br /> AFRA.
          </h1>
        </Link>
        <NavMenu />
      </nav>

      <div className="container mx-auto px-4 py-8 relative flex items-center justify-center flex-col ">
        <div className="w-full font-bold relative">
          <p className="text-4xl md:text-9xl monument  ">FREELANCER</p>
          <p className="text-4xl md:text-9xl text-right monument">DEVELOPER</p>
          <p className="text-4xl md:text-9xl monument">+ DESIGNER</p>
          <div className="absolute top-0">
            <FreelancerStroke />
          </div>
          <div className="absolute top-1/2 bottom-1/2 translate-y-1/2">
            <DeveloperStroke />
          </div>
          <div className="absolute bottom-0 left-0">
            <DesignerStroke />
          </div>
        </div>
        <div className="bg-black mt-10 py-6 px-8  text-white font-bold flex gap-2 hover:bg-black/90 cursor-pointer">
          Entre em Contato <ArrowUpRight />
        </div>
      </div>
    </header>
  );
};
