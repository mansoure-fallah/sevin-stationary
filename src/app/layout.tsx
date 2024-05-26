import type { Metadata } from "next";

import "./globals.css";
import HomeNavbar from "@/components/modules/navbar/homeNavbar";
import MainSlider from "@/components/modules/sliders/mainSlider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "@radix-ui/themes/styles.css";
import logo from "../public/assets/logoipsum-327.svg";
import { Theme } from "@radix-ui/themes";
import CategorySlider from "@/components/modules/sliders/categorySlider";

export const metadata: Metadata = {
  title: "لوازم تحریر سوین",
  description: "لوازم تحریر و فانتزیجات سوین",
  // must be link address
  icons: {
    icon: "../public/assets/logoipsum-327.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="h-screen w-screen">
        {/* <Theme> */}
        <HomeNavbar />

        {children}
        {/* </Theme> */}
      </body>
    </html>
  );
}
