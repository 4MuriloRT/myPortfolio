import { MonitorCheck } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <p className="italic text-xl font-bold md:text-2xl">
        4MuriloRT
        <span className="text-primary animate-pulse">.dev</span>
      </p>
      <span>
        <MonitorCheck className="w-20px h-20px md:size-[30px] text-primary animate-pulse"/>
      </span>
    </div>
  );
};
