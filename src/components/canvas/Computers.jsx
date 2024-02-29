import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computers = useGLTF("./tablepcss.glb");
  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" />
      {/* <pointLight
        intensity={1}
        position={[10, 30, 10]}
        rotation={[10, -10, 0]}
      /> */}
      {/* <spotLight position={[0, 0, 20]} /> */}
      <ambientLight intensity={0.4} />
      <spotLight
        intensity={15}
        color={"#ffc9ce"}
        angle={Math.PI / 2}
        distance={10}
      />
      <primitive
        object={computers.scene}
        scale={isMobile ? 0.1 : 0.2}
        position={isMobile ? [-0.5, -4, 0] : [0, -3.5, -1]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

// export default Computers;

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI * 0.02}
          minAzimuthAngle={-Math.PI * 0.02}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
