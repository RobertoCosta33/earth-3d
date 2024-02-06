import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, usePlane } from "@react-three/cannon";

import Earth from "../public/models/earth/Earth";
import Dragon from "../public/models/dragon/Dragon";
import ModelViewer from "@/src/components/ModelViewer";
import Floor from "@/src/components/Floor";

const Home = () => {

  return (
    <div>
      <Canvas>
        <ambientLight intensity={1.1} /> // Adiciona uma luz ambiente.
        <OrbitControls  /> // Adiciona controles de órbita para a câmera.
        <Physics gravity={[0, -30, 0]}>
          <Floor />
          <Environment preset="sunset" /> // A predefinição pode ser alterada para
        qualquer outro efeito de iluminação.
        </Physics>
        <mesh>
          {/* <Earth /> */}
          <Text position={[0, 12, 0]}>Silver Dragon Mir4</Text>
          <Dragon />
          {/* <ModelViewer /> */}
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
