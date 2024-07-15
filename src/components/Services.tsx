import '../components/services.css';
import IconFigma from './icons/IconFigma';
import IconXD from './icons/IconXd';
import IconLinkedin from './icons/IconLinkedin';
import IconWebflow from './icons/IconWebflow';
import IconWordpress from './icons/IconWordpress';
import IconWooCommerce from './icons/IconWooCommerce';
import IconShopify from './icons/IconShopify';
import IconReact from './icons/IconReact';
import IconAngula from './icons/IconAngula';
import IconNext from './icons/IconNext';
import IconExpo from './icons/IconExpo';
export const Services = () => {
    return (
        <section className="overflow-hidden">
            <div className="container mx-auto px-4 py-24">
                <div className="flex justify-between w-full mb-10">
                    <h2 className="text-lg md:text-8xl text-black mb-5 monument-x ">Serviços</h2>
                    <p className="text-lg md:text-2xl font-bold text-gray-500 mb-3 opacity-40 monument text-end">/03</p>
                </div>

                <div className="flex flex-col">
                    <div className="card py-10 flex justify-between gap-8 ">
                        <div className=" flex gap-8 ">
                            <div className="number bg-black w-11 h-11 flex p-2 text-white monument justify-center items-center">01</div>
                            <h3 className="text-lg md:text-5xl font-bold ">Prototipagem de Interface</h3>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-base font-normal w-full lg:w-72 text-right">Criação protótipos interativos que simulam a experiência do usuário em websites e aplicativos</p>
                            <div className="mt-4">
                                <div className="flex gap-2 ">
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconFigma width={24} height={24} />
                                        <p className="tip">Figma</p>
                                    </div>
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconXD width={24} height={24} />
                                        <p className="tip">Adobe XD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card py-10 flex justify-between gap-8">
                        <div className=" flex gap-8">
                            <div className="number bg-black w-11 h-11 flex p-2 text-white monument justify-center items-center">02</div>
                            <h3 className="text-lg md:text-5xl font-bold ">Sites Institucionais e Landing Pages</h3>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-base font-normal w-full lg:w-72 text-right">Websites profissionais e otimizados para conversão, que representem a marca do seu cliente online</p>
                            <div className="mt-4">
                                <div className="flex gap-2">
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconWebflow width={24} height={24} />
                                        <p className="tip">Webflow</p>
                                    </div>
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconWordpress width={24} height={24} />
                                        <p className="tip">WordPress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card py-10 flex justify-between gap-8">
                        <div className=" flex gap-8">
                            <div className="number bg-black w-11 h-11 flex p-2 text-white monument justify-center items-center">03</div>
                            <h3 className="text-lg md:text-5xl font-bold ">Criação de Lojas Online</h3>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-base font-normal w-full lg:w-72 text-right">Implementação de lojas virtuais completas e fáceis de gerenciar, para venda produtos online</p>
                            <div className="mt-4">
                                <div className="flex gap-2">
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconWooCommerce width={24} height={24} />
                                        <p className="tip">WooCommerce</p>
                                    </div>
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconShopify width={24} height={24} />
                                        <p className="tip">Shopify</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card py-10 flex justify-between gap-8">
                        <div className=" flex gap-8">
                            <div className="number bg-black w-11 h-11 flex p-2 text-white monument justify-center items-center">04</div>
                            <h3 className="text-lg md:text-5xl font-bold ">Desenvolvimento Web</h3>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-base font-normal w-full lg:w-72 text-right">Desenvolvimento de websites e aplicativos web robustos, escaláveis e com alto desempenho</p>
                            <div className="mt-4">
                                <div className="flex gap-2">
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconReact width={24} height={24} />
                                        <p className="tip">React JS</p>
                                    </div>
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconAngula width={24} height={24} />
                                        <p className="tip">Angula</p>
                                    </div>
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconNext width={24} height={24} />
                                        <p className="tip">Next</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card py-10 flex justify-between gap-8">
                        <div className=" flex gap-8">
                            <div className="number bg-black w-11 h-11 flex p-2 text-white monument justify-center items-center">05</div>
                            <h3 className="text-lg md:text-5xl font-bold ">Aplicativos</h3>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-base font-normal w-full lg:w-72 text-right">Aplicativos iOS e Android com uma única base de código, utilizando ferramentas modernas</p>
                            <div className="mt-4">
                                <div className="flex gap-2">
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconReact width={24} height={24} />
                                        <p className="tip">React Native</p>
                                    </div>
                                    <div className=" bg-white  w-11 h-11 flex justify-center items-center p-2 icon">
                                        <IconExpo width={24} height={24} />
                                        <p className="tip">Expo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
