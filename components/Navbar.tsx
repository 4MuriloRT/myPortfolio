import { UserRound, MonitorCog, Contact, FileCode2} from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-20 flex items-center justify-between mx-auto px-4">
        <span className="flex font-bold text-3xl">MuriloRT.dev</span>
        <nav className="hidden md:flex space-x-7 text-2xl font-medium">
          <button className="flex gap-1 cursor-pointer transition-colors hover:text-foreground/80"><UserRound/> Sobre</button>
          <button className="flex gap-1 cursor-pointer transition-colors hover:text-foreground/80"><MonitorCog/>Projetos</button>
          <button className="flex gap-1 cursor-pointer transition-colors hover:text-foreground/80"><FileCode2/>Habilidades</button>
          <button className="flex gap-1 cursor-pointer transition-colors hover:text-foreground/80"><Contact/>Contatos</button>
        </nav>
      </div>
    </header>
  );
}
