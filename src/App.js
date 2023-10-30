import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Counter from "./components/counter/Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
