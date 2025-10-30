import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { VscSettingsGear } from "react-icons/vsc";
import { FaBagShopping, FaDiagramProject } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Navbar = () => {
  const navItems = [
    { icon: <FaHome size={22} />, label: "Home", path: "#home" },
    { icon: <IoIosContact size={22} />, label: "About", path: "#about" },
    { icon: <VscSettingsGear size={22} />, label: "Skills", path: "#skills" },
    { icon: <FaBagShopping size={22} />, label: "Experience", path: "#experience" },
    { icon: <FaDiagramProject size={22} />, label: "Project", path: "#project" },
    { icon: <BsFillTelephoneForwardFill size={22} />, label: "Contact", path: "#contact" },
  ];

  return (
    <div>
      <div className=" hidden md:block nav-bar w-full p-4">
        <ul className=" flex  flex-col h-full items-start gap-5 list-none">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="group relative flex items-center bg-blue-700 text-white p-4 rounded-full cursor-pointer 
                         border border-transparent hover:border-blue-300  
                         transition-all duration-300 ease-in-out"
              >
                {item.icon}
                <span className="absolute left-14 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 
                               transition-all duration-300 bg-blue-800 px-3 py-2 rounded-md text-sm shadow-lg">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='block md:hidden'>

      </div>
    </div>
  );
};

export default Navbar;
