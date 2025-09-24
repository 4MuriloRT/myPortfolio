import { useState } from "react";
import { SlideData } from "../ui/carousel2";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { XIcon, Github, Globe } from "lucide-react";
import { Badge } from "../ui/badge";

type Props = {
  slide: SlideData;
};

export const DialogProjects = ({ slide }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-6 cursor-pointer" onClick={() => setOpen(true)}>
          {slide.button}
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[95vw] lg:max-w-4xl p-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] text-white">
        <div className="max-h-[95vh] flex flex-col overflow-x-hidden">
          <DialogHeader className="p-4 border-b border-border sticky top-0 z-10 flex-row items-center justify-between bg-[#0f0f0f]/80 backdrop-blur-sm">
            <DialogTitle className="text-wrap break-words text-lg sm:text-xl">
              {slide.title}
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <XIcon className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogHeader>
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="w-full flex-col justify-center items-start">
                <Image
                  width={500}
                  height={500}
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {slide.links.frontend && (
                      <a
                        href={slide.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          <Github className="mr-2 h-4 w-4" /> Frontend
                        </Button>
                      </a>
                    )}
                    {slide.links.backend && (
                      <a
                        href={slide.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          <Github className="mr-2 h-4 w-4" /> Backend
                        </Button>
                      </a>
                    )}
                    {slide.links.deploy && (
                      <a
                        href={slide.links.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          <Globe className="mr-2 h-4 w-4" /> Deploy
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-2 ">
                  <h3 className="text-lg font-semibold text-primary">
                    Tipo do Projeto:
                  </h3>
                  <Badge variant="outline" className="text-sm">
                    {slide.type}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    Sobre o Projeto
                  </h3>
                  <DialogDescription className="break-words text-wrap text-sm sm:text-base text-muted-foreground">
                    {slide.description}
                  </DialogDescription>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Tecnologias Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {slide.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
