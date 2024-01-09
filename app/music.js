"use client";
import Tilt from "react-parallax-tilt";

export default function Music() {
  return (
    <Tilt
      scale={0.95}
      perspective={2000}
      tiltReverse={true}
      trackOnWindow={true}
      className="w-full h-full"
    >
      <div className="w-full h-full border-2 border-primary bg-primaryDark">
        <h1 className="text-primary">This is the music player</h1>
      </div>
    </Tilt>
  );
}
