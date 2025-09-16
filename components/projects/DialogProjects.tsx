import { useState } from "react";
import { SlideData } from "../ui/carousel2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

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
      <DialogContent className="w-full max-w-[95vw] md:min-w-full lg:min-w-[800px] p-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] text-white">
        <div className="max-h-[95vh] flex flex-col overflow-x-hidden">
          {/* Cabeçalho fixo */}
          <DialogHeader className="p-6 border-b border-border sticky top-0 z-10 flex-row justify-between">
            <DialogTitle className="text-wrap break-words">
              {slide.title}
            </DialogTitle>
          </DialogHeader>

          {/* Conteúdo rolável */}
          <div className="overflow-y-auto px-4 sm:px-6 py-4 space-y-6 w-full">
            <div className="w-full flex overflow-hidden justify-center items-center">
              <Image width={500} height={500} src={slide.images[0]} alt={slide.title} />
            </div>
            <div className="space-y-5">
              <DialogDescription className="break-words text-wrap text-sm sm:text-base">
                {slide.description}
              </DialogDescription>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
