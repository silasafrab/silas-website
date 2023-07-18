export const Services = () => {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p className="text-lg font-bold text-gray-500 mb-3">SERVIÇOS</p>
          <h2 className="text-lg md:text-5xl text-gray-800 mb-5">
            Experiência em levar seu site ao próximo nível
          </h2>
        </div>
        <div className="">
          {/* separador */}
          <div className="w-full h-[1px] bg-black/20"></div>
          {/* card */}
          <div className="flex  flex-col md:flex-row pt-10 mb-10 justify-between content-center">
            <div className="flex">
              <p className=" mr-3 md:mr-24">01</p>
              <h3 className="text-lg md:text-5xl font-bold mb-2">
                Criação de Sites
              </h3>
            </div>
            <p className="text-base font-normal w-full lg:w-72">
              Websites Personalizados que Impulsionam sua Presença Online.
            </p>
          </div>
          {/* separador */}
          <div className="w-full h-[1px] bg-black/20"></div>
          {/* card */}
          <div className="flex  flex-col md:flex-row pt-10 mb-10 justify-between content-center">
            <div className="flex">
              <p className=" mr-3 md:mr-24">02</p>
              <h3 className="text-lg md:text-5xl font-bold mb-2">
                Criação de Landing pages
              </h3>
            </div>
            <p className="text-base font-normal w-full lg:w-72">
              Landing Pages Persuasivas que Convertem Visitantes em Clientes.
            </p>
          </div>
          {/* separador */}
          <div className="w-full h-[1px] bg-black/20"></div>
          {/* card */}
          <div className="flex  flex-col md:flex-row pt-10 mb-10 justify-between content-center">
            <div className="flex">
              <p className=" mr-3 md:mr-24">03</p>
              <h3 className="text-lg md:text-5xl font-bold mb-2">Web Design</h3>
            </div>
            <p className="text-base font-normal w-full lg:w-72">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          {/* separador */}
          <div className="w-full h-[1px] bg-black/20"></div>
          {/* card */}
          <div className="flex  flex-col md:flex-row pt-10 mb-10 justify-between content-center">
            <div className="flex">
              <p className=" mr-3 md:mr-24">04</p>
              <h3 className="text-lg md:text-5xl font-bold mb-2">
                Brand Strategy
              </h3>
            </div>
            <p className="text-base font-normal w-full lg:w-72">
              Otimização Aperfeiçoada para um Desempenho Superior.
            </p>
          </div>
          {/* separador */}
          <div className="w-full h-[1px] bg-black/20"></div>
        </div>
      </div>
    </section>
  );
};
