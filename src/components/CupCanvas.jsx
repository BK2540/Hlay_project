'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const FeaturedCanvas = ({ children }) => {
  return (
    <div className='h-full w-[250px]'>
    <Canvas
      camera={{ fov: 45, position: [0, 0, 3], near: 0.1, far: 1000, aspect: 0.8 }}
    >
        <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={4}/>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 5]} intensity={0.6} />
      <mesh  position={[0, -1.005, 1]} scale={[0.5, 0.5, 0.5]}> 
          { children }
      </mesh>
    </Canvas>
    </div>
  )
}

export default FeaturedCanvas