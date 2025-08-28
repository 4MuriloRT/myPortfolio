"use client";

import { Navbar } from "./home/Navbar";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SectionObserver } from "./navigation/SectionObserver";

export const MainContainer = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className="flex flex-col h-full overflow-hidden">
        <SectionObserver id="home">
          <div className="min-h-screen">
            <Navbar/>
          </div>
        </SectionObserver>
      </main>
    </AnimatePresence>
  );
};
