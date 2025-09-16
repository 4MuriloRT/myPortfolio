import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { fadeInUp, slowFadeInLeft } from "@/animations/fadeIn";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FileUser, ArrowBigDownDashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSectionStore } from "../stores/useSectionStore";
import { BackgroundGradient } from "../ui/background-gradient";
import { AnimatedButton } from "@/components/ui/animated-button";

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
        <BackgroundGradient>
          <Avatar className="w-38 h-38 sm:w-60 sm:h-60 md:w-82 md:h-82 lg:w-100 lg:h-100 ">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/96546157"
              alt="foto perfil"
            />
            <AvatarFallback>MT</AvatarFallback>
          </Avatar>
        </BackgroundGradient>
      </motion.div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Murilo Rodrigues Taborda
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slowFadeInLeft}
          className="text-primary font-bold text-lg sm:text-2lg md:text-xl lg:text-2xl"
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
          className="text-base sm:text-sm md:text-lg lg:text-xl text-muted-foreground max-w-xl"
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
          <AnimatedButton
            className="text-lg sm:text-xl md:text-sm h-12 sm:h-10 w-48 sm:w-40 p-4 mt-3 font-bold bg-blue-500 text-white"
            variant="default"
            size="default"
            glow={true}
            textEffect="normal"
            uppercase={true}
            rounded="custom"
            asChild={false}
            hideAnimations={false}
            shimmerColor="#1784af"
            shimmerSize="0.15em"
            shimmerDuration="3s"
            borderRadius="100px"
            background="#030d14"
          >
            <a
              href="/Curriculo Desenvolvedor - Murilo Taborda.pdf"
              download="Curriculo Desenvolvedor - Murilo Taborda.pdf"
              className="flex items-center justify-center gap-2"
            >
              Baixar CV
              <FileUser style={{ width: "20px", height: "20px" }} />
            </a>
          </AnimatedButton>
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
