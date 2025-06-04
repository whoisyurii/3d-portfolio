import { OrbitControls } from "@react-three/drei"; // Import OrbitControls for camera interaction
import { Canvas } from "@react-three/fiber"; // Import Canvas to create a 3D scene
import { useMediaQuery } from "react-responsive";
// 3d model
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  // Define the HeroExperience functional component
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Create a 3D canvas with camera position and field of view */}
      <OrbitControls
        enablePan={false} // Disable panning the camera
        enableZoom={!isTablet} // Enable zoom unless on tablet
        maxDistance={20} // Set max zoom-out distance
        minDistance={5} // Set min zoom-in distance
        minPolarAngle={Math.PI / 5} // Limit how far up the camera can look
        maxPolarAngle={Math.PI / 2} // Limit how far down the camera can look
      />
      <HeroLights />
      {/* <Particles count={50} 
      // snowy parts [optional]
      />  */}
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience; // Export the component for use elsewhere
