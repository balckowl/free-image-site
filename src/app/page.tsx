import Header from "@/app/components/Header/Headar"
import Hero from "./components/Hero/Hero";
import SozaiList from "./components/SozaiList/SozaiList";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <SozaiList title="新しいイラスト"/>
      <Footer />
    </>
  );
}
