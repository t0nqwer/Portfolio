import Pc from "./Pc";
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useHelper, Center } from "@react-three/drei";
import CanvasLoader from "../Loader";
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
// import ThreeSpline from "./ThreeSpline";

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);
  const light = useRef();
  const modelref = useRef();

  useEffect(() => {
    // console.log(position);
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
  useHelper(light, PointLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        //   ref={light}
        intensity={0.5}
        position={[20, 20, 50]}
        // castShadow
      />
      <directionalLight
        // ref={light}
        intensity={0.2}
        position={[0, 2, -10]}
        color={"#ffc9ce"}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={0.000001}
        castShadow
      />
      <pointLight
        // ref={light}
        intensity={5}
        position={[2.6, -2, 0.9]}
        color={"#ffc9ce"}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={0.000001}
        castShadow
      />
      <pointLight
        // ref={light}
        intensity={5}
        scale={0.5}
        position={[-6.8, -2, 0.8]}
        color={"#ffc9ce"}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={0.000001}
        castShadow
      />

      <ambientLight intensity={0.3} color={"#ffc9ce"} />
      {/* </PerspectiveCamera> */}
      {/* <ContactShadows position={[0, -3.8, 0]} /> */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // maxAzimuthAngle={0}
          // minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI * 0.02}
          minAzimuthAngle={-Math.PI * 0.02}
          // setAzimuthalAngle={Math.PI / 4}
        />
        <Pc isMobile={isMobile} ref={modelref} />
        {/* <Plane /> */}
      </Suspense>
      <Preload all />
    </>
  );
};

const NewComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      // camera={{ position: [0, -5, 19], fov: 25 }}
      // gl={{ preserveDrawingBuffer: true }}
    >
      <Center>
        {/* <Scene /> */}
        <Suspense fallback={null}>{/* <ThreeSpline /> */}</Suspense>
      </Center>
    </Canvas>
  );
};

export default NewComputerCanvas;
