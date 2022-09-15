/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/actions/commentAction';
import { getModel, getModel_THUNK } from '../../redux/actions/oneModelAction';
import OneModel from '../OneModel/OneModel';
import './SceneOneModel.css';

export default function SceneOneModel({ modelId }) {
  const model = useSelector((state) => state.onemodel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getModel_THUNK(modelId));
    return () => {
      dispatch(getModel(null));
      dispatch(getComments(null));
    };
  }, []);

  return (
    <div className="canOneModel">
      <h2>{`${model?.name}`}</h2>
      <Suspense fallback={null}>
        <Canvas className="can" camera={{ position: [0.5, 1, 1], fov: 30 }}>

          <ambientLight intensity={0.1} />
          <pointLight position={[10, 30, 10]} />
          {model && <OneModel oneModel={model} />}

          <OrbitControls />
          {/* <Environment preset="dawn" background /> */}

        </Canvas>
      </Suspense>
      <a href={`http://localhost:3002${model?.path}`}>Скачать</a>
    </div>

  );
}
