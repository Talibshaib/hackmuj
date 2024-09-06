"use client";
import React from "react";

import { cn } from "@/lib/utils";

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-[#C5705D] dark:bg-[#C5705D] px-12 py-6",
        className
      )}
      style={{
        "--pulse-color": pulseColor,
        "--duration": duration,
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
