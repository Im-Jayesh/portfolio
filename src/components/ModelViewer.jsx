import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, DRACOLoader } from "@react-three/drei";
import * as THREE from "three";

useGLTF.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
useGLTF.preload("/model-draco.glb");
useGLTF.preload("/saturn-draco.glb");

function Model({ name }) {
  const { scene } = useGLTF(`/${name}.glb`);
  scene.scale.set(1.5, 1.5, 1.5);
  scene.position.set(0, -1, 0);
  scene.rotation.y = Math.PI / 4;
  scene.rotation.x = -Math.PI / 8.2;
  return <primitive object={scene} />;
}

export default function ModelViewer({ modelName, color }) {
  return (
    <div className="w-full h-[65vh] bg-transparent translate -translate-y-24">
      <Canvas camera={{ position: [0, 1.5, 2.5], fov: 45 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[3, 10, 10]}
          intensity={1.2}
          color={color || "white"}
        />
        <ambientLight intensity={1.5} />

        <Suspense fallback={<Html center>Loading...</Html>}>
          <Model name={modelName} />
        </Suspense>

        <OrbitControls enableDamping enableZoom={false} />
      </Canvas>
    </div>
  );
}
