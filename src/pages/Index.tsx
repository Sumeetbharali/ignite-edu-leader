import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
import Team from "@/components/Team";
import Milestones from "@/components/Milestones";
import Corporate from "@/components/Corporate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Platform />
        <Team />
        <Milestones />
        <Corporate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
