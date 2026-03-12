import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from '@react-three/drei';
import { useRef } from 'react';

function Orb() {
  const orbRef = useRef();

  useFrame((_, delta) => {
    orbRef.current.rotation.y += delta * 0.2;
    orbRef.current.rotation.x += delta * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <Sphere ref={orbRef} args={[1.4, 128, 128]} scale={1.2}>
        <MeshDistortMaterial
          color="#7c4dff"
          roughness={0.05}
          metalness={0.7}
          distort={0.45}
          speed={2.5}
        />
      </Sphere>
    </Float>
  );
}

export function Scene3D() {
  return (
    <div className="scene-wrapper" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 1, 3]} intensity={1.5} color="#9d7dff" />
        <pointLight position={[-3, -2, -3]} intensity={1} color="#00d4ff" />
        <Stars radius={70} depth={50} count={2500} factor={5} saturation={0} fade speed={1} />
        <Orb />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
    </div>
  );
}
