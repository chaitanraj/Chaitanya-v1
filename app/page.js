import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechStack2 from "@/components/TechStack2";

export default function Home() {
  return (
    <main className="relative">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <TechStack />
      {/* <TechStack2 /> */}
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
