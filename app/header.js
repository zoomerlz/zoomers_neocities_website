"use client";
import Tilt from "react-parallax-tilt";

export default function Header() {
  return (
    <Tilt
      scale={1}
      perspective={2000}
      tiltReverse={true}
      trackOnWindow={true}
      tiltMaxAngleX={10}
      className="order-last lg:order-none w-full h-full"
    >
      <div className="w-full h-full border-2 border-primary bg-primaryDark">
        <h1 className="text-primary">This is the header</h1>
      </div>
    </Tilt>
  );
}
