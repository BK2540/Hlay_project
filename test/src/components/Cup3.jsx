/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene3.gltf --transform 
Files: scene3.gltf [1.94MB] > scene3-transformed.glb [259.01KB] (87%)
*/
'use client';

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CupThree(props) {
  const { nodes, materials } = useGLTF('/models/scene3-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.899, 0]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.upper_cup} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.holder_cup} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.base_cup} />
      </group>
      <mesh geometry={nodes.Cylinder.geometry} material={materials.flower} position={[0.754, 2.812, 0]} rotation={[Math.PI / 2, 0.247, 0]} scale={[0.816, 0.165, 0.816]} />
    </group>
  )
}

useGLTF.preload('/models/scene3-transformed.glb')
