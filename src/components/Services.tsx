export const Services = () => {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p className="text-lg font-bold text-gray-500 mb-3">SERVIÇOS</p>
          <h2 className="text-5xl text-gray-800 mb-5">
            Experiência em levar seu site ao próximo nível
          </h2>
        </div>
        <div className="">
          {/* separador */}
          <div className="w-full h-[1px] bg-black/20"></div>
          {/* card */}
          <div className="flex  flex-col pt-10 mb-10 justify-between">
            <div className="flex">
              <p className="mr-24">01</p>
              <h3 className="text-5xl font-bold mb-2">
                Brand <br /> Strategy
              </h3>
            </div>
            <p className="text-base font-normal w-72">
              Eu silas crio sites personalizados e estratégicos para empresas e
              startups.
            </p>
          </div>
          {/* separador */}
          <div className="w-full h-[1px] bg-black/20"></div>
          <div className="w-full h-[1px] bg-black/20"></div>
        </div>
      </div>
    </section>
  );
};
