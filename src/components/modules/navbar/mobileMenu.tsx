import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";

function MobileMenu() {
  const listVariants = {
    closed: {
      x: "8rem",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <motion.div
        variants={listVariants}
        initial="closed"
        animate="opened"
        className="flex flex-col h-[100vh] w-72 fixed top-0 right-0 gap-4 justify-center items-center bg-black text-white font-normal text-base"
      >
        <motion.div variants={listItemVariants}>
          <Link href={""}>
            <ExpandMore /> دسته بندی
          </Link>
        </motion.div>
        <motion.div variants={listItemVariants}>
          <Link href={""}>
            <ExpandMore /> درباره ما
          </Link>
        </motion.div>
        <motion.div variants={listItemVariants}>
          <Link href={""}>
            <ExpandMore /> محصولات
          </Link>
        </motion.div>
        <motion.div variants={listItemVariants}>
          <Link href={""}>
            <ExpandMore /> فروشگاه
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MobileMenu;
