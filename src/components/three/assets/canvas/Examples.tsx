// src/components/canvas/Examples.tsx
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei';

interface redirectModel {
  route?: string;
  [key: string]: any;
}

interface Model {
  [key: string]: any;
}

export interface ExamplesJSON {
  Blob: FC<redirectModel>;
  Logo: FC<redirectModel>;
  Duck: FC<Model>;
  Dog: FC<Model>;
}

export const Blob: FC<redirectModel> = ({ route = '/', ...props }) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  );
};

export const Logo: FC<redirectModel> = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null);
  const router = useRouter();
  const [hovered, hover] = useState(false);
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), []);

  useCursor(hovered);
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8);
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8);
    mesh.current.rotation.z -= delta / 4;
  });

  return (
    <group ref={mesh} {...props}>
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} />
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} rotation={[0, 0, 1]} />
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh>
    </group>
  );
};

export const Duck: FC<Model> = (props) => {
  const { scene } = useGLTF('/models/duck.glb');

  useFrame((state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} />;
};

export const Dog: FC<Model> = (props) => {
  const { scene } = useGLTF('/models/dog.glb');

  return <primitive object={scene} {...props} />;
};