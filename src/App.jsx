import { useEffect, useMemo, useState } from "react";
import { HashRouter as Router } from "react-router-dom";

import Header from "./ui/header";
import Nav from "./ui/nav";
import ContentBox from "./ui/content-box";
import Music from "./ui/music";
import Chat from "./ui/chat";

import CheckBreakpoint from "./script/checkbreakpoint";

import Tilt from "react-parallax-tilt";

import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function App() {
  const currentBreakpoint = CheckBreakpoint();
  const isTiltEnabled =
    currentBreakpoint !== "xl" && currentBreakpoint !== "2xl" ? false : true;

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  //TODO Try to recreate the nfs carbon background
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#071404",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#60e047",
        },
        links: {
          color: "#60e047",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    //TODO add some kind of lazy loading to routes
    <Router future={{ v7_startTransition: true }}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <main className="transition-all h-screen p-5 lg:p-10 xl:px-24 2xl:px-48 space-y-2 lg:space-y-4 2xl:space-y-6 text-primary bg-primaryBackground">
        <div className="flex h-1/5">
          <Tilt
            tiltEnable={isTiltEnabled}
            perspective={2000}
            tiltReverse={true}
            tiltMaxAngleX={10}
            tiltMaxAngleY={5}
            className="order-last lg:order-none w-full h-full"
          >
            <Header breakpoint={currentBreakpoint} />
          </Tilt>
        </div>
        <div className="flex h-4/5 gap-2 lg:gap-4">
          <Tilt
            tiltEnable={isTiltEnabled}
            perspective={2000}
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={10}
            className="md:w-1/4 lg:w-1/5"
          >
            <Nav />
          </Tilt>
          <div className="flex lg:flex-row flex-col-reverse w-full gap-2 lg:gap-4 ">
            <Tilt
              tiltEnable={isTiltEnabled}
              perspective={2000}
              tiltReverse={true}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="w-full h-full"
            >
              <ContentBox />
            </Tilt>
            <div className="flex lg:flex-col flex-row lg:w-1/4 h-1/4 lg:h-full gap-2 lg:gap-4">
              <Tilt
                tiltEnable={isTiltEnabled}
                perspective={2000}
                tiltReverse={true}
                tiltMaxAngleX={5}
                tiltMaxAngleY={15}
                className="w-full h-full"
              >
                <Music />
              </Tilt>
              <Tilt
                tiltEnable={isTiltEnabled}
                perspective={2000}
                tiltReverse={true}
                tiltMaxAngleX={5}
                tiltMaxAngleY={15}
                className="w-full h-full"
              >
                <Chat />
              </Tilt>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
