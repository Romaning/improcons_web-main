import NavbarItem from "./NavbarItem";
import Link from "next/link";

import { BsChevronDown } from "react-icons/bs";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div
        className="
          px-4
          sm:px-8
          lg:px-16
          py-6
          flex
          sm:flex-row
          flex-col
          items-center
          transition
          duration-500
          bg-white

        "
      >
        <img className="h-7 lg:h-10" src="/images/logoss.png" alt="" />
        <div
          className="
            sm:flex-row
            flex-col
            sm:ml-8
            xl:gap-30
            sm:gap-7
            flex
            font-lato
            font-normal
            text-primary
            lg:justify-between
            sm:-space-x-[30px]
            lg:-space-x-[42px]
            w-full
          "
        >
          <div className="flex flex-row space-x-3 justify-center sm:space-x-4 lg:space-x-10 pt-1 pb-4 px-4">
            <Link href={"/"}>
              <NavbarItem label="Inicio" />
            </Link>
            <Link href={"/tiendas"}>
              <NavbarItem label="Tiendas" />
            </Link>
            <Link href={"/servicios"}>
              <NavbarItem label="Servicios" />
            </Link>
            <div className="sm:hidden">
              <Link href={"/asistencia"}>
                <NavbarItem label="Asistencia" />
              </Link>
            </div>
          </div>
          <div className=" flex sm:flex-row sm:space-x-3 lg:space-x-10">
            <SearchBar />
            <div className="pt-2 hidden sm:flex">
              <Link href={"/asistencia"}>
                <NavbarItem label="Asistencia" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
