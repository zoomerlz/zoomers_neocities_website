import { useState, Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Projects = lazy(() => import("../pages/projects"));
const Interests = lazy(() => import("../pages/interests"));
const Media = lazy(() => import("../pages/media"));
const Settings = lazy(() => import("../pages/settings"));

export default function ContentBox() {
  return (
    <div className="w-full h-full backdrop-blur border-2 border-double border-primary bg-primaryDark/60 p-5 text-2xl">
      <Routes>
      {/*<Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Suspense fallback={<>Loading...</>}><Home /></Suspense>}/>
        <Route path="/interests" element={<Suspense fallback={<>Loading...</>}><Interests /></Suspense>}/>
        <Route path="/projects" element={<Suspense fallback={<>Loading...</>}><Projects /></Suspense>}/>
        <Route path="/media" element={<Suspense fallback={<>Loading...</>}><Media /></Suspense>}/>
        <Route path="/settings" element={<Suspense fallback={<>Loading...</>}><Settings /></Suspense>}/>
      </Routes>
    </div>
  );
}
