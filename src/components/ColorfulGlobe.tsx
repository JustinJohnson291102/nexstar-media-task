import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const EARTH_TEXTURE =
  "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg";

function GlobeMesh() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
      const radius = 0.65;
      const offsetX = 2.7;
      const t = clock.getElapsedTime();
      globeRef.current.position.x = Math.sin(t * 0.5) * radius + offsetX; // larger revolution
      globeRef.current.position.z = Math.cos(t * 0.5) * radius;
    }
  });

  return (
    <mesh ref={globeRef} scale={[0.80, 0.80, 0.80]}>
      <sphereGeometry args={[1, 80, 80]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(EARTH_TEXTURE)}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
}

// Make the Canvas as big as the hero/banner, or even full-viewport
const ColorfulGlobe: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "100vw",
      height: "100vh", // or set to hero-section's height
      pointerEvents: "none",
      zIndex: 5,
      background: "none",
      overflow: "visible",
    }}
  >
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 6], fov: 35 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 2, 5]} intensity={1.1} />
      <directionalLight position={[-6, -2, 1]} intensity={0.2} />
      <GlobeMesh />
      <Stars radius={7} depth={20} count={120} factor={0.7} fade />
    </Canvas>
  </div>
);

export default ColorfulGlobe;