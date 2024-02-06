import { usePlane } from "@react-three/cannon";

const Floor = (props: any) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

    return (
      <mesh ref={ref as any} receiveShadow>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" color="#555" />
      </mesh>
    );
  };

export default Floor;