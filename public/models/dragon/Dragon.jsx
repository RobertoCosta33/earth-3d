import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../models/dragon/dragon.gltf"
  );
  const { actions } = useAnimations(animations, group);
  const [animationsReady, setAnimationsReady] = useState(false);

  const punchAnimation = "Mon_BlackDragon31_Btl_Atk01"; // de 1 a 4
  const flyAnimarion = "Mon_BlackDragon31_Btl_Int01"; // de 1 a 3
  const runAnimarion = "Mon_BlackDragon31_Btl_Run01"; // 1
  const walkAnimarion = "Mon_BlackDragon31_Btl_Walk02"; // 1
  const testAnimarion = "Mon_BlackDragon31_Dmg_Hit02"; // 1 a 8

  // const [ref, api] = useCylinder(() => ({
  //   mass: 1, // Adiciona massa ao modelo para simular peso
  //   args: [1, 1, 1], // Tamanho do cilindro de colisão (pode ajustar conforme necessário)
  //   position: [props.position.x, props.position.y, props.position.z], // Posição inicial
  // }));

  // useEffect(() => {
  //   api.position.set(props.position.x, props.position.y, props.position.z);
  // }, [props.position, api]);

  const handlePunch = () => {
    setAnimationsReady(!animationsReady);

    if (animationsReady) {
      const action = actions[punchAnimation];
      action.play();
    } else {
      const action = actions[punchAnimation];
      action.stop();
      action.reset();
    }
  };

  return (
    <mesh onClick={handlePunch}>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="Mon_BlackDragon31_SkeletonFBX"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.025}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                    <group
                      name="Mon_BlackDragon31"
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.M_Mon_BlackDragon31a}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.M_Mon_BlackDragon31b}
                      skeleton={nodes.Object_8.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </mesh>
  );
}

useGLTF.preload("../models/dragon/dragon.gltf");
