import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ExperienceEducation from "./_components/ExperienceEducation";
import { Service } from "./_components/Service";
import Contact from "./_components/Contact";
import About from "./_components/About";

export default function Home() {
  return (
    <main class='dark'>
      <Header />
      <Hero />
      <Service />
      <ExperienceEducation />
      <About />
      <Contact />
    </main>
  );
}
