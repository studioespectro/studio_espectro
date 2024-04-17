import CTA from "./components/CTA";
import ComingSoon from "./components/ComingSoon";
import Header from "./components/Header";
import Just4 from "./components/Just4";
import Navbar from "./components/Navbar";
import Sentence from "./components/Sentence";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <CTA />
      <Just4 />
      <Sentence />
    </main>
  );
}
