/** @format */

import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
// import { tsParticles } from "tsparticles-engine"

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //  const load=new Loader(engine)
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  //  let t = document.querySelector('tsparticles > .particles-js-canvas-el');
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      Loaded={particlesLoaded}
      canvasClassName='particles-class'
      options={{
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        BackgroundMask: {
          cover: { color: '#bada55', opacity: 0.5 },
        },
        fpsLimit: 90,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ['repulse', 'bubble'],
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 100,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: false,
            speed: { value: { min: 1, max: 1 } },
            straight: false,
            bounce:false,
          },
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
