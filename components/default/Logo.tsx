import { MonitorCheck } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <p className="italic text-2xl font-bold md:text-4xl">
        4MuriloRT
        <span className="text-blue-500 animate-pulse">.dev</span>
      </p>
      <span>
        <MonitorCheck className="w-30px h-30px md:size-[40px] text-blue-500 animate-pulse"/>
      </span>
    </div>
  );
};
