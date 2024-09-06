"use client";
import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import store from "../store/store";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Globe from "@/components/magicui/globe";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import HyperText from "@/components/magicui/hyper-text";
import PulsatingButton from "@/components/magicui/pulsating-button";

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const AdminPanel = ({ className }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 1;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  const { filters, setFilter, sosMessages, addSosMessage } = store();
  const router = useRouter();

  const handleEvacuationClick = () => {
    router.push("/evac");
  };
  return (
    <div className="min-h-screen bg-gray-100 p-5 px-20">
      <ImageSlider />

      <div className="flex justify-center md:flex-row gap-4 mb-5">
        <PulsatingButton onClick={handleEvacuationClick}>
          Evacution
        </PulsatingButton>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <Input
          type="text"
          placeholder="Filter"
          onChange={(e) => setFilter("filter", e.target.value)}
        />
        <select
          className="border p-2 rounded-md text-gray-700"
          value={filters.country}
          onChange={(e) => setFilter("country", e.target.value)}
        >
          <option value="">State</option>
          <option value="India">Rajasthan</option>
          <option value="USA">Meghalya</option>
          {/* Add more country options */}
        </select>
        <select
          className="border p-2 rounded-md text-gray-700"
          value={filters.disaster}
          onChange={(e) => setFilter("disaster", e.target.value)}
        >
          <option value="">Disaster</option>
          <option value="Flood">Flood</option>
          <option value="Earthquake">Earthquake</option>
        </select>
      </div>

      <div className="relative w-auto mb-5 pb-10">
        <div className="  w-full h-auto flex justify-center items-center">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Thret
            </span>
            <Globe className="top-28" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </div>
      </div>

      {/* Bottom Cards/Sections */}
      <div className="flex flex-col md:flex-row gap-4 flex-wrap">
        <div className="h-auto flex-1 rounded-md p-4 flex justify-center items-center">
          <div className="w-3/4 md:w-1/2 gap-10 items-center justify-center flex flex-col">
            <HyperText
              className="text-4xl font-bold text-black dark:text-white"
              text="Threat Level"
            />
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={value}
              gaugePrimaryColor="rgb(79 70 229)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            />
          </div>
        </div>
        <div className="h-auto flex-1 rounded-md p-4">
          <div
            className={cn(
              "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
              className
            )}
          >
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
