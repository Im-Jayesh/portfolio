import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({name}) {
  const { scene } = useGLTF(`/${name}.glb`);

  // Scale & center adjustments
  scene.scale.set(1.5, 1.5, 1.5); // zoom in
  scene.position.set(0, -1, 0);   // move down a bit

  scene.rotation.y = Math.PI / 4;
  scene.rotation.x = -1 * Math.PI / 8.2;

  return <primitive object={scene} />;
}

export default function ModelViewer({modelName,  color}) {
  return (
    <div className="w-full h-[65vh] bg-transparent translate -translate-y-24">
      <Canvas
        camera={{ position: [0, 1.5, 2.5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        {/* Lights */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 10, 10]} intensity={1.2} color={color || 'white'}/>
        <ambientLight intensity={1.5} />

        {/* Model */}
        <Suspense fallback={null}>
          <Model name={modelName}/>
        </Suspense>

        {/* Controls */}
        <OrbitControls enableDamping enableZoom={false} />
      </Canvas>
    </div>
  );
}
