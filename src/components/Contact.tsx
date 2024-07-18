import IconInstagram from './icons/IconInstagram';
import IconLinkedin from './icons/IconLinkedin';
import IconTelegram from './icons/IconTelegram';
import IconWhatsapp from './icons/IconWhatsapp';

export const Contact = () => {
    return (
        <section id="contact" className="bg-black  mb-40 lg:mb-32 overflow-hidden">
            <div className="container mx-auto px-4 py-56 h-[90vh] flex  justify-center items-center">
                <div className="flex flex-col justify-center items-center ">
                    <div className="mb-10 ">
                        <p className="text-lg font-bold text-gray-400 mb-3 text-center">Trabalhe comigo!</p>
                        <a href="mailto:silasafra@gmail.com?subject=Solicitação%20de%20Serviços%20de%20Desenvolvimento%20Front-End%20e%20UX%20Design&body=Olá%20Silas%2C%0A%0AEstou%20interessado(a)%20em%20saber%20mais%20sobre%20os%20seus%20serviços%20de%20desenvolvimento%20front-end%20e%20UX%20design.%20Por%20favor%2C%20entre%20em%20contato%20para%20discutirmos%20os%20detalhes.%0A%0AObrigado(a)%2C%0A%5BSeu%20Nome%5D">
                            <h2 className=" text-lg lg:text-5xl md:text-2xl text-gray-50 mb-5 text-center backdrop:bg-gray-50  cursor-pointer hover:tracking-widest ease-in-out duration-300">
                                silasfra@gmail.com
                            </h2>
                        </a>
                    </div>

                    <div className="flex gap-1 bg-white/10 p-1  w-fit m-auto link-footer">
                        <div className="font-bold text-gray-50  p-3  ">Entre em contato</div>
                        <a href="https://wa.me/5573988878903" target="_blank">
                            <div className=" bg-black  hover:bg-black/70 link-btn p-3 cursor-pointer">
                                <IconWhatsapp width={24} height={24} />
                            </div>
                        </a>
                        <div className=" bg-black  hover:bg-black/80 link-btn p-3 cursor-pointer">
                            <IconTelegram width={24} height={24} />
                        </div>
                        <a href="https://www.linkedin.com/in/silasafra/" target="_blank">
                            <div className=" bg-black  hover:bg-black/80 link-btn p-3 cursor-pointer">
                                <IconLinkedin width={24} height={24} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
