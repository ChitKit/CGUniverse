/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModel, getModel_THUNK } from '../../redux/actions/oneModelAction';
import OneModel from '../OneModel/OneModel';
import './SceneOneModel.css';

export default function SceneOneModel({ modelId }) {
  const model = useSelector((state) => state.onemodel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getModel_THUNK(modelId));
    return () => dispatch(getModel(null));
  }, []);

  return (
    <div className="canOneModel">
      <p>HELP</p>
      <Suspense fallback={null}>
        <Canvas className="can" camera={{ position: [0.5, 1, 1], fov: 30 }}>

          <ambientLight intensity={0.2} />
          <pointLight position={[10, 30, 10]} />
          {model && <OneModel oneModel={model} />}

          <OrbitControls />
          {/* <Environment preset="dawn" background /> */}

        </Canvas>
      </Suspense>
    </div>

  );
}
