import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSectionStore } from "../stores/useSectionStore";
import { fadeInUp } from "@/animations/fadeIn";
import { SectionTitle } from "../default/SectionTitle";
import { ChartNetworkIcon } from "lucide-react";
import { Tabs } from "../ui/tabs";
import { tabs } from "./TabsSkills";
import { skills } from "../data/skills";
import { FocusCards } from "../ui/focus-cards";

export const Skills = () => {
  const { currentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");

  const groups = [
    { title: "Front-end", value: "frontend" },
    { title: "Back-end", value: "backend" },
    { title: "Outras", value: "other" },
    { title: "Corporativas", value: "corporate" },
  ];

  useEffect(() => {
    if (currentSection === "skills" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSection, hasAnimated]);

  return (
    <div className="px-3 py-12 mb-20 min-h-screen flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : ""}
        variants={fadeInUp}
      >
        <SectionTitle label="Habilidades" Icon={ChartNetworkIcon} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : ""}
        variants={fadeInUp}
        className="hidden md:flex md:h-[50rem] [perspective:1000px] relative flex-col max-w-5xl mx-auto w-full items-start justify-start my-10"
      >
        <Tabs tabs={tabs} />
      </motion.div>

      <div className="flex md:hidden flex-col w-full max-w-sm mx-auto mt-8 gap-6">
        <div className="flex flex-wrap justify-center gap-2">
          {groups.map((group) => (
            <button
              key={group.value}
              onClick={() => setActiveTab(group.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeTab === group.value
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        <div className="w-full">
          <FocusCards
            cards={skills
              .filter((s) => s.group === activeTab)
              .map((s) => ({
                title: s.title,
                description: s.description,
                src: s.src,
              }))}
          />
        </div>
      </div>
    </div>
  );
};
