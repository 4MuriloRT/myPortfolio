import { motion } from "framer-motion";
import { SectionTitle } from "../default/SectionTitle";
import { MonitorCog } from "lucide-react";
import { useSectionStore } from "../stores/useSectionStore";
import { useEffect, useState } from "react";
import Carousel from "../ui/carousel";
import { slideData } from "../data/projects";
import { fadeInDown, fadeInUp } from "@/animations/fadeIn";

export const Projects = () => {
  const { currentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (currentSection === "projects" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSection, hasAnimated]);
  return (
    <div className="px-3 py-10 min-h-screen flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : ""}
        variants={fadeInUp}
      >
        <SectionTitle label="Projetos" Icon={MonitorCog} />
      </motion.div>
      <div className="relative overflow-hidden w-full h-full py-20">
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : ""}
          variants={fadeInDown}
        >
          <Carousel slides={slideData} />
        </motion.div>
      </div>
    </div>
  );
};
