import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Projects from "../pages/projects";
import Interests from "../pages/interests";
import Media from "../pages/media";
import Settings from "../pages/settings";

export default function ContentBox() {
  return (
    <div className="w-full h-full backdrop-blur border-2 border-double border-primary bg-primaryDark/60 p-5 text-2xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
