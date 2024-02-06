import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Earth from "../public/models/earth/Earth";
import Dragon from "../public/models/dragon/Dragon";
import { MutableRefObject, useRef } from "react";
import ModelViewer from "@/src/components/ModelViewer";

const Home = () => {

  return (
    <div>
      <Canvas>
        <ambientLight intensity={1.1} /> // Adiciona uma luz ambiente.
        <OrbitControls /> // Adiciona controles de órbita para a câmera.
        <Environment preset="night" /> // A predefinição pode ser alterada para
        qualquer outro efeito de iluminação.
        <mesh>
          {/* <Earth /> */}
          <Text>Silver Dragon Mir4</Text>
          <Dragon />
          {/* <ModelViewer /> */}
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
