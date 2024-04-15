import Hero from "@/components/Hero";
import Skills from "@/components/Skills/index";
import Experience from "@/components/Experience/index";
import Footer from '@/components/Footer/Index';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <Skills />
      <Experience />
      <Blog />
      <Footer />
    </div>
  );
}
