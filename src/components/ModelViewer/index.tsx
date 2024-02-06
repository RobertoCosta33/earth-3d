import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ModelViewer = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <h1>Model Viewer</h1>

      <Canvas>
        <OrbitControls />

        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
