import React, { useEffect, useRef } from "react";
import { useSectionStore } from "../stores/useSectionStore";
import { Section } from "../types/Section";

type SectionProps = {
  id: Section["id"];
  children: React.ReactNode;
};

export const SectionObserver = ({ id, children }: SectionProps) => {
  const setCurrentSection = useSectionStore((state) => state.setCurrentSection);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(id);
        }
      },
      {
        threshold: 0.2, 
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [id, setCurrentSection]);

  return (
    <section id={id} ref={sectionRef}>
      {children}
    </section>
  );
};
