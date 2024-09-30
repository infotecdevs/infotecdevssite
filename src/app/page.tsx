"use client";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills/index";
import Experience from "@/components/Experience/index";
import Footer from '@/components/Footer/Index';
import Blog from '@/components/Blog';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}
