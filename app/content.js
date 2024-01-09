"use client";
import Tilt from "react-parallax-tilt";

export default function Content() {
  return (
    <Tilt
      scale={0.95}
      perspective={2000}
      tiltReverse={true}
      trackOnWindow={true}
      tiltMaxAngleX={15}
      className="order-last lg:order-none w-full h-full"
    >
      <div className="w-full h-full border-2 border-primary bg-primaryDark">
        <h1 className="text-primary">This is the main content</h1>
      </div>
    </Tilt>
  );
}
