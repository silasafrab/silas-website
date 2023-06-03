import IconInstagram from './icons/IconInstagram';
import IconTelegram from './icons/IconTelegram';
import IconWhatsapp from './icons/IconWhatsapp';

export const Contact = () => {
  return (
    <section id="contact" className="bg-black rounded-b-[60px] mb-24">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-10 ">
            <p className="text-lg font-bold text-gray-400 mb-3 text-center">
              Vamos trabalhar juntos!
            </p>
            <h2 className="text-5xl text-gray-50 mb-5 text-center backdrop:bg-gray-50">
              contato@silasafra.com
            </h2>
          </div>

          <div className="flex gap-1 bg-gray-800 p-1 rounded-lg w-fit m-auto">
            <div className="font-bold text-gray-50 bg-gray-700 p-3 rounded-lg ">
              Entre em contato
            </div>
            <div className=" bg-gray-700  hover:bg-gray-800 transition p-3 rounded-lg cursor-pointer">
              <IconWhatsapp width={24} height={24} />
            </div>
            <div className=" bg-gray-700  hover:bg-gray-800 transition p-3 rounded-lg cursor-pointer">
              <IconTelegram width={24} height={24} />
            </div>
            <div className=" bg-gray-700  hover:bg-gray-800 transition p-3 rounded-lg cursor-pointer">
              <IconInstagram width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
