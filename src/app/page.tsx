import Header from "@/app/components/Header/Headar"
import Hero from "./components/Hero/Hero";
import ImageList from "./components/ImageList/ImageList";
import CategorList from "./components/CategoryList/CategorList";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <ImageList />
    </>
  );
}
