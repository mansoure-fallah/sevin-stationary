import Button from "@/components/modules/Button/Button";
import HomeNavbar from "@/components/modules/navbar/homeNavbar";
import Navbar from "@/components/modules/navbar/navbar";
import CategorySlider from "@/components/modules/sliders/categorySlider";
import MainSlider from "@/components/modules/sliders/mainSlider";

export default function Home() {
  return (
    <main>
      <MainSlider />
      <CategorySlider />
    </main>
  );
}
