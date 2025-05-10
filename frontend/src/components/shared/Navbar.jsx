import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-blue-600">Nest</span>
          </h1>
        </div>
        <div className="flex items-center gap-9">
          <ul className="flex items-center space-x-9">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
