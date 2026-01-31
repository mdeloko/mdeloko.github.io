import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { /*type Container,*/ type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
//

export default function ParticleComponent() {
    const [init, setInit] = useState(false);
    const [isPortrait,setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches)
    const [isLightMode,setIsLightMode] = useState(window.matchMedia("(prefers-color-scheme: light)").matches)
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(function(){
    const orientationQuery = window.matchMedia("(orientation: portrait)")
    const orientationHandler = function(e: MediaQueryListEvent){
        return setIsPortrait(e.matches)
    }

    const lightmodeQuery = window.matchMedia("(prefers-color-scheme: light)")
    const lightmodeHandler = function(e: MediaQueryListEvent){
        return setIsLightMode(e.matches)
    }

    orientationQuery.addEventListener("change",orientationHandler)
    lightmodeQuery.addEventListener("change",lightmodeHandler)

    return () => {
        orientationQuery.removeEventListener("change",orientationHandler)
        lightmodeQuery.removeEventListener("change",lightmodeHandler)
    }
  },[])


  const options: ISourceOptions = useMemo(
    () => ({
        autoPlay:true,
        background: {
            color: {
                value: "",
            },
        },
        fpsLimit: 90,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode:"repulse"
                },
                onHover: {
                    enable: isPortrait?false:true,
                    mode: "grab",
                },
            },
            modes: {
                grab:{
                    distance:300,
                    links:{
                        opacity:0.8,
                    }
                },
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
            },
            detectsOn:"window",
        },
        particles: {
            color: {
                value: isLightMode?"#7E1014":"#ffffff",
            },
            links: {
                color: isLightMode?"#7E1014":"#ffffff",
                distance: 125,
                enable: true,
                opacity: 0.6,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.out,
                },
                random: false,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 60,
            },
            opacity: {
                value: 0.6,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        style:{zIndex:"-1"},
        detectRetina: true,

    }),
    [isLightMode,isPortrait],
  );


//   const particlesLoaded = async (container?: Container) => {
//     console.log(container);
//   };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        // particlesLoaded={particlesLoaded}
      />
    );
  }

  return <></>;
};