import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PipesBackground from "@/components/PipesBackground";
import TechStack3 from "@/components/TechStack3";
import Margin from "@/components/Margin";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <About />
      <Margin />
      <TechStack3 />
      <Margin />
      <Projects />
      <Margin />
      <Experience />
      <Margin />
      <Education />
      <Margin />
      <Contact />
      <Margin />
      <Footer />
    </main>
  );
}
