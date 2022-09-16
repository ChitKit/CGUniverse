/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import Model from '../Model/Model';
import './scene.css';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {progress}
      {' '}
      % loaded
    </Html>
  );
}

export default function Scene() {
  return (
    <Canvas className="can" camera={{ position: [0.5, 1, 1], fov: 30 }}>
      <Suspense fallback={<Loader />}>

        <ambientLight intensity={0.2} />
        <pointLight position={[10, 30, 10]} />
        <Model />

        <OrbitControls />
        {/* <Environment preset="dawn" background /> */}

      </Suspense>
    </Canvas>

  );
}

// dawn: 'kiara/kiara_1_dawn_1k.hdr',
// night: 'dikhololo/dikhololo_night_1k.hdr',
// warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
// forest: 'forrest-slope/forest_slope_1k.hdr',
// apartment: 'lebombo/lebombo_1k.hdr',
// studio: 'studio-small-3/studio_small_03_1k.hdr',
// city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
// park: 'rooitou/rooitou_park_1k.hdr',
// lobby: 'st-fagans/st_fagans_interior_1k.hdr',
