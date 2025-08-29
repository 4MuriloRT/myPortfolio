import { useSectionStore } from "../stores/useSectionStore";
import { Section } from "../types/Section";

type Props = {
  section: Section;
  onClick: (sectionId: Section["id"]) => void;
};

export const NavItem = ({ section, onClick }: Props) => {
  const { currentSection } = useSectionStore();

  return (
    <div
      className={`flex items-center gap-2 pb-1 text-lg font-semibold cursor-pointer border-b-2 border-transparent lg:text-2xl
        hover:border-blue-500 hover:text-primary transition-all ease-in 
        ${
          currentSection === section.id ? "border-blue-500 text-primary" : ""
        }`}
      onClick={() => onClick(section.id)}
    >
      {section.Icon && <section.Icon />}
      {section.label}
    </div>
  );
};
