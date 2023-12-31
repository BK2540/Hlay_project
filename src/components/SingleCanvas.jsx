'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const SingleCanvas = ({ children }) => {

  return (
    <div className='h-full w-[350px]'>
    <Canvas
      camera={{ fov: 55, aspect:0.6 }}
    >
        <OrbitControls/>
        <ambientLight environment="city" intensity={1} />
        <directionalLight position={[3, 3, 6]} intensity={1} />
      <mesh  position={[0, -1.005, 1.1]} scale={[0.6, 0.6, 0.6]}> 
          { children }
      </mesh>
    </Canvas>
    </div>
  )
}

export default SingleCanvas