/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import OneModel from '../OneModel/OneModel';
import './SceneOneModel.css';

export default function SceneOneModel() {
  return (
    <div className="canOneModel">
      <Suspense fallback={null}>
        <Canvas className="can" camera={{ position: [0.5, 1, 1], fov: 30 }}>

          <ambientLight intensity={0.2} />
          <pointLight position={[10, 30, 10]} />
          <OneModel />

          <OrbitControls />
          {/* <Environment preset="dawn" background /> */}

        </Canvas>
      </Suspense>
    </div>

  );
}
