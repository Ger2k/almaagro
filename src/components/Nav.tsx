"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";

const links = [
  { 
    name: 'Dashboard', 
    href: '/dashboard',
    icon: '/icons/home.svg' 
  },
  {
    name: 'Usuarios',
    href: '/users',
    icon: '/icons/users.svg' 
  },
];

const Nav = () => {
  
  const pathname = usePathname();
  return (
    <nav className="md:h-screen h-12 w-screen md:w-64 text-[#171725] fixed flex md:flex-col flex-row border-r-1 border-r-[#707070] shadow-[1px_0px_4px_#00000014]">
            <div className="logo p-4 mb-4 hidden md:block">
                <Image
                  width={222} 
                  height={100}
                  src='/img/logo.jpg'
                  alt="Logo" 
                  className="w-full h-auto"
                />
            </div>
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`border-l-4 flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
                    ${pathname === link.href ? 'border-[#83DCD1] text-[#000000]' : 'bg-transparent text-[#171725]'}
                    ${pathname === link.href ? 'bg-[linear-gradient(to_right,_rgba(131,_220,_209,_0.15)_80%,_rgba(255,_255,_255,_0.15)_20%)]' : ''}
                    hover:text-[#131b1a] hover:bg-[linear-gradient(to_right,_rgba(89,_141,_134,_0.15)_80%,_rgba(255,_255,_255,_0.15)_20%)]`}
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="w-6 h-6 ml-3"
                  />
                  <p className="md:block ml-3">{link.name}</p>
                </Link>
              )
            })}
          </nav>
  );
};

export default Nav;
