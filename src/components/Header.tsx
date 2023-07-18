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
      className=" flex content-center bg-black h-screen relative overflow-hidden"
    >
      <nav className="container mx-auto px-4 py-8  flex justify-between fixed left-0 right-0 top-0 z-20">
        <Link href="/" className="mix-blend-exclusion">
          <h1 className="text-white">
            Silas <br />
            Afra
          </h1>
        </Link>
        <NavMenu />
      </nav>

      <div className="container mx-auto px-4 py-8 relative flex items-start justify-center flex-col">
        <div>
          <h2 className="text-gray-500 text-[6vw] lg:text-[5vw] ">
            <span className="text-white">Design </span>
            e <br /> <span className="text-white">Desenvolvimento </span> <br />
            que Impressionam.
          </h2>
        </div>

        <div className="bg-white mt-10 py-4 px-6 rounded-xl  text-black font-bold flex items-center justify-center gap-2 hover:bg-white/70 cursor-pointer duration-300">
          Vamos conversar <ArrowUpRight />
        </div>
      </div>
      <img
        src="../logo-bg.png"
        alt=""
        className="absolute bottom-0 right-0 w-full"
      />
    </header>
  );
};
