import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { fadeInUp, slowFadeInLeft } from "@/animations/fadeIn";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FileUser, ArrowBigDownDashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSectionStore } from "../stores/useSectionStore";

export const Home = () => {
  const { currentSection, setCurrentSection } = useSectionStore();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (currentSection === "home" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSection, hasAnimated]);

  return (
    <div className="relative w-full min-h-screen bg-blue-400 dark:bg-secondary overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-16 lg:px-32 items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex justify-center"
      >
        <Avatar className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-150 lg:h-150 border-4 border-sky-500">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/96546157"
            alt="foto perfil"
          />
          <AvatarFallback>MT</AvatarFallback>
        </Avatar>
      </motion.div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Murilo Rodrigues Taborda
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slowFadeInLeft}
          className="text-primary font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <Typewriter
            words={[
              "Programador Front-End",
              "Desenvolvedor Web",
              "Desenvolvedor Mobile",
              "Técnico em Informática",
              "Amante de técnologia",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl"
        >
          Desenvolvedor Front-End especialista em criar interfaces intuitivas e
          de alta performance com React.js, Next.js, TypeScript e Tailwind. Com
          formação técnica e atualmente cursando Sistemas de Informação, busco
          desafios para oferecer a melhor experiência ao usuário através de
          código limpo e escalável.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            className="text-lg sm:text-xl md:text-2xl h-12 sm:h-14 w-48 sm:w-60 p-4 mt-3 font-bold bg-blue-500 shadow-lg shadow-blue-500/50"
            asChild
          >
            <a
              href="/Curriculo Desenvolvedor - Murilo Taborda.pdf"
              download="Curriculo Desenvolvedor - Murilo Taborda.pdf"
              className="flex items-center justify-center gap-2"
            >
              Baixar CV
              <FileUser style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>
        </motion.div>
      </div>
      <div
        className="flex justify-end w-full relative left-19 cursor-pointer animate-bounce"
        onClick={handleScrollToNextSection}
      >
        <ArrowBigDownDashIcon size={90} />
      </div>
    </div>
  );
};
