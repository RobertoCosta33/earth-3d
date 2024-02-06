import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import  Model from '../public/models/earth/Earth';

const Home = () => {

  return (
    <div>
      <h1>Earth 3D</h1>

      <Canvas>
        <ambientLight intensity={1.1} /> // Adiciona uma luz ambiente.
        <OrbitControls /> // Adiciona controles de órbita para a câmera.
        <Environment preset="night" /> // A predefinição pode ser alterada para qualquer outro efeito de iluminação.

        <mesh>
          <Model />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
