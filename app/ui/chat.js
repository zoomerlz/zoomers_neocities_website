"use client";
import Tilt from "react-parallax-tilt";

export default function Chat({ breakpoint }) {
  return (
    <Tilt
      tiltEnable={breakpoint !== "xl" && breakpoint !== "2xl" ? false : true}
      perspective={2000}
      tiltReverse={true}
      tiltMaxAngleX={5}
      tiltMaxAngleY={15}
      className="order-last lg:order-none w-full h-full"
    >
      <div className="w-full h-full border-2 border-double border-primary bg-primaryDark/80 p-5 text-2xl">
        <h1>This is the chat</h1>
      </div>
    </Tilt>
  );
}
