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

  const bgByGroup: Record<string, string> = {
    frontend: "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600",
    backend: "bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600",
    corporate: "bg-gradient-to-br from-pink-600 via-orange-500 to-red-500",
    other: "bg-gradient-to-br from-gray-600 via-slate-700 to-zinc-900",
  };

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

      <div className="  md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};
