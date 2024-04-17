import { Fragment } from "react";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import DivisorDown from "./components/DivisorDown";
import DivisorUp from "./components/DivisorUp";
import Footer from "./components/Footer";
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
    <Fragment
      className={`${FilsonPro.variable} ${LeagueSpartan.variable} ${HeadLineA.variable} ${YellowTail.variable} ${NewOrder.variable}`}
    >
      <Navbar />
      <main
        className={`${FilsonPro.variable} ${LeagueSpartan.variable} ${HeadLineA.variable} ${YellowTail.variable} ${NewOrder.variable}`}
      >
        <Header />
        <CTA />
        <Just4 />
        <Sentence />
        <Contact />
        <Location />
      </main>
      <Footer />
    </Fragment>
  );
}
