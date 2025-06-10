"use client";
import React from "react";
import { useSidebar } from "./ui/sidebar";
import { cn } from "@/lib/utils";

const Inset = ({ children }: { children: React.ReactNode }) => {
  const { state } = useSidebar();

  return (
    <div className="w-full bg-sidebar">
      <div
        className={cn(
          "bg-[#FAF4FA] min-h-screen overflow-auto fixed",
          "transition-all duration-300 ease-in-out",
          // Mobile styles (applied by default)
          "left-0 top-0 w-full rounded-none",
          // Desktop styles

          // When sidebar is expanded on desktop
          state === "expanded"
            ? "md:left-[256px] md:rounded-tl-[20px] md:border top-4  md:border-pink-500/30 md:w-[calc(100%-256px)]"
            : "top-0"
        )}
      >
        <div className="h-full flex justify-center px-4 md:px-0">
          <div className="w-full max-w-[770px] min-w-0 h-[200vh] bg-amber-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inset;
