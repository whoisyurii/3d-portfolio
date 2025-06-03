import { OrbitControls } from "@react-three/drei"; // Import OrbitControls for camera interaction
import { Canvas } from "@react-three/fiber"; // Import Canvas to create a 3D scene
import React from "react"; // Import React

const HeroExperience = () => {
  // Define the HeroExperience functional component
  const isTablet = false; // Set a flag for tablet detection (currently always false)
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Create a 3D canvas with camera position and field of view */}
      <ambientLight intensity={0.2} color="#1a1a40" />{" "}
      {/* Add ambient light with low intensity and a blueish color */}
      <directionalLight position={[5, 5, 5]} intensity={5} />{" "}
      {/* Add a strong directional light from the top-right */}
      <OrbitControls
        enablePan={false} // Disable panning the camera
        enableZoom={!isTablet} // Enable zoom unless on tablet
        maxDistance={20} // Set max zoom-out distance
        minDistance={5} // Set min zoom-in distance
        minPolarAngle={Math.PI / 5} // Limit how far up the camera can look
        maxPolarAngle={Math.PI / 2} // Limit how far down the camera can look
      />
      <mesh>
        {" "}
        {/* Create a 3D object (mesh) */}
        <boxGeometry args={[1, 1, 1]} />{" "}
        {/* Use a box geometry with size 1x1x1 */}
        <meshStandardMaterial color="teal" />{" "}
        {/* Apply a teal-colored standard material */}
      </mesh>
    </Canvas>
  );
};

export default HeroExperience; // Export the component for use elsewhere
