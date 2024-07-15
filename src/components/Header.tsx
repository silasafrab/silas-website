'use client';
import { NavMenu } from './NavMenu';
import Link from 'next/link';
import DesignerStroke from './icons/DesignerStroke';
import FreelancerStroke from './icons/FreelancerStroke';
import DeveloperStroke from './icons/DeveloperStroke';
import ArrowUpRight from './icons/ArrowUpRight';
import StarCircle from './icons/StarCircle';

export const Header = () => {
    return (
        <header id="header" className=" flex content-center bg-black h-screen relative overflow-hidden">
            <nav className="container mx-auto px-4 py-8  flex justify-between fixed left-0 right-0 top-0 z-20">
                <Link href="/" className="mix-blend-exclusion">
                    <h1 className="text-white ">
                        Silas <br />
                        Afra
                    </h1>
                </Link>
                <NavMenu />
            </nav>

            <div className="container mx-auto px-4 py-8 relative flex items-start justify-center flex-col z-10">
                <div>
                    <h2 className="text-gray-500 text-[6vw]  ">
                        <span className="text-white lg:text-[6vw]">Silas </span>
                        e <br /> <span className="text-white">Desenvolvimento </span> <br />
                        que Impressionam.
                    </h2>
                </div>

                <div className="bg-white mt-10 py-4 px-6 rounded-xl  text-black font-bold flex items-center justify-center gap-2 hover:bg-white/70 cursor-pointer duration-300">
                    Entre em contato <ArrowUpRight />
                </div>
            </div>

            <video loop muted autoPlay className="absolute -z-0 w-auto min-w-full min-h-full max-w-none translate-2/4 opacity-30">
                <source src="../background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className=" absolute bottom-0 bg-gray-100 p-7 w-full">
                <div className="flex gap-4 font-bold w-[150%]  marquee justify-center items-center">
                    <span className="whitespace-nowrap monument text-2xl">FRONT END DEVELOPER</span>
                    <div className="w-12 h-12 roda-roda  border-gray-500 flex justify-center items-center">
                        <StarCircle className="" />
                    </div>
                    <span className="whitespace-nowrap monument text-2xl">UX DESIGNER</span>
                    <div className="w-12 h-12 roda-roda  border-gray-500 flex justify-center items-center">
                        <StarCircle className="" />
                    </div>
                    <span className="whitespace-nowrap monument text-2xl">FRONT END DEVELOPER</span>
                    <div className="w-12 h-12 roda-roda  border-gray-500 flex justify-center items-center">
                        <StarCircle className="" />
                    </div>
                    <span className="whitespace-nowrap monument text-2xl">UX DESIGNER</span>
                    <div className="w-12 h-12 roda-roda  border-gray-500 flex justify-center items-center">
                        <StarCircle className="" />
                    </div>
                    <span className="whitespace-nowrap monument text-2xl">FRONT END DEVELOPER</span>
                    <div className="w-12 h-12 roda-roda  border-gray-500 flex justify-center items-center">
                        <StarCircle className="" />
                    </div>
                    <span className="whitespace-nowrap monument text-2xl">UX DESIGNER</span>
                </div>
            </div>
        </header>
    );
};
