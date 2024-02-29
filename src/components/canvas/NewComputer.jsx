import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useGLTF,
  useHelper,
  Center,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import Pc from "./Pc";
import { useMousePosition } from "../../utils/useMousePosition";
const NewComputer = ({ props }) => {
  const { nodes, materials, scene } = useGLTF("./tablep.glb");
  const light = useRef();
  useHelper(light, PointLightHelper, 0.5, "white");
  const position = useMousePosition();
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const x = position.x;
    const windowmiddle = windowWidth / 2;
    setPositionY((x / windowmiddle - 1) * 0.2);
  }, [position]);
  return (
    <group
      {...props}
      dispose={null}
      scale={0.2}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
    >
      <group
        position={[28.378, 9.797, 11.529]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={21.422}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
          position={[-0.364, 0.625, 0.204]}
          rotation={[0, 0, 0.769]}
          scale={1.21}
          castShadow
          receiveShadow
        />
      </group>
      <group
        position={[20.39, 0.391, 10.476]}
        rotation={[-Math.PI / 2, 0, -0.351]}
        scale={5.607}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.radio001_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio002_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio003_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio004_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio005_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio006_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio007_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio008_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio009_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio010_low_Glass_0.geometry}
            material={materials.Glass}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.radio_low_radio_0.geometry}
            material={materials.radio}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, -1.576]} scale={5.705}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cube003__0.geometry}
            material={materials["Material.012"]}
            position={[-12.479, -4.364, -14.081]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[259.834, 414.12, 259.834]}
            castShadow
            receiveShadow
          />
        </group>
      </group>
      <group
        position={[0, 0.224, -9.965]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={6.096}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 1.275, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.992, 1, 1]}
          >
            <mesh
              geometry={nodes.Object_4001.geometry}
              material={materials["Material.001"]}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials["Material.002"]}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials["Material.003"]}
              castShadow
              receiveShadow
            />
          </group>
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials["Material.001"]}
            position={[0.004, 2.394, -0.324]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_10001.geometry}
            material={materials["Material.001"]}
            position={[0.004, 0.197, -0.358]}
            scale={[0.144, 0.151, 0.026]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials["Material.001"]}
            position={[0.004, 2.396, -0.286]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.073, 0.008, 0.073]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials["Material.001"]}
            position={[0, 0.069, 0.121]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.992, 0.565, 0.565]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials["Material.012"]}
            position={[0, 0.588, -0.416]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.992, 1, 1]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials["Material.013"]}
            position={[0.004, 2.397, -0.298]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials["Material.015"]}
            position={[0.004, 2.396, -0.31]}
            scale={0.051}
            castShadow
            receiveShadow
          />
        </group>
      </group>
      <group
        position={[-29.242, 2.684, -7.719]}
        rotation={[-Math.PI / 2, 0, 0.421]}
        scale={0.037}
      >
        <group position={[0.527, -32.303, 0]} scale={12.811}>
          <mesh
            geometry={nodes.Cube001_black_0.geometry}
            material={materials["black.001"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cube001_screen_0.geometry}
            material={materials["screen.001"]}
            castShadow
            receiveShadow
          />
        </group>
      </group>
      <group
        position={[0, 0.355, 4.741]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.016}
      >
        <mesh
          geometry={nodes.Object_2001.geometry}
          material={materials["07___Default"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["13___Default"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_4002.geometry}
          material={materials["14___Default"]}
          castShadow
          receiveShadow
        />
      </group>
      <group
        position={[12.105, 0.383, 2.987]}
        rotation={[1.571, 0, -0.569]}
        scale={1.305}
      >
        <group rotation={[Math.PI, 0, 0]}>
          <mesh
            geometry={nodes.BTN_1_1_BTN_1_1_0.geometry}
            material={materials.BTN_1_1}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.BTN_2_1_BTN_2_1_0.geometry}
            material={materials.BTN_2_1}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Extract2_Extract2_0.geometry}
            material={materials.Extract2}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.MOUSE_12_MOUSE_12_0.geometry}
            material={materials.MOUSE_12}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.MOUSE_13_MOUSE_13_0.geometry}
            material={materials.MOUSE_13}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.MOUSE_15_MOUSE_15_0.geometry}
            material={materials.MOUSE_15}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.MOUSE_6_MOUSE_6_0.geometry}
            material={materials.MOUSE_6}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.MOUSE_7_MOUSE_7_0.geometry}
            material={materials.MOUSE_7}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.MOUSE_8_MOUSE_8_0.geometry}
            material={materials.MOUSE_8}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.MOUSE_9_MOUSE_9_0.geometry}
            material={materials.MOUSE_9}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.RUEDA_2_RUEDA_2_0.geometry}
            material={materials.RUEDA_2}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.RUEDA_3_RUEDA_3_0.geometry}
            material={materials.RUEDA_3}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.TAPA_1_TAPA_1_0.geometry}
            material={materials.TAPA_1}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
        </group>
      </group>
      <group
        position={[-22.145, 0.395, 7.247]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.423}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.pCube1_lambert4_0.geometry}
            material={materials.lambert4}
            position={[1.211, 0.611, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.216, 0.539, 0.147]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.pCylinder1_lambert3_0.geometry}
            material={materials.lambert3}
            position={[0, 1.045, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.pCylinder2_lambert2_0.geometry}
            material={materials.lambert2}
            position={[0, 1.185, 0]}
            scale={[0.872, 0.732, 0.872]}
            castShadow
            receiveShadow
          />
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group
          position={[0, 18.239, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.egg_white_Textura_0.geometry}
            material={materials.Textura}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.egg_Textura_0.geometry}
            material={materials.Textura}
            position={[-0.004, 0.001, 0.04]}
            scale={[0.441, 0.441, 0.138]}
            castShadow
            receiveShadow
          />
        </group>
        <mesh
          geometry={nodes.bacon_Textura_0.geometry}
          material={materials.Textura}
          position={[-3.909, 19.298, -2.663]}
          rotation={[-Math.PI / 2, 0, 0.618]}
          scale={100}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.cheese_Textura_0.geometry}
          material={materials.Textura}
          position={[-0.448, 14.141, -0.081]}
          rotation={[-Math.PI / 2, 0, 0.222]}
          scale={100}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder_Textura_0.geometry}
          material={materials.Textura}
          position={[64.336, -10.168, 113.386]}
          rotation={[-1.795, -0.869, 2.304]}
          scale={187.453}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder001_Textura_0.geometry}
          material={materials.Textura}
          position={[51.74, -10.187, 107.316]}
          rotation={[-0.96, -0.692, 1.964]}
          scale={187.454}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.prato_Textura_0.geometry}
          material={materials.Textura}
          position={[-0.448, -14.496, -0.081]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          castShadow
          receiveShadow
        />
      </group>
      <group
        position={[25.937, 0.359, 0]}
        rotation={[-Math.PI / 2, 0, -0.469]}
        scale={2.152}
      >
        <mesh
          geometry={nodes.Object_10002.geometry}
          material={materials.Plastic_smooth_xlr}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.Chrome}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_12001.geometry}
          material={materials.Metal_blk}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.Plastic_noisy_blk}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_14001.geometry}
          material={materials["Plastic_noisy_blk.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.Plastic_noisy_blk_dark}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_16001.geometry}
          material={materials.Plastic_smooth_rca}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.Plastic_smooth_vol}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_18001.geometry}
          material={materials.Plastic_smooth_yel}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.Speaker_back}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_2002.geometry}
          material={materials.BLK_pure}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_3001.geometry}
          material={materials.Front_driver}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_4003.geometry}
          material={materials["Front_driver_yellow.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_5001.geometry}
          material={materials.Front_material}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_6002.geometry}
          material={materials.Front_material_face}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_7002.geometry}
          material={materials.Front_tweeter}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_8001.geometry}
          material={materials.Middle_material}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_9001.geometry}
          material={materials.Plastic_noisy_brwn}
          castShadow
          receiveShadow
        />
      </group>
      <group
        position={[-17.441, 0.281, -0.88]}
        rotation={[-Math.PI / 2, 0, 0.324]}
        scale={2.15}
      >
        <mesh
          geometry={nodes.Object_10003.geometry}
          material={materials["Plastic_smooth_xlr.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_11001.geometry}
          material={materials["Chrome.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_12002.geometry}
          material={materials["Metal_blk.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_13001.geometry}
          material={materials["Plastic_noisy_blk.002"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_14002.geometry}
          material={materials["Plastic_noisy_blk.003"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_15001.geometry}
          material={materials["Plastic_noisy_blk_dark.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_16002.geometry}
          material={materials["Plastic_smooth_rca.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_17001.geometry}
          material={materials["Plastic_smooth_vol.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_18002.geometry}
          material={materials["Plastic_smooth_yel.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_19001.geometry}
          material={materials["Speaker_back.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_2003.geometry}
          material={materials["BLK_pure.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_3002.geometry}
          material={materials["Front_driver.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_4004.geometry}
          material={materials["Front_driver_yellow.002"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_5002.geometry}
          material={materials["Front_material.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_6003.geometry}
          material={materials["Front_material_face.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_7003.geometry}
          material={materials["Front_tweeter.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_8002.geometry}
          material={materials["Middle_material.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_9002.geometry}
          material={materials["Plastic_noisy_brwn.001"]}
          castShadow
          receiveShadow
        />
      </group>
      <group
        position={[-36.326, 0, 1.825]}
        rotation={[-Math.PI / 2, 0, -0.804]}
        scale={0.342}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-4.986, 32.561, 0]} rotation={[-Math.PI, 0, 2.455]}>
            <mesh
              geometry={nodes["Box009_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[0, 0, -0.762]}
              castShadow
              receiveShadow
            />
          </group>
          <group position={[8.672, 0.163, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes["Cylinder005_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes["Cylinder005_Material_#13_0"].geometry}
              material={materials.Material_13}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[-13.343, 26.483, 0]}
            rotation={[Math.PI, 0, -1.826]}
          >
            <mesh
              geometry={nodes["Object003_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[0.089, 1.044, -1]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[-14.048, 26.066, 0]}
            rotation={[Math.PI, 0, -1.826]}
          >
            <mesh
              geometry={nodes["Object004_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[0.089, 1.044, -1]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[-14.048, 26.066, 0]}
            rotation={[Math.PI, 0, -1.826]}
          >
            <mesh
              geometry={nodes["Object006_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[0.089, 1.044, -1]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[-13.485, 26.557, 0]}
            rotation={[Math.PI, 0, -1.826]}
          >
            <mesh
              geometry={nodes["Object008_04_-_Default_0"].geometry}
              material={materials["04_-_Default"]}
              position={[0.089, 1.044, -1]}
              castShadow
              receiveShadow
            />
          </group>
          <group position={[-4.986, 32.561, 0]} rotation={[-Math.PI, 0, 2.455]}>
            <mesh
              geometry={nodes["Object017_04_-_Default_0"].geometry}
              material={materials["04_-_Default"]}
              position={[0, 0, -0.762]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[-15.811, 26.053, 0]}
            rotation={[-Math.PI, 0, 2.455]}
          >
            <mesh
              geometry={nodes["Object018_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[-12.497, -1.832, -0.762]}
              castShadow
              receiveShadow
            />
          </group>
          <group position={[-9.133, 7.291, 0]} rotation={[Math.PI, 0, -0.678]}>
            <mesh
              geometry={nodes["Object019_04_-_Default_0"].geometry}
              material={materials["04_-_Default"]}
              position={[-12.497, -1.832, -0.762]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[-13.485, 26.557, 0]}
            rotation={[Math.PI, 0, -1.826]}
            castShadow
            receiveShadow
          >
            <mesh
              geometry={nodes["Object021_04_-_Default_0"].geometry}
              material={materials["04_-_Default"]}
              position={[0.089, 1.044, -1]}
              castShadow
              receiveShadow
            />
          </group>
          <group position={[8.65, 29.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes["Sphere020_05_-_Default_0"].geometry}
              material={materials["05_-_Default"]}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes.Sphere020_Ceramic_0.geometry}
              material={materials.Ceramic}
              position={[0, 0, 2.957]}
              castShadow
              receiveShadow
            />
          </group>
          <mesh
            geometry={nodes["Box010_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[1.878, 36.061, 1.639]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Box011_03_-_Default_0"].geometry}
            material={materials["03_-_Default"]}
            position={[19.796, 0, 4.396]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Cylinder001_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[-3.393, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Cylinder003_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[-7.97, 2.98, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Cylinder004_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[1.841, 36.849, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Cylinder006_01_-_Default_0"].geometry}
            material={materials["01_-_Default"]}
            position={[-3.393, 1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Cylinder008_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[2.423, 37.547, -4.678]}
            rotation={[Math.PI, 0, -2.793]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Line002_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[-13.684, 28.673, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1, 1, 1.241]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Object012_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[-8.08, 2.392, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Object013_03_-_Default_0"].geometry}
            material={materials["03_-_Default"]}
            position={[-8.124, 2.392, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Object014_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[8.672, 0.49, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Object015_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[2.519, 35.883, 8.429]}
            rotation={[Math.PI, 0, 0]}
            scale={-1}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Object016_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[1.878, 36.061, 1.639]}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Object020_04_-_Default_0"].geometry}
            material={materials["04_-_Default"]}
            position={[5.841, 36.88, -0.667]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Sphere001_03_-_Default_0"].geometry}
            material={materials["03_-_Default"]}
            position={[-8.385, 6.918, -0.683]}
            rotation={[-Math.PI, 0, -Math.PI]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Sphere017_03_-_Default_0"].geometry}
            material={materials["03_-_Default"]}
            position={[5.841, 36.88, -0.667]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes["Spring013_02_-_Default_0"].geometry}
            material={materials["02_-_Default"]}
            position={[-4.845, 9.156, -1.754]}
            rotation={[0, 0, 1.85]}
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </group>
  );
};

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);
  const light = useRef();
  const modelref = useRef();

  useEffect(() => {
    // console.log(position);
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  useHelper(light, PointLightHelper, 0.5, "white");

  return (
    <>
      {/* <PerspectiveCamera makeDefault position={[0, 8, 20]} fov={25}> */}
      <directionalLight
        //   ref={light}
        intensity={0.5}
        position={[20, 20, 50]}
        // castShadow
      />
      <directionalLight
        // ref={light}
        intensity={0.2}
        position={[0, 2, -10]}
        color={"#ffc9ce"}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={0.000001}
        castShadow
      />
      <pointLight
        // ref={light}
        intensity={5}
        position={[2.6, -2, 0.9]}
        color={"#ffc9ce"}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={0.000001}
        castShadow
      />
      <pointLight
        ref={light}
        intensity={5}
        scale={0.5}
        position={[-6.8, -2, 0.8]}
        color={"#ffc9ce"}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={0.000001}
        castShadow
      />
      {/* <pointLight
        // ref={light}
        intensity={10}
        position={[5, 2, -9]}
        color={"#ffc9ce"}
        castShadow
      /> */}
      {/* <pointLight
        // ref={light}
        intensity={10}
        position={[0, 2, -9]}
        color={"#ffc9ce"}
        castShadow
      /> */}

      {/* <hemisphereLight intensity={0.5} /> */}
      {/* <pointLight ref={light} intensity={1} position={[20, 20, 50]} /> */}

      <ambientLight intensity={0.3} color={"#ffc9ce"} />
      {/* </PerspectiveCamera> */}
      {/* <ContactShadows position={[0, -3.8, 0]} /> */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // maxAzimuthAngle={0}
          // minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI * 0.02}
          minAzimuthAngle={-Math.PI * 0.02}
          // setAzimuthalAngle={Math.PI / 4}
        />
        <NewComputer isMobile={isMobile} ref={modelref} />
        {/* <Plane /> */}
      </Suspense>
      <Preload all />
    </>
  );
};

const NewComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, -5, 19], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Center>
        <Scene />
      </Center>
    </Canvas>
  );
};

export default NewComputerCanvas;
