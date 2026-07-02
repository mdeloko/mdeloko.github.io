import { useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import { /*type Container,*/ type ISourceOptions, MoveDirection, OutMode  } from "@tsparticles/engine";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
//

export default function ParticleComponent() {
    const [isPortrait,setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches)
    const [isLightMode,setIsLightMode] = useState(window.matchMedia("(prefers-color-scheme: light)").matches)


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
            paint: {
                fill: {
                    color: isLightMode?"#7E1014":"#ffffff",
                },
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

  return <Particles
              id="tsparticles"
              options={options}
              // particlesLoaded={particlesLoaded}
            />;
};