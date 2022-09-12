/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

export default function OneModel(props) {
  console.log('ONE MODEL HERE !!!! ====>>>>>', props.oneModel);
  const group = useRef();
  const { nodes, materials } = useGLTF(`http://localhost:3002${props.oneModel.path}`);
  // console.log('NODES', nodes);
  // console.log('MATERIAL', (materials));
  const keyArr = Object.keys(nodes);
  // console.log(keyArr);
  const meshArr = [];
  for (let i = 0; i < keyArr.length; i += 1) {
    if (nodes[keyArr[i]].type === 'Mesh') {
      meshArr.push(nodes[keyArr[i]]);
    }
  }
  const materialKeys = Object.keys(materials);

  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      {meshArr.map((mesh) => (
        <mesh
          castShadow
          receiveShadow
          geometry={mesh.geometry}
          position={mesh.position}
          material={materials[materialKeys]}
        />
      ))}
    </group>
  );
}

useGLTF.preload('http://localhost:3002/models/wow_axe.glb');
