import IconBehance from './icons/IconBehance';
import IconDribbble from './icons/IconDribbble';
import IconLinkedin from './icons/IconLinkedin';

export const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8 fixed bottom-0 z-[-1] left-0 right-0">
      <div className=" p-1 flex content-center justify-between ">
        <p className="text-gray-500 ">
          © Copyright 2023 | Silas Afra | Todos os direitos reservados.
        </p>

        <div className="flex gap-1 bg-gray-50 p-1 rounded-lg w-fit">
          <div className=" bg-gray-300  hover:bg-gray-400 transition p-3 rounded-lg cursor-pointer">
            <IconBehance width={24} height={24} />
          </div>
          <div className=" bg-gray-300  hover:bg-gray-400 transition p-3 rounded-lg cursor-pointer">
            <IconDribbble width={24} height={24} />
          </div>
          <div className=" bg-gray-300  hover:bg-gray-400 transition p-3 rounded-lg cursor-pointer">
            <IconLinkedin width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};
