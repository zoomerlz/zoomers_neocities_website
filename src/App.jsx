import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./ui/header";
import Nav from "./ui/nav";
import Music from "./ui/music";
import Chat from "./ui/chat";

import Home from "./pages/home";
import Projects from "./pages/projects";
import Interests from "./pages/interests";
import Media from "./pages/media";
import Settings from "./pages/settings";

import CheckBreakpoint from "./script/checkbreakpoint";

function App() {
  const currentBreakpoint = CheckBreakpoint();
  return (
    <Router>
      <main className="transition-all h-screen p-5 lg:p-10 xl:px-24 2xl:px-48 space-y-2 lg:space-y-4 2xl:space-y-6 text-primary bg-primaryBackground">
        <div className="flex h-1/5">
          <Header breakpoint={currentBreakpoint} />
        </div>
        <div className="flex h-4/5 gap-2 lg:gap-4">
          <Nav breakpoint={currentBreakpoint} />
          <div className="flex lg:flex-row flex-col w-full gap-2 lg:gap-4 ">
            <Routes>
              <Route
                path="/"
                element={<Home breakpoint={currentBreakpoint} />}
              />
              <Route
                path="/projects"
                element={<Projects breakpoint={currentBreakpoint} />}
              />
              <Route
                path="/interests"
                element={<Interests breakpoint={currentBreakpoint} />}
              />
              <Route
                path="/media"
                element={<Media breakpoint={currentBreakpoint} />}
              />
              <Route
                path="/settings"
                element={<Settings breakpoint={currentBreakpoint} />}
              />
            </Routes>
            <div className="flex lg:flex-col flex-row lg:w-1/4 h-1/4 lg:h-full gap-2 lg:gap-4">
              <Music breakpoint={currentBreakpoint} />
              <Chat breakpoint={currentBreakpoint} />
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
