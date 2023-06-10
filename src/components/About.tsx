import SilasStroke from './icons/SilasStroke';

export const About = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute">
        {' '}
        <SilasStroke />
      </div>

      <div className="container mx-auto px-4 md:px-32 lg:px-32 py-24  ">
        <div className="">
          <p className="text-lg font-bold text-gray-500 mb-3">Sobre mim </p>
          <h2 className="text-lg md:text-5xl text-gray-800 mb-5">
            Conheça o profissional por trás dos projetos{' '}
          </h2>
          <p className="text-lg font-normal">
            Comecei minha trajetória profissional como desenvolvedor, criando
            sistemas e soluções digitais. Há cerca de 3 anos, decidi expandir
            meus horizontes e mergulhar no universo do design. Foi aí que
            descobri minha paixão por criar sites que combinem um design
            atraente e funcionalidade otimizada. Acredito que o design tem o
            poder de transformar algo simples em algo extraordinário. Por isso,
            estou sempre comprometido em entregar soluções que unam beleza e
            funcionalidade, atendendo às necessidades específicas de cada
            projeto. Com uma abordagem detalhista e minuciosa, busco oferecer a
            melhor experiência possível tanto para meus clientes quanto para
            seus usuários finais. É uma honra poder ajudar empresas e
            empreendedores a alcançar seus objetivos e conquistar novos
            patamares de sucesso.
          </p>
        </div>
      </div>
    </section>
  );
};
