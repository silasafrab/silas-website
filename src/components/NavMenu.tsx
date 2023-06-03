import ArrowUpRight from './icons/ArrowUpRight';
import IconMenu from './icons/IconMenu';
import Link from 'next/link';
export const NavMenu = () => {
  return (
    <div className="flex gap-1 bg-gray-800 p-1 rounded-lg">
      <div className=" flex gap-1 font-bold text-gray-50 bg-gray-700 hover:bg-gray-800 transition p-3 rounded-lg cursor-pointer">
        <Link href="/#contact">Entre em contato</Link>
        <ArrowUpRight />
      </div>
      <div className=" bg-gray-700 hover:bg-gray-800 transition p-3 rounded-lg cursor-pointer">
        <IconMenu width={24} height={24} />
      </div>
    </div>
  );
};
