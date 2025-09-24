import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSectionStore } from "../stores/useSectionStore";
import { fadeInUp } from "@/animations/fadeIn";
import { SectionTitle } from "../default/SectionTitle";
import { ChartNetworkIcon } from "lucide-react";
import { Tabs } from "../ui/tabs";
import { tabs } from "./TabsSkills";

export const Skills = () => {
  const { currentSection, setCurrentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (currentSection === "skills" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSection, hasAnimated]);
  return (
    <div className="bg-blue-400 dark:bg-secondary px-3 py-10 min-h-screen flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : ""}
        variants={fadeInUp}
      >
        <SectionTitle label="Habilidades" Icon={ChartNetworkIcon} />
      </motion.div>

      <div className="max-w-5xl w-full items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};
