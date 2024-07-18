'use client';
import Image from 'next/image';
import '../components/portfolio.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Portfolio = () => {
    const colLeftRef = useRef(null);
    const colRightRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const colLeft = colLeftRef.current;
        const colRight = colRightRef.current;
        const title = titleRef.current;
        gsap.fromTo(
            title,
            {
                y: '40px',
                opacity: 0.5
            },
            {
                y: '0',

                opacity: 1,
                scrollTrigger: {
                    // markers: true,
                    trigger: '#project',
                    start: 'top 600px',
                    end: 'bottom 10px',
                    scrub: true
                }
            }
        );

        gsap.fromTo(
            colLeft,
            {
                x: '100px'
            },
            {
                x: '-100px',
                duration: 10,
                scrollTrigger: {
                    // markers: true,
                    trigger: '#project',
                    start: 'top 600px',
                    end: 'bottom 10px',
                    scrub: true
                }
            }
        );
        gsap.fromTo(
            colRight,
            {
                x: '-100px'
            },
            {
                x: '100px',
                duration: 10,
                scrollTrigger: {
                    // markers: true,
                    trigger: '#project',
                    start: 'top 600px',
                    end: 'bottom 10px',
                    scrub: true
                }
            }
        );
    });
    return (
        <section className="overflow-hidden " id="project">
            <div className="container mx-auto px-4 pt-24 ">
                <div className="flex justify-between w-full mb-10">
                    <p className="text-lg md:text-2xl font-bold text-gray-500 mb-3 opacity-40 monument">/04</p>
                    <h2 className="text-3xl md:text-8xl text-black mb-5 monument-x " ref={titleRef}>
                        Projetos
                    </h2>
                </div>
            </div>
            <div className="flex flex-col gap-6 port pb-24">
                <div className="flex gap-6 w-[150%] col-left" ref={colLeftRef}>
                    <a href="https://www.onairparking.com/" target="_blank" className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                        <div className="">
                            <Image src="/img_p_01.png" alt="On air Parking" width={611} height={344} className="[102px] lg:w-auto lg:h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">On Air Parking</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.capef.com.br/site/plano-cv-i" target="_blank" className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                        <div className="">
                            <Image src="/img_p_02.png" alt="On air Parking" width={611} height={344} className="[102px] lg:w-auto lg:h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">CAPEF</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://telecarga.com.br/" target="_blank" className="bg-black lg:bg-gray-200 p-6 pb-9 lg:px-6 lg:pt-8 lg:pb-14 relative port-card">
                        <div className="   ">
                            <Image src="/img_p_03.png" alt="On air Parking" width={611} height={344} className="[102px] lg:w-auto lg:h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">Telecarga</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex gap-6 w-[150%] col-right" ref={colRightRef}>
                    <a href="https://fhopstore.com/" target="_blank" className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                        <div className="">
                            <Image src="/img_p_04.png" alt="On air Parking" width={611} height={344} className="[102px] lg:w-auto lg:h-[344px]" />
                            <div className="absolute bottom-3 title">
                                <p className="monument">Phop Store</p>
                            </div>
                        </div>
                    </a>

                    <div className="bg-gray-200 px-6 pt-8 pb-14 relative port-card">
                        <Image src="/img_p_05.png" alt="On air Parking" width={611} height={344} className="[102px] lg:w-auto lg:h-[344px]" />
                        <div className="absolute bottom-3 title">
                            <p className="monument">Saúde Life App</p>
                        </div>
                    </div>
                    <a
                        href="
                    https://www.blippy.com.br/"
                        target="_blank"
                        className="bg-gray-200 px-6 pt-8 pb-14 relative port-card"
                    >
                        <div className="">
                            <Image src="/img_p_06.png" alt="On air Parking" width={611} height={344} className="[102px] lg:w-auto lg:h-[344px]" />
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
