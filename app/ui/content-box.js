"use client";
import Tilt from "react-parallax-tilt";

export default function ContentBox({ breakpoint, content }) {
  return (
    <Tilt
      tiltEnable={breakpoint !== "xl" && breakpoint !== "2xl" ? false : true}
      perspective={2000}
      tiltReverse={true}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="order-last lg:order-none w-full h-full"
    >
      <div className="w-full h-full border-2 border-double border-primary bg-primaryDark/80 p-5 text-2xl">
        {content}
      </div>
    </Tilt>
  );
}
