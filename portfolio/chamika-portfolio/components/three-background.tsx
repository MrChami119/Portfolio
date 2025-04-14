"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"
import { random } from "maath"

function StarField({ count = 5000 }) {
  const ref = useRef<THREE.Points>(null!)
  const sphere = Float32Array.from(random.inSphere(new Float64Array(count * 3), { radius: 1.5 }))

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  )
}
