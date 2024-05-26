"use client";

import Image from "next/image";
import logo from "../../../public/assets/Standard Collection 27.svg";
import menuHolder from "../../../public/assets/Image-Placeholder.svg";
import {
  ExpandMore,
  FavoriteBorder,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import MainSlider from "../sliders/mainSlider";

function Navbar() {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <div className="  ">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between w-full py-5 items-center px-14 z-10">
          <div className="flex gap-3 justify-center items-center">
            <div className="flex items-center">
              <span>(0)</span>
              <ShoppingBagOutlined />
            </div>
            <FavoriteBorder />
            <div className="flex gap-1">
              <PersonOutline />
            </div>
            <div
              className={`transition-opacity ease-in delay-1000 duration-1000`}
            >
              <div
                className="relative cursor-pointer"
                onClick={handleSearchClick}
              >
                <Search className="z-10" />
              </div>
              {showSearchInput && (
                <input
                  type="search"
                  placeholder="جستجو ..."
                  className="text-sm w-96 pl-3 pr-9 py-3 border-2 border-solid rounded-xl border-gray-300 bg-gray-50 focus:outline-none"
                />
              )}
            </div>
          </div>
          <div>
            <div className="flex gap-10 text-black font-normal text-xs   ">
              <Link href={""}>
                {" "}
                <ExpandMore /> دسته بندی
              </Link>
              <Link href={""}>
                {" "}
                <ExpandMore /> درباره ما
              </Link>
              <Link href={""}>
                {" "}
                <ExpandMore /> محصولات
              </Link>
              <Link href={""}>
                {" "}
                <ExpandMore /> فروشگاه
              </Link>
              <button></button>
            </div>
          </div>

          <div className="flex flex-wrap justify-end w-40">
            <span className="font-bold text-3xl text-black ">SEVIN</span>
            {/* <Image src={logo} alt={"holder"} className="w-7 h-auto fill-current text-white" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
