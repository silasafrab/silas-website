export const Portfolio = () => {
  return (
    <section className=" bg-black">
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
          <div className="h-96 border-2 overflow-hidden border-gray-700 relative">
            <div className="bg-slate-300/10 absolute h-full w-full">
              <p className="text-gray-100">nome do site</p>
            </div>
            <img
              className="scale-100 ease-in duration-200 hover:scale-105 "
              src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template.webp"
              alt=""
            />
          </div>
          <div className="h-96 w-full border-2 overflow-hidden border-gray-700">
            <img
              className="scale-100 ease-in duration-200 hover:scale-105"
              src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template.webp"
              alt=""
            />
          </div>
          <div className="h-96 w-full border-2 overflow-hidden border-gray-700">
            <img
              className="scale-100 ease-in duration-200 hover:scale-105"
              src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
