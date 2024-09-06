"use client";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-5 bg-background text-foreground">
      <div className="flex gap-3 mb-5">
        <input
          type="text"
          placeholder="Priority"
          className="px-4 py-2 border rounded-md border-border bg-card text-card-foreground"
        />
        <select className="px-4 py-2 border rounded-md border-border bg-card text-card-foreground">
          <option>Age</option>
          {/* Add age options here */}
        </select>
        <select className="px-4 py-2 border rounded-md border-border bg-card text-card-foreground">
          <option>Disability</option>
        </select>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="bg-gray-200 h-96 w-full max-w-[32rem] items-center justify-center overflow-hidden p-8 rounded-md overflow-y-auto">
          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Priority List<span className="text-[#C5705D]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Co-Ordinate{" "}
              <span className="text-[#C5705D]">-19.88532 - 39.4181776</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>
                -&gt; 20+ min before Co-ordinate update.
                <span className="font-semibold text-[#C5705D]"> React</span>, .{" "}
                <br />
                -&gt; 90% High risk <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Co-Ordinate{" "}
              <span className="text-[#C5705D]">-19.88532 - 39.4181776</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>
                -&gt; 20+ min before Co-ordinate update.
                <span className="font-semibold text-[#C5705D]"> React</span>, .{" "}
                <br />
                -&gt; 90% High risk <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Co-Ordinate{" "}
              <span className="text-[#C5705D]">-19.88532 - 39.4181776</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>
                -&gt; 20+ min before Co-ordinate update.
                <span className="font-semibold text-[#C5705D]"> React</span>, .{" "}
                <br />
                -&gt; 90% High risk <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Co-Ordinate{" "}
              <span className="text-[#C5705D]">-19.88532 - 39.4181776</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>
                -&gt; 20+ min before Co-ordinate update.
                <span className="font-semibold text-[#C5705D]"> React</span>, .{" "}
                <br />
                -&gt; 90% High risk <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#C5705D"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
          </BoxReveal>
        </div>

        <div className="flex justify-between w-4/5 gap-5">
          <div className="flex items-center justify-center w-1/2 h-24 bg-card text-card-foreground">
            List
          </div>
          <div className="flex items-center justify-center w-1/2 h-24 bg-card text-card-foreground">
            Graph
          </div>
        </div>
      </div>
    </div>
  );
}
