/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  useFrame(() => { group.current.rotation.z += 0.003; }, []);
  const { nodes, materials } = useGLTF('http://localhost:3002/models/wow_axe.glb');
  // const { actions } = useAnimations(animations, group);
  // console.log('ACTIONS', actions);
  // console.log('NOOODES', (nodes));
  const keyArr = Object.keys(nodes);
  // console.log(keyArr);

  const meshArr = [];
  for (let i = 0; i < keyArr.length; i += 1) {
    if (nodes[keyArr[i]].type === 'Mesh') {
      meshArr.push(nodes[keyArr[i]]);
    }
  }
  const materialKeys = Object.keys(materials);

  // useEffect(() => {
  // console.log(actions.Scene.play());
  //   actions.Scene.play();
  // });


  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      {meshArr.map((mesh) => (
        <mesh
          key={mesh.id}
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
