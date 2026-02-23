import { motion } from "framer-motion";
import { useSectionStore } from "../stores/useSectionStore";
import { fadeInUp, slowFadeInLeft, slowFadeInRight } from "@/animations/fadeIn";
import { useEffect, useState } from "react";
import { SectionTitle } from "../default/SectionTitle";
import { LucideContact } from "lucide-react";
import { MessageArea } from "./MessageArea";
import { SocialMediaArea } from "./SocialMediaArea";


export const Contact = () => {
  const { currentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (currentSection === "contact" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSection, hasAnimated]);

  return (
    <div className=" bg-gray-800 px-3 py-10 flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : ""}
        variants={fadeInUp}
      >
        <SectionTitle label="Contato" Icon={LucideContact} />
      </motion.div>
      
      <div className="flex max-w-[1100px] w-full flex-wrap gap mt-16">
        <motion.div 
          className="flex-1"
          initial="hidden"
          animate={hasAnimated ? 'visible' : ''}
          variants={slowFadeInLeft}
        >
          <MessageArea />
        </motion.div>
        <motion.div 
          initial="hidden"
          animate={hasAnimated ? 'visible' : ''}
          variants={slowFadeInRight}
        >
          <SocialMediaArea />
        </motion.div>
      </div>      
      <motion.div
        initial="hidden"
        animate={hasAnimated ? 'visible' : ''}
        variants={fadeInUp}
        className="mt-16 text-muted-foreground"
      >
        Criado com muito tempo e café por Murilo R Taborda ☕
      </motion.div>
    </div>
  );
};
