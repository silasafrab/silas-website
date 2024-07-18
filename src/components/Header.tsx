'use client';

import { NavMenu } from './NavMenu';
import ArrowUpRight from './icons/ArrowUpRight';
import { useEffect, useRef, useState } from 'react';
import MarqueeComponent from './marque';

export const Header: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    return (
        <header id="header" className="flex content-center bg-black hero relative overflow-hidden">
            <nav className="container mx-auto px-4 py-8 flex justify-between fixed left-0 right-0 top-0 z-20">
                <a href="#header" className="mix-blend-exclusion">
                    <h1 className="text-white ">
                        Silas <br />
                        Afra .
                    </h1>
                </a>
                <NavMenu />
            </nav>

            <div className="container mx-auto px-4 py-8 relative flex items-start justify-center flex-col z-10">
                <div className="flex flex-col w-full gap-2">
                    <p className="text-white lg:text-2xl monument">olá, sou</p>
                    <h2 className="text-gray-500 text-[6vw]">
                        <span className="text-white text-6xl lg:text-[6vw] monument-x">Silas Afra</span>
                    </h2>
                    <div className="text-white text-lg max-w-xs flex flex-col items-end gap-8 self-end mt-6 ">
                        <p className="text-right">
                            Desenvolvedor <strong className="font-extrabold text-gray-400">Front-end e UX designer</strong> com mais de 4 anos de experiência na área, moldando interfaces que conectam
                            pessoas e marcas.
                        </p>

                        <a href="#contact">
                            <div className="flex gap-2 text-white monument hover:tracking-widest ease-in-out duration-300 cursor-pointer">
                                Contato
                                <div>
                                    <ArrowUpRight />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <video ref={videoRef} loop muted autoPlay className="absolute -z-0 w-auto min-w-full min-h-full max-w-none translate-2/4 opacity-30">
                <source src="../background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <MarqueeComponent />
        </header>
    );
};
