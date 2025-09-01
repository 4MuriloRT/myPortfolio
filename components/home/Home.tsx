import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { fadeInUp, slowFadeInLeft } from "@/animations/fadeIn";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Home = () => {
  return (
    <div className="flex relative w-full h-full lg:h-[calc(100vh-90px)] bg-blue-400 dark:bg-secondary overflow-hidden">
      <div className="flex justify-center items-center w-1/2 pl-70">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Avatar className="w-120 h-120 border-primary border-4">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/96546157"
              alt="foto perfil"
            ></AvatarImage>
            <AvatarFallback>MT</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
      <div className=" w-1/2 flex flex-col items-center justify-center pr-80">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Murilo Rodrigues Taborda
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slowFadeInLeft}
          className="text-primary font-bold mt-3 lg:text-4xl"
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
          className="mt-15 w-1/2 text-2xl text-muted-foreground text-center"
        >
          Desenvolvedor Front-End especialista em criar interfaces intuitivas e
          de alta performance com React.js, Next.js, TypeScript e Tailwind. Com
          formação técnica e atualmente cursando Sistemas de Informação, busco
          desafios para oferecer a melhor experiência ao usuário através de
          código limpo e escalável.
        </motion.p>
      </div>
    </div>
  );
};
