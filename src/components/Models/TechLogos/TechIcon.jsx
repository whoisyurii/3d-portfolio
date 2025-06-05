import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  useEffect(() => {
    // Only run this code for the "Interactive Developer" model
    if (model.name === "Interactive Developer") {
      // Traverse all objects in the loaded GLTF scene
      scene.scene.traverse((child) => {
        // If the object is a mesh and its name is "Object_5"
        if (child.isMesh && child.name === "Object_5") {
          // Change its material to a new white MeshStandardMaterial
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  });

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
