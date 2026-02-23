import { motion } from "framer-motion";
import { UserSearchIcon } from "lucide-react";
import { SectionTitle } from "../default/SectionTitle";
import { useEffect, useState } from "react";
import { useSectionStore } from "../stores/useSectionStore";
import { fadeInUp, slowFadeInLeft, slowFadeInRight } from "@/animations/fadeIn";
import { education } from "../data/education";
import { experiences } from "../data/experiences";
import { CardEducation } from "./CardEducation";
import { SubTitle } from "../default/SubTitle";
import { BackgroundGradientForm } from "../ui/background-gradient-formacao";
import { BackgroundGradientExpi } from "../ui/background-gradient-experience";

export const About = () => {
  const { currentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (currentSection === "about" && !hasAnimated) {
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
        <SectionTitle label="Sobre Mim" Icon={UserSearchIcon} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : ""}
        variants={slowFadeInLeft}
        className="mt-10 text-sm text-muted-foreground inline-block lg:mt-10 lg:max-w-[1080px] lg:text-xl"
      >
        Olá, sou Murilo Rodrigues Taborda. Há 3 anos, mergulhei no universo da
        programação e descobri minha vocação: criar e dar vida a interfaces
        digitais. Nessa jornada, entendi que ser desenvolvedor vai além de
        escrever código, trata-se de ser um solucionador de problemas,
        encontrando os caminhos mais elegantes e eficientes para cada desafio.
        <br />
        <br />
        Valorizo profundamente ambientes colaborativos, atuando como uma ponte
        entre a visão criativa de designers e a lógica de desenvolvedores
        back-end. Acredito que essa sinergia é fundamental para construir
        produtos coesos, que atendam tanto aos objetivos de negócio quanto às
        expectativas dos usuários.
        <br />
        <br />
        Movido por essa mentalidade, estou em um processo contínuo de
        aprendizado para expandir minhas competências e me tornar um
        desenvolvedor Full-Stack. Meu objetivo é ter uma visão holística do
        desenvolvimento para criar aplicações cada vez mais robustas, eficientes
        e que proporcionem uma experiência de usuário excepcional.
      </motion.div>
      <div className="mt-15">
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : ""}
          variants={slowFadeInRight}
          className="flex justify-center gap-4 items-center"
        >
          <SubTitle label="Formações" color="#6959CD" />
          <SubTitle label="&" color="" />
          <SubTitle label="Experiências" color="#48D1CC" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mr-8 ml-8">
        <div>
          {education.map((edu, index) => (
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : ""}
              variants={slowFadeInLeft}
              className="mb-10"
              key={index}
            >
              <BackgroundGradientForm>
                <CardEducation education={edu} />
              </BackgroundGradientForm>
            </motion.div>
          ))}
        </div>
        <div>
          {experiences.map((exp, index) => (
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : ""}
              variants={slowFadeInRight}
              key={index}
              className="mb-10"
            >
              <BackgroundGradientExpi>
                <CardEducation education={exp} />
              </BackgroundGradientExpi>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
