'use client'

import { Suspense, useDeferredValue } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei'
import { useControls } from 'leva'
import tunnel from 'tunnel-rat'

const status = tunnel()

const MODELS = {
  Beech: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf',
  Lime: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf',
  Spruce: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf'
}

export default function App() {
  const { model } = useControls({ model: { value: 'Beech', options: Object.keys(MODELS) } })
  return (
    <>
      <header>
        This is a {model.toLowerCase()} tree.
        <br />
        <status.Out />
      </header>
      <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
      <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <group position={[0, -10, 0]}>
          <Suspense fallback={<status.In>Loading ...</status.In>}>
            <Tree url={MODELS[model]} />
          </Suspense>
          <ContactShadows scale={20} blur={10} far={20} />
        </group>
        <OrbitControls />
      </Canvas>
    </>
  )
}

function Tree({ url }) {
  const deferred = useDeferredValue(url)
  const gltf = useGLTF(deferred)
  return (
    <primitive
      object={Array.isArray(gltf) ? gltf[0].scene : gltf.scene}
      scale={10}
    />
  )
}

Object.values(MODELS).forEach((url) => useGLTF.preload(url))