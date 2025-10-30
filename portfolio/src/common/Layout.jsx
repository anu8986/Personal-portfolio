import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full  text-white bg-gradient-to-r from-[#1D1D33] via-[#17179C] to-[#8A26A3]">
      <Navbar />

      <div className="p-6 ">
        {children}
      </div>
    </div>
  )
}

export default Layout
