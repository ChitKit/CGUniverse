/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  useFrame(() => { group.current.rotation.z += 0.003; }, []);
  const { nodes, materials } = useGLTF('http://localhost:3002/models/final_fantasy_sword.glb');
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

useGLTF.preload('http://localhost:3002/models/final_fantasy_sword.glb');
