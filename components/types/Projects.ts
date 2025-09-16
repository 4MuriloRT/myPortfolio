export type Projects = {
    title: string;
    description: string;
    type: string;
    src: string;
    technologies: string[];
    images: string[];
    links: {
        frontend?: string;
        backend?: string;
        deploy?: string;
    };
    button: string;
}