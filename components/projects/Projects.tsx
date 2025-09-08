import { SectionTitle } from "../default/SectionTitle";
import { MonitorCog } from "lucide-react";
import { useSectionStore } from "../stores/useSectionStore";
import { useEffect, useState } from "react";
import Carousel from "../ui/carousel";
import { slideData } from "../data/projects";

export const Projects = () => {
  const { currentSection, setCurrentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (currentSection === "about" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSection, hasAnimated]);
  return (
    <div className="bg-blue-400 dark:bg-secondary px-3 py-10 min-h-screen flex flex-col items-center">
      <SectionTitle label="Projetos" Icon={MonitorCog} />
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData}/> 
      </div>
    </div>
  );
};
