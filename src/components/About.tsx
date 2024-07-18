import Image from 'next/image';

export const About = () => {
    return (
        <section className="overflow-hidden bg-gray-50 relative">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between container  mx-auto">
                <div className="w-[1px] h-full bg-slate-400/10"></div>
                <div className="w-[1px] h-full bg-slate-400/10"></div>
                <div className="w-[1px] h-full bg-slate-400/10"></div>
                <div className="w-[1px] h-full bg-slate-400/10"></div>
                <div className="w-[1px] h-full bg-slate-400/10"></div>
                <div className="w-[1px] h-full bg-slate-400/10"></div>
                <div className="w-[1px] h-full bg-slate-400/10"></div>
                <div className="w-[1px] h-full bg-slate-400/10"></div>
            </div>

            <div className="container mx-auto px-4  py-24  ">
                <div className="flex flex-col items-center relative w-full">
                    <div className="flex justify-between w-full mb-10">
                        <p className="text-lg md:text-2xl font-bold text-gray-500 mb-3 opacity-40 monument">/02</p>
                        <h2 className="text-3xl md:text-8xl text-black mb-5 monument-x text-end title">
                            <span>S</span>
                            <span>o</span>
                            <span>b</span>
                            <span>r</span>
                            <span>e</span>
                            <span className="ml-5 lg:ml-10"> </span>
                            <span>m</span>
                            <span>i</span>
                            <span>m</span>
                        </h2>
                    </div>
                    <Image src="/image_cta.png" width="545" height="584" alt="" className=" lg:mt-10 mb-10" />
                    <div className="max-w-3xl">
                        <p className="text-gray-200 font-bold monument mb-5">&lt;h /&gt;</p>
                        <p className=" lg:text-lg text-xs  font-normal monument text-gray-700 ">
                            Comecei minha trajetória profissional como desenvolvedor, criando sistemas e soluções digitais. Há cerca de 4 anos, decidi expandir meus horizontes e mergulhar no universo
                            do design. Foi aí que descobri minha paixão por criar sites que combinem um design atraente e funcionalidade otimizada.
                            <br />
                            <br />
                            Acredito que o design tem o poder de transformar algo simples em algo extraordinário. Por isso, estou sempre comprometido em entregar soluções que unam beleza e
                            funcionalidade, atendendo às necessidades específicas de cada projeto.
                            <br />
                            <br />
                            Com uma abordagem detalhista e minuciosa, busco oferecer a melhor experiência possível tanto para meus clientes quanto para seus usuários finais. É uma honra poder ajudar
                            empresas e empreendedores a alcançar seus objetivos e conquistar novos patamares de sucesso.
                        </p>
                        <p className="text-gray-200 font-bold monument text-end mt-5">&lt;h /&gt;</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
