/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ᗩᒪE᙭. Kᗩ.🚗 (https://sketchfab.com/Alex.Ka.)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/harley-davidson-seventy-two-hd-fxt-2015-15e67a3076494bb99ba7504c9913ceb5
Title: Harley-Davidson Seventy-Two HD FXT 2015❤️
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const HD72 = (props) => {
  const { nodes, materials } = useGLTF(
    "/models/harley-davidson_seventy-two_hd_fxt_2015.glb"
  );
  const brakedisc = props.brakedisc;
  const headlight = props.headlight;
  const seat = props.seat;
  const mirrors = props.mirrors;
  const tire = props.tire;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {mirrors && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Mirror}
          />
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.black_chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.black_mate}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.black_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.body_color}
        />
        {brakedisc && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.brakedisc}
          />
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.brakelight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.chrome}
        />

        {headlight && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.headlight}
          />
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.reflectors}
        />
        {seat && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.seat}
          />
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.spdglass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.texture1gloss}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.texture2mate}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.texture3aluminium}
        />
        {tire && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.tire}
          />
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.wingblackmate}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/harley-davidson_seventy-two_hd_fxt_2015.glb");

export default HD72;
