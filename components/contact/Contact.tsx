import { motion } from "framer-motion";
import { useSectionStore } from "../stores/useSectionStore";
import { fadeInUp, slowFadeInLeft, slowFadeInRight } from "@/animations/fadeIn";
import { useEffect, useState } from "react";
import { SectionTitle } from "../default/SectionTitle";
import { LucideContact } from "lucide-react";

export const Contact = () => {
  const { currentSection, setCurrentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (currentSection === "contact" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSection, hasAnimated]);

  return (
    <div className=" px-3 py-10 min-h-screen flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : ""}
        variants={fadeInUp}
      >
        <SectionTitle label="Contato" Icon={LucideContact} />
      </motion.div>
    </div>
  );
};
