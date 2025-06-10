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
          "bg-[#FAF4FA] min-h-screen overflow-scroll fixed border border-pink-500/50",
          "transition-all duration-300 ease-in-out",
          state === "expanded"
            ? "left-[256px] top-4 rounded-[20px_0_0_0] w-[calc(100%-256px)]"
            : "left-0 top-0 rounded-none border-none w-full"
        )}
      >
        <div className="h-full flex justify-center">
          <div className="w-[770px] h-[200vh] bg-amber-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Inset;
