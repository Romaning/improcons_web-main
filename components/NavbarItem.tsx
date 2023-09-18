import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-blue-950 cursor-pointer hover:text-cyan-600 transition uppercase font-medium sm:text-base xl:text-[20px]">
      {label}
    </div>
  );
};

export default NavbarItem;
