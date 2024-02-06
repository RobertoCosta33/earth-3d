import { useGLTF } from "@react-three/drei";
import Image from "next/image";
import img from "../../../public/models/dev.jpg";

import { Canvas, useFrame } from "@react-three/fiber";
import { MutableRefObject, useRef } from "react";

const ModelViewer = (props: any) => {
  const meshRef = useRef();

  useFrame(() => {
    // Atualiza a rotação do objeto 3D a cada frame
    (meshRef as MutableRefObject<any>).current.rotation.x += 0.01;
    (meshRef as MutableRefObject<any>).current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef as MutableRefObject<any>}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );

  // return (
  // <Image src={img} alt='hfjdh' />
  // );
};

export default ModelViewer;
