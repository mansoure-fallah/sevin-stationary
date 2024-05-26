"use client";

import Image from "next/image";
import logo from "../../../public/assets/Standard Collection 27.svg";
import menuHolder from "../../../public/assets/Image-Placeholder.svg";
import {
  ExpandMore,
  FavoriteBorder,
  Menu,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import MainSlider from "../sliders/mainSlider";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import MobileMenu from "./mobileMenu";

function HomeNavbar() {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-between w-full py-1 md:py-2 lg:py-5 items-center absolute top-0 px-3 lg:px-14 md:px-8 sm:px-8 z-10">
        {/** ICONS */}
        <div className="flex gap-3 items-center text-white w-1/6">
          <Button
            className="md:hidden flex flex-col gap-1 text-white bg-transparent border-none h-10 w-0 hover:bg-transparent z-30"
            outlined
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={openMenu ? "opened" : "closed"}
              className="w-4 h-[0.1rem] rounded bg-white origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={openMenu ? "opened" : "closed"}
              className="w-4 h-[0.1rem] rounded bg-white"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={openMenu ? "opened" : "closed"}
              className="w-4 h-[0.1rem] rounded bg-white origin-left"
            ></motion.div>
          </Button>
          <div className="flex items-center relative cursor-pointer">
            <span className="rounded-full absolute -top-1 -right-1 bg-white text-black h-[.9rem] w-[.9rem] flex items-center justify-center text-sm">
              2
            </span>
            <ShoppingBagOutlined className="h-6 w-6 " />
          </div>
          <div className="flex items-center relative cursor-pointer">
            <span className="rounded-full absolute -top-1 -right-1 bg-white text-black h-[.9rem] w-[.9rem] flex items-center justify-center text-sm">
              2
            </span>
            <FavoriteBorder className="h-6 w-6" />
          </div>
          <div className="flex gap-1 cursor-pointer">
            <PersonOutline className="h-7 w-7" />
            {/* <span>منصوره فلاح</span> */}
          </div>
          <div
            className={`transition-opacity ease-in delay-1000 duration-1000`}
          >
            <div
              className="relative cursor-pointer"
              onClick={handleSearchClick}
            >
              <Search className="z-10 h-6 w-6" />
            </div>
            {showSearchInput && (
              <input
                type="search"
                placeholder="جستجو ..."
                className="text-sm w-96 pl-3 pr-9 py-3 border-2 border-solid rounded-xl absolute border-gray-300 bg-gray-50 focus:outline-none"
              />
            )}
          </div>
        </div>
        {/** LINKS */}
        <div className="hidden md:flex lg:gap-10 gap-4 justify-center text-white font-normal text-xs w-4/6">
          <Link href={""}>
            <ExpandMore /> دسته بندی
          </Link>
          <Link href={""}>
            <ExpandMore /> درباره ما
          </Link>
          <Link href={""}>
            <ExpandMore /> محصولات
          </Link>
          <Link href={""}>
            <ExpandMore /> فروشگاه
          </Link>
        </div>
        {/** LOGO */}
        <div className="flex flex-wrap justify-end w-1/6">
          <span className="font-bold text-3xl text-white ">SEVIN</span>
          {/* <Image src={logo} alt={"holder"} className="w-7 h-auto fill-current text-white" /> */}
        </div>
        {/** HIDDEN LINKS */}
        {openMenu && (
          <div>
            <MobileMenu />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeNavbar;
