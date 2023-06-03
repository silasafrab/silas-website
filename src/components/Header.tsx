import { NavMenu } from './NavMenu';
import IconLogo from './icons/IconLogo';
import Link from 'next/link';

export const Header = () => {
  return (
    <header
      id="header"
      className=" flex content-center bg-slate-50 h-screen relative"
    >
      <nav className="container mx-auto px-4 py-8  flex justify-between fixed left-0 right-0 top-0 z-20">
        <div className="flex gap-1 bg-gray-800 p-1 rounded-lg w-fit ">
          <Link href="/">
            <div className=" bg-gray-700 hover:bg-gray-800 transition p-3 rounded-lg cursor-pointer">
              <IconLogo width={24} height={24} />
            </div>
          </Link>
        </div>
        <NavMenu />
      </nav>

      <div className="container mx-auto px-4 py-24 relative flex items-center">
        <img
          src="silas-hero.png"
          alt=""
          className="absolute bottom-0 left-auto right-0 z-[1]  "
        />
        <div className="p-8 bg-white/20 backdrop-blur-sm max-h-96 z-10 rounded-2xl  ">
          <h1 className="font-bold text-7xl text-gray-700 mb-6">
            Silas <span className="text-gray-700/50"> Afra</span>
          </h1>
          <p className="text-gray-700 text-4xl mb-3">Freelancer</p>
          <p className="text-gray-700 text-4xl">Designer & Developer</p>
        </div>
      </div>
      <div className="bg-gray-200 absolute w-[70%] h-[80%] bottom-0 right-0 rounded-tl-3xl z-[0]"></div>
    </header>
  );
};
