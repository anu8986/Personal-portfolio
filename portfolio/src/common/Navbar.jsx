import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { VscSettingsGear } from "react-icons/vsc";
import { FaBagShopping } from "react-icons/fa6";
import { FaDiagramProject } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <div>
        <div className='fixed left-0 top-[40%]'>
            <ul className='flex flex-col gap-7 '>
                <li className='bg-blue-700 p-5 rounded-full'><FaHome size={22}/></li>
                <li className='bg-blue-700 p-5 rounded-full'><IoIosContact size={22}/></li>
                <li className='bg-blue-700 p-5 rounded-full'><VscSettingsGear size={22}/></li>
                <li className='bg-blue-700 p-5 rounded-full'><FaBagShopping size={22}/></li>
                <li className='bg-blue-700 p-5 rounded-full'><FaDiagramProject size={22}/></li>
                <li className='bg-blue-700 p-5 rounded-full'><BsFillTelephoneForwardFill size={22}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar