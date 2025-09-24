import { Projects } from "../types/Projects";

export const slideData : Projects[] = [
    {
        title: "Clinc Plus",
        description: "Plataforma SaaS (Software as a Service) desenvolvida para otimizar a gestão de pequenas clínicas, centralizando agendamentos e informações de pacientes.",
        type: "Full-Stack",
        src:"/clincplus/Carrossel_ClincPlus.png",
        technologies: ["React","Next.js","TailwindCSS", "Zod", "Shadcn-ui", "Node.js", "DrizzleORM"],
        image: "/clincplus/Dialog_ClinPlus.png",
        links:{
            frontend: "https://github.com/4MuriloRT/clinic-plus",
            backend: "https://github.com/4MuriloRT/clinic-plus",
            deploy: "doutor-agenda-plum.vercel.app",
        },
        button: "Ver Mais",
    },
    {
        title: "Terra Mobile",
        description: "Aplicativo mobile para o Terra Manager, permitindo que gestores de fazendas acessem e controlem operações agrícolas essenciais diretamente do campo, como tarefas e inventário.",
        type: "Mobile",
        src:"/terramobile/Carrosel_TerraMobile.png",
        technologies: ["React Native", "Expo", "TypeScript", "NextJS", "StyleSheet"],
        image: "/terramobile/Dialog_TerraMobile.png",
        links:{
            frontend: "https://github.com/4MuriloRT/Terra-Mobile",
            backend: "https://github.com/KarMiguel/terra_manager-backend",
        },
        button: "Ver Mais",
    },
    {
        title: "Rick and Morty API",
        description: "Aplicação front-end interativa que consome a API pública de Rick and Morty, permitindo explorar e pesquisar personagens, episódios e localizações do universo da série.",
        type: "Front-End",
        src:"/rickandmorty/Carrosel_RickandMorty.png",
        technologies: ["React","Next.js","CSS", "Axios"],
        image: "/rickandmorty/Dialog_RickandMorty.png",
        links:{
            frontend: "https://github.com/4MuriloRT/rick-and-morty-api",
            deploy: "https://rick-and-morty-api-blush.vercel.app",
        },
        button: "Ver Mais",
    },
    {
        title: "Prime Flix",
        description: "Interface web inspirada em serviços de streaming, utilizando a API do The Movie Database (TMDB) para exibir catálogos de filmes, detalhes, trailers e avaliações.",
        type: "Front-End",
        src:"/primeflix/Carrosel_PrimeFlix.png",
        technologies: ["React","Next.js","CSS", "Axios"],
        image: "/primeflix/Dialog_PrimeFlix.png",
        links:{
            frontend: "https://github.com/4MuriloRT/PrimeFlix",
            deploy: "https://prime-flix-sepia.vercel.app/",
        },
        button: "Ver Mais",
    },
]