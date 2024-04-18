import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Just4 from "./components/Just4";
import Location from "./components/Location";
import MenuMobile from "./components/MenuMobile";
import Navbar from "./components/Navbar";
import Sentence from "./components/Sentence";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <CTA />
        <Just4 />
        <Sentence />
        <Contact />
        <Location />
      </main>
      <Footer />
      <MenuMobile />
    </>
  );
}
