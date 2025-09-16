import { Section } from "../types/Section";
import { sections } from "../data/sections";
import { useSectionStore } from "../stores/useSectionStore";
import { Logo } from "../default/Logo";
import { NavItem } from "../navigation/NavItem";
import { motion } from "framer-motion";
import { slowFadeInLeft } from "@/animations/fadeIn";
import { ModeToggle } from "../theme-toggle";

export const Navbar = () => {
  const { currentSection, setCurrentSection } = useSectionStore();

  const handleScrollToSection = (sectionId: Section["id"]) => {
    setCurrentSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full lg:static border-b">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slowFadeInLeft}
        className="flex items-center justify-between transition-all ease-in"
      >
        <div className="h-15 flex items-center mx-auto px-4">
          <Logo />
        </div>
        <nav className="flex items-center space-x-7 mx-auto">
          {sections.map((section, index) => (
            <NavItem
              key={index}
              section={section}
              onClick={handleScrollToSection}
            />
          ))}
        </nav>
        <div className="mr-10">
          <ModeToggle />
        </div>
      </motion.div>
    </header>
  );
};
