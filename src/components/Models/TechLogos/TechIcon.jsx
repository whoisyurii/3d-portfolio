import React, { useEffect, useMemo, Suspense, memo } from "react";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const TechIcon = ({ model }) => {
  // Загружаем GLTF-модель (себе иерархически кеширует useGLTF)
  const { scene } = useGLTF(model.modelPath);

  // Меняем материал только для конкретной модели при первом рендере
  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [model.name, scene]);

  // Один раз считаем группу: scale/rotation
  const groupProps = useMemo(
    () => ({
      scale: model.scale,
      rotation: model.rotation,
    }),
    [model.scale, model.rotation]
  );

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      // frameloop="demand"
      dpr={[1, 1.5]}
      shadows={false} // off for optimization
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        makeDefault
        enableDamping
        dampingFactor={0.1}
      />

      <Suspense fallback={null}>
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group {...groupProps}>
            <primitive object={scene} />
          </group>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default memo(TechIcon);
