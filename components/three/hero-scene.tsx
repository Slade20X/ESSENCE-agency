'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Grid, Sparkles } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const AnimatedGrid = () => {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      gridRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <group ref={gridRef}>
      <Grid
        args={[30, 30]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#6366F1"
        sectionSize={3}
        sectionThickness={1}
        sectionColor="#8B5CF6"
        fadeDistance={25}
        fadeStrength={1}
        followCamera={false}
      />
    </group>
  )
}

const FloatingCubes = () => {
  const cubesRef = useRef<THREE.Group>(null)
  const count = 50
  const cubes = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      positions.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 15 - 10,
        ],
        scale: Math.random() * 0.2 + 0.1,
        color: new THREE.Color().setHSL(0.65 + Math.random() * 0.1, 0.8, 0.6),
      })
    }
    return positions
  }, [])

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      cubesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1
    }
  })

  return (
    <group ref={cubesRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position as [number, number, number]} scale={cube.scale}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={cube.color} emissive={cube.color} emissiveIntensity={0.3} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  )
}

const ParticleField = () => {
  const count = 3000
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 15
    }
    return pos
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#8B5CF6" size={0.05} transparent opacity={0.4} />
    </points>
  )
}

const LightBeams = () => {
  const lightCount = 8
  const lights = useMemo(() => {
    const positions = []
    for (let i = 0; i < lightCount; i++) {
      const angle = (i / lightCount) * Math.PI * 2
      positions.push({
        position: [Math.cos(angle) * 8, Math.sin(angle) * 5, 0],
        color: i % 2 === 0 ? '#6366F1' : '#8B5CF6',
      })
    }
    return positions
  }, [])

  return (
    <>
      {lights.map((light, i) => (
        <pointLight
          key={i}
          position={light.position as [number, number, number]}
          color={light.color}
          intensity={0.8}
          distance={20}
          decay={2}
        />
      ))}
    </>
  )
}

export const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 12], fov: 50 }}>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.3} />
      <LightBeams />
      <AnimatedGrid />
      <FloatingCubes />
      <ParticleField />
      <Sparkles count={500} scale={20} size={0.1} speed={0.3} color="#6366F1" />
      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  )
}