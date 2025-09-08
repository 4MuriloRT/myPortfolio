import { Projects } from "../types/Projects";

export const slideData : Projects[] = [
    {
        title: "Clinc Plus",
        description: "O ClincPlus e um SASS de gerencimento para pequenas clinicas medicas",
        type: "Full-Stack",
        src: "public/ClincPlus.png",
        technologies: ["React","Next.js","TailwindCSS", "Zod", "Shadcn-ui", "Node.js", "DrizzleORM"],
        links:{
            frontend: "https://github.com/4MuriloRT/clinic-plus",
            backend: "https://github.com/4MuriloRT/clinic-plus",
            deploy: "doutor-agenda-plum.vercel.app",
        },
        button: "Ver Mais",
    }
]