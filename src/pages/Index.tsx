import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AdminFab from "@/components/AdminFab";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <Experience />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <AdminFab />
    </div>
  );
};

export default Index;