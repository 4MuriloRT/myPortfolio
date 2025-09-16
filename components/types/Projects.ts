export type Projects = {
    title: string;
    description: string;
    type: string;
    src: string;
    technologies: string[];
    image: string;
    links: {
        frontend?: string;
        backend?: string;
        deploy?: string;
    };
    button: string;
}