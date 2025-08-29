import { Section } from "../types/Section";
import { sections } from "../data/sections";
import { useSectionStore } from "../stores/useSectionStore";
import { Logo } from "../default/Logo";
import { NavItem } from "../navigation/NavItem";

export const Navbar = () => {
  const { currentSection, setCurrentSection } = useSectionStore();
  const handleScrollToSection = (sectionId: Section['id']) => {
        setCurrentSection(sectionId);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-20 flex items-center justify-between mx-auto px-4">
        <Logo/>
        <nav className="hidden md:flex space-x-7 text-2xl font-medium">
          {sections.map((section, index) => (
            <NavItem 
              key={index}
              section={section}
              onClick={handleScrollToSection}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
