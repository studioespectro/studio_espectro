import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Just4 from "./components/Just4";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Sentence from "./components/Sentence";
import {
  FilsonPro,
  NewOrder,
  LeagueSpartan,
  HeadLineA,
  YellowTail,
} from "./helpers/fonts";

export default function Home() {
  return (
    <main
      className={`${FilsonPro.variable} ${LeagueSpartan.variable} ${HeadLineA.variable} ${YellowTail.variable} ${NewOrder.variable}`}
    >
      <Navbar />
      <Header />
      <CTA />
      <Just4 />
      <Sentence />
      <Location />
      <Contact />
    </main>
  );
}
