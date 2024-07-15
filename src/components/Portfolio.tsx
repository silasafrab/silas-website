'use client';
import Image from 'next/image';
import '../components/portfolio.css';
import { useEffect, useRef } from 'react';

export const Portfolio = () => {
    const colLeftRef = useRef(null);
    const colRightRef = useRef(null);

    useEffect(() => {
        const colLeft = colLeftRef.current;
        const colRight = colRightRef.current;
    });
    return (
        <section className="overflow-hidden ">
            <div className="container mx-auto px-4 pt-24 ">
                <div className=" grid grid-cols-2 sm:grid-cols-1 gap-6 md:gap-6 ">
                    <div className="h-333 w-full ">
                        <div className="flex justify-between w-full mb-10">
                            <p className="text-lg md:text-2xl font-bold text-gray-500 mb-3 opacity-40 monument">/04</p>
                            <h2 className="text-lg md:text-8xl text-black mb-5 monument-x text-end">Projetos</h2>
                        </div>
                    </div>
                    <div className="flex "></div>
                </div>
            </div>
            <div className="flex flex-col gap-6 port pb-24">
                <div className="flex gap-6 w-[150%] col-left" ref={colLeftRef}>
                    <a href="https://www.onairparking.com/" target="_blank">
                        <div className="bg-gray-200 px-6 pt-8 pb-14 relative port-card ">
                            <Image src="/img_p_01.png" alt="On air Parking" width={611} height={344} className="w-auto h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">On Air Parking</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.capef.com.br/site/plano-cv-i" target="_blank">
                        <div className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                            <Image src="/img_p_02.png" alt="On air Parking" width={611} height={344} className="w-auto h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">CAPEF</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://telecarga.com.br/" target="_blank">
                        <div className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                            <Image src="/img_p_03.png" alt="On air Parking" width={611} height={344} className="w-auto h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">Telecarga</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex gap-6 w-[150%] col-right" ref={colRightRef}>
                    <a href="https://fhopstore.com/" target="_blank">
                        <div className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                            <Image src="/img_p_04.png" alt="On air Parking" width={611} height={344} className="w-auto h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">Phop Store</p>
                            </div>
                        </div>
                    </a>

                    <div className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                        <Image src="/img_p_05.png" alt="On air Parking" width={611} height={344} className="w-auto h-[344px]" />
                        <div className="absolute bottom-3 title">
                            <p className="monument">Saúde Life App</p>
                        </div>
                    </div>
                    <a
                        href="
                    https://www.blippy.com.br/"
                        target="_blank"
                    >
                        <div className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                            <Image src="/img_p_06.png" alt="On air Parking" width={611} height={344} className="w-auto h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">Blippy</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};
