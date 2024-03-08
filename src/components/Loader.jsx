import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      {/* <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span> */}
      <div className="w-screen bg-black z-[9999] h-screen absolute top-0 left-0 ">
        asda
      </div>
    </Html>
  );
};

export default Loader;
