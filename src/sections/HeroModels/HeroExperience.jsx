// HeroExperience.tsx
import { Suspense, memo } from "react";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const cameraProps = { position: [8, 2, 13], fov: 45 };

const HeroExperience = () => {
  // const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const scale = isMobile ? 1 : 1;
  const yPos = isMobile ? 0 : 0;

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
        enableZoom={false}
        enableRotate={false}
        autoRotate={true}
        autoRotateSpeed={0.2}
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
          <Center>
            <Room />
          </Center>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default memo(HeroExperience);
