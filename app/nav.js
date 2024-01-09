"use client";
import Tilt from "react-parallax-tilt";

export default function Nav() {
  return (
    <Tilt
      scale={0.95}
      perspective={2000}
      tiltReverse={true}
      trackOnWindow={true}
      className="w-1/5"
    >
      <div className="h-full border-2 border-primary bg-primaryDark">
        <h1 className="text-primary">This is the navbar</h1>
      </div>
    </Tilt>
  );
}
