import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { fadeInUp, slowFadeInLeft } from "@/animations/fadeIn";

export const Home = () => {
  return (
    <div className="flex relative w-full h-full lg:h-[calc(100vh-90px)] bg-blue-400 dark:bg-secondary overflow-hidden">
      <div className="bg-amber-300 w-1/2">
        <h1>Avatar</h1>
      </div>
      <div className="bg-violet-400 w-1/2 flex flex-col items-center justify-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-4xl lg:text-5xl font-bold">Murilo Taborda</h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slowFadeInLeft}
          className="font-bold mt-3 lg:text-4xl"
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
          className="mt-10 text-lg text-muted-foreground"
        >
          Como Desenvolvedor Front-End, meu objetivo é transformar ideias em
          interfaces <br />
          intuitivas e de alta performance. Utilizo tecnologias modernas como
          React.js, Next.js, <br />
          TypeScript e Tailwind para garantir soluções eficientes e escaláveis.
          Com uma base <br />
          sólida de Técnico em Informática e atualmente aprimorando meus
          conhecimentos no <br />
          Bacharelado em Sistemas de Informação (IFNMG), estou sempre em busca
          de desafios que <br />
          me permitam criar a melhor experiência possível para o usuário final
          através de código <br />
          limpo e boas práticas.
        </motion.p>
      </div>
    </div>
  );
};
