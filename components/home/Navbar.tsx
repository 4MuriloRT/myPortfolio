import { Section } from "../types/Section";
import { sections } from "../data/sections";
import { useSectionStore } from "../stores/useSectionStore";
import { Logo } from "../default/Logo";
import { NavItem } from "../navigation/NavItem";
import { motion } from "framer-motion";
import { slowFadeInLeft } from "@/animations/fadeIn";
import { ThemeToggle } from "../theme-toggle";
import { MenuTrigger } from "../navigation/MenuTrigger";

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
    <header className="dark:bg-secondary fixed top-0 left-0 right-0 z-40 lg:static">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slowFadeInLeft}
        className={`flex items-center transition-all ease-in`}
        style={{
          padding:
            currentSection != "home" && window.innerWidth < 768
              ? "10px"
              : "20px",
        }}
      >
        <div className="h-8 flex items-center mx-auto px-4">
          <Logo />
        </div>
        <nav className="flex-1 hidden lg:flex justify-center items-center space-x-7 mx-auto">
          {sections.map((section, index) => (
            <NavItem
              key={index}
              section={section}
              onClick={handleScrollToSection}
            />
          ))}
        </nav>
        <div className="hidden lg:block">
          <ThemeToggle positionTop="10" positionRight="10" />
        </div>
        <MenuTrigger />
      </motion.div>
    </header>
  );
};
