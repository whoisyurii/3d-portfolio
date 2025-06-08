import React, { useEffect, useMemo, Suspense, memo, useState } from "react";
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

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Флаг: анимировать только если есть hover/touch/focus
  const shouldAnimate = isHovered || isFocused;

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      frameloop={shouldAnimate ? "always" : "demand"}
      dpr={[1, 1.5]}
      shadows={false}
      onPointerEnter={() => setIsHovered(true)} // cursor focus
      onPointerLeave={() => setIsHovered(false)}
      onPointerDown={() => setIsFocused(true)} // touchscreens focus
      onPointerUp={() => setIsFocused(false)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0} // keyboard focus
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      {shouldAnimate && (
        <OrbitControls
          enableZoom={false}
          makeDefault
          enableDamping
          dampingFactor={0.1}
        />
      )}
      <Suspense fallback={null}>
        <Float
          speed={shouldAnimate ? 5.5 : 0}
          rotationIntensity={shouldAnimate ? 0.5 : 0}
          floatIntensity={shouldAnimate ? 0.9 : 0}
        >
          <group {...groupProps}>
            <primitive object={scene} />
          </group>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default memo(TechIcon);
