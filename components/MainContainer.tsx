"use client";

import { Navbar } from "./home/Navbar";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SectionObserver } from "./navigation/SectionObserver";
import { SectionBarItem } from "./navigation/SectionBarItem";
import { SectionBar } from "./navigation/SectionBar";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Skills } from "./skill/Skills";
import { Contact } from "./contact/Contact";

export const MainContainer = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className="flex flex-col h-full overflow-y-auto">
        <SectionObserver id="home">
          <div className="min-h-screen">
            <Navbar />
            <Home />
          </div>
        </SectionObserver>
        <SectionObserver id="about">
          <About />
        </SectionObserver>
        <SectionObserver id="projects">
          <Projects/>
        </SectionObserver>
        <SectionObserver id="skills">
          <Skills/>
        </SectionObserver>
        <SectionObserver id="contact">
          <Contact/>
        </SectionObserver>
        <SectionBar />
      </main>
    </AnimatePresence>
  );
};
