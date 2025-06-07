// HeroExperience.tsx
import { Suspense, memo } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const cameraProps = { position: [0, 0, 15], fov: 45 };

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const scale = isMobile ? 0.7 : isTablet ? 0.9 : 1;
  const yPos = isMobile
    ? -5 // ↓ extra 1.5 units
    : isTablet
    ? -4.3 // ↓ extra 0.8 units
    : -3.5;

  return (
    <Canvas
      camera={cameraProps}
      frameloop="demand"
      dpr={[1, 1.5]}
      shadows={false}
    >
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.1}
      />
      <HeroLights />
      <Suspense fallback={null}>
        <group scale={scale} position={[0, yPos, 0]}>
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default memo(HeroExperience);
