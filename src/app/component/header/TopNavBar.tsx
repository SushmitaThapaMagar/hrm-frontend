import React from "react";
import { GrFavorite } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const TopNavBar = () => {
  return (
    <nav className="w-full flex justify-end items-center p-4 bg-gray-800 text-white tracking-wider px-10">
      <div className="w-full flex">
        <img src="./logo.png" alt="" className="object-cover h-15" />
      </div>

      <div className="flex items-center gap-10">
        <div>Home</div>
        <div>Products</div>
        <div>Contact</div>
        <div>About</div>
        {/* Corrected class name */}
        {/* Wishlist */}
        <div className="flex gap-5">
          <div className="cursor-pointer w-fit bg-black p-3 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            {" "}
            {/* Added hover effect */}
            <GrFavorite />
          </div>
          {/* Clipboard Icon */}
          <div className="cursor-pointer w-fit bg-black p-3 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            {" "}
            {/* Added hover effect */}
            <FaShoppingCart />
          </div>
        </div>

        <Link href={"/login"}>Sign In</Link>
      </div>
    </nav>
  );
};

export default TopNavBar;
