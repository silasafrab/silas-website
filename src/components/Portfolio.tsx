export const Portfolio = () => {
  return (
    <section className=" bg-black ">
      <div className="container mx-auto px-4 py-24 bg-black">
        <div className=" grid grid-cols-2 sm:grid-cols-1 gap-6 md:gap-6 ">
          <div className="h-333 w-full ">
            <div className="mb-16">
              <p className="text-lg font-bold text-gray-400 mb-3">PORTFÓLIO</p>
              <h2 className="text-5xl text-gray-50 mb-5">Últimos projetos</h2>
              <p className="text-lg font-normal text-gray-50">
                Transformando ideias em sites incríveis e funcionais com design
                elegante e experiência do usuário excepcional.
              </p>
            </div>
          </div>
          <div className="flex ">
            {/* card  */}
            <div className=" p-20 border border-gray-400 w-full">
              <img
                className=""
                src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template.webp"
                alt=""
              />
              <div className="">
                <div className="mt-10 flex items-center ">
                  <span className="bg-white px-2 py-2 text-lg mr-3">01</span>{' '}
                  <p className="text-white">One Air Parking</p>
                </div>
                <p className="text-white mt-8">
                  Crio sites personalizados e estratégicos para empresas e
                  startups. Utilizo as melhores ferramentas e estratégias
                  disponíveis no mercado para garantir que seu site reflita a
                  identidade da sua marca, aumente sua visibilidade online e
                  melhore sua presença digital.
                </p>
              </div>
            </div>
            {/* card  */}
            <div className=" p-20 border border-gray-400 w-full">
              <img
                className=""
                src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template.webp"
                alt=""
              />
              <div className="">
                <div className="mt-10 flex items-center ">
                  <span className="bg-white px-2 py-2 text-lg mr-3">01</span>{' '}
                  <p className="text-white">One Air Parking</p>
                </div>
                <p className="text-white mt-8">
                  Crio sites personalizados e estratégicos para empresas e
                  startups. Utilizo as melhores ferramentas e estratégias
                  disponíveis no mercado para garantir que seu site reflita a
                  identidade da sua marca, aumente sua visibilidade online e
                  melhore sua presença digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
