import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('../models/earth/earth.gltf')

  const meshRef = useRef();

  useFrame(() => {
    // Atualiza a rotação do objeto 3D a cada frame
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} geometry={(nodes.Object_4).geometry} material={materials['Scene_-_Root']} scale={1.128} />
    </group>
  )
}

useGLTF.preload('../models/earth/earth.gltf')
