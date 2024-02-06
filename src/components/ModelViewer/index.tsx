import { useGLTF } from "@react-three/drei";
import Image from "next/image";
import img from "../../../public/models/dev.jpg";

const ModelViewer = (props: any) => {
  return (
    <Image src={img} alt='hfjdh' />
  );
};

export default ModelViewer;
