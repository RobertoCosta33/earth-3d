import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../public/models/earth/Earth";
import Dragon from "../public/models/dragon/Dragon";

const Home = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={1.1} /> // Adiciona uma luz ambiente.
        <OrbitControls /> // Adiciona controles de órbita para a câmera.
        <Environment preset="night" /> // A predefinição pode ser alterada para
        qualquer outro efeito de iluminação.
        <mesh>
          {/* <Model /> */}
          <Text>Silver Dragon Mir4</Text>
          <Dragon />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
