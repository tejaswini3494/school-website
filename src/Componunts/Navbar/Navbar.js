import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [ toggle,setToggle]=useState(false)

  return (
    <>
    <div className="bg-blue-950">
      <div className="flex items-center   gap-20   py-4 px-6   justify-between h-24  w-5/6 mx-auto ">
        <div className="flex flex-col ">
        <img src="./Images/logo4.webp" className="w-10 "/>
        <p className="text-red-700  text-sm font-semibold">
          Springdale Public School
        </p>

        </div>
        
        <h1 className="text-white  lg:text-3xl font-semibold md:text-2xl sm:xl">
          Springdale Public School
        </h1>
      </div>
      </div>
     
      <div className=" bg-gray-200">
      <nav className="  w-5/6 mx-auto ">
      {
        toggle?<IoMdClose 
        onClick={()=>{ setToggle(!toggle)
         }}  className="lg:hidden block text-black font-bold text-lg" />
         :
         <CiMenuBurger onClick={()=>{
          setToggle(!toggle)
        }}  className="lg:hidden block text-black font-bold text-lg" />
      }
      
      
    
      
        <ul className=" hidden  lg:flex  items-center justify-between gap-2 text-blue-800  text-sm font-semibold py-2 ">
          <li>
            <Link
              to="/"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/academics"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Academics
            </Link>
          </li>
          <li>
            <Link
              to="/admissions"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Admissions
            </Link>
          </li>
          <li>
            <Link
              to="/faculty"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Faculty
            </Link>
          </li>
          <li>
            <Link
              to="/student"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Students
            </Link>
          </li>
         
          <li>
            <Link
              to="/gallery"
              className="hover:bg-blue-700 hover:text-white py-2.5 px-6"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:bg-blue-700 hover:text-white py-2.5 px-6"
            >
              Contact Us
            </Link>
          </li>
        </ul>

                  {/* responsive */}
                 
        <ul className={`lg:hidden w-full h-screen fixed top-30  bg-black text-white 
          ${toggle?'left-[0]':'left-[-100%]'}
          `}>
          <li className="p-5">
            <Link
              to="/"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Home
            </Link>
          </li>
          <li className="p-5">
            <Link
              to="/about"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              About Us
            </Link>
          </li >
          <li className="p-5">
            <Link
              to="/academics"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Academics
            </Link>
          </li>
          <li className="p-5">
            <Link
              to="/admissions"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Admissions
            </Link>
          </li>
          <li className="p-5">
            <Link
              to="/faculty"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Faculty
            </Link>
          </li>
          <li className="p-5">
            <Link
              to="/student"
              className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
            >
              Students
            </Link>
          </li>
         
          <li className="p-5">
            <Link
              to="/gallery"
              className="hover:bg-blue-700 hover:text-white py-2.5 px-6"
            >
              Gallery
            </Link>
          </li>
          <li className="p-5">
            <Link
              to="/contact"
              className="hover:bg-blue-700 hover:text-white py-2.5 px-6"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
}
