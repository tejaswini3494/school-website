import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-blue-950 ">
        <div className="lg:flex w-5/6 mx-auto justify-between gap-4 py-8 ">
          <img src="" />
          <h1 className="text-white  text-2xl font-semibold py-8">
            Springdale Public School
          </h1>

          <ul className="flex flex-col gap-3 ">
            <h2 className="text-white font-semibold text-lg">Quick Link</h2>
            <li>
              <Link to="" className="text-white font-semibold text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="text-white font-semibold text-sm">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="text-white font-semibold text-sm">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="" className="text-white font-semibold text-sm">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 py-8 ">
            <p className="text-white font-semibold ">+1 (123) 456-7890</p>
            <p className="text-white font-semibold">info@springdale.edu</p>
            <p className="text-white font-semibold">
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-1 text-white">
        Copyright © 2024
      </div>
    </>
  );
}
