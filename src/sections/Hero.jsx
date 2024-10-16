import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import HondaRS2010 from "../components/HondaRS2020";
import HD72 from "../components/HD72";
import { HackerRoom } from "../components/Hackerroom";

const Hero = () => {
  const [brakedisc, setBrakeDisc] = useState(true);
  const [seat, setSeat] = useState(true);
  const [mirrors, setMirrors] = useState(true);
  const [headlight, setHeadlight] = useState(true);
  const [tire, setTire] = useState(true);
  return (
    <div className="homebg1">
      <div className="flex items-center justify-center ">
        <div className="position-relative w-[350px] h-[350px] cursor-pointer m-5">
          <div className="bg-no-repeat h-[250px] bg-center bg-position-right bg-blue bg-box1"></div>
          <div className="p-5 text-center bg-blue text-white font-semibold">
            CARS & BIKES
          </div>
        </div>
        <div className="position-relative w-[350px] h-[350px] cursor-pointer m-5">
          <div className="bg-no-repeat h-[250px] bg-center bg-position-right bg-blue bg-box2"></div>
          <div className="p-5 text-center bg-orange text-white font-semibold">
            TRUCKS & JEEPS
          </div>
        </div>
        <div className="position-relative w-[350px] h-[350px] cursor-pointer m-5">
          <div className="bg-no-repeat h-[250px] bg-center bg-position-right bg-blue bg-box3"></div>
          <div className="p-5 text-center bg-red text-white font-semibold">
            MUSCLE CARS
          </div>
        </div>
      </div>

      <div id="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 20] }}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enablePan={true}
              enableRotate={true}
            />
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <HD72
              rotation={[0, -Math.PI / 2, 0]}
              scale={[7, 7, 7]}
              brakedisc={brakedisc}
              tire={tire}
              seat={seat}
              headlight={headlight}
              mirrors={mirrors}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="bg-white p-5 w-full h-[120px] fixed bottom-0 left-0 flex items-center justify-around">
        <div className="cursor-pointer" onClick={() => setMirrors(!mirrors)}>
          <div className="bg-mirrors parts"></div>
          <div className="font-bold text-xl text-black-200 text-center">
            Mirror
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setBrakeDisc(!brakedisc)}
        >
          <div className="bg-rotors parts"></div>
          <div className="font-bold text-xl text-black-200 text-center">
            Break Rotors
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setHeadlight(!headlight)}
        >
          <div className="bg-Headlight parts"></div>
          <div className="font-bold text-xl text-black-200 text-center">
            Headlights
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => setSeat(!seat)}>
          <div className="bg-seats parts"></div>
          <div className="font-bold text-xl text-black-200 text-center">
            Seat
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => setTire(!tire)}>
          <div className="bg-tire parts"></div>
          <div className="font-bold text-xl text-black-200 text-center">
            Tire
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
