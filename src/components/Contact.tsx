import IconInstagram from './icons/IconInstagram';
import IconTelegram from './icons/IconTelegram';
import IconWhatsapp from './icons/IconWhatsapp';

export const Contact = () => {
  return (
    <section id="contact" className="bg-black  mb-40 lg:mb-32 overflow-hidden">
      <div className="container mx-auto px-4 py-56">
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-10 ">
            <p className="text-lg font-bold text-gray-400 mb-3 text-center">
              Vamos trabalhar juntos!
            </p>
            <h2 className=" text-lg lg:text-5xl md:text-2xl text-gray-50 mb-5 text-center backdrop:bg-gray-50">
              contato@silasafra.com
            </h2>
          </div>

          <div className="flex gap-1 bg-white/10 p-1  w-fit m-auto">
            <div className="font-bold text-gray-50  p-3  ">
              Entre em contato
            </div>
            <div className=" bg-black  hover:bg-black/70  p-3 cursor-pointer">
              <IconWhatsapp width={24} height={24} />
            </div>
            <div className=" bg-black  hover:bg-black/80  p-3 cursor-pointer">
              <IconTelegram width={24} height={24} />
            </div>
            <div className=" bg-black  hover:bg-black/80  p-3 cursor-pointer">
              <IconInstagram width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
