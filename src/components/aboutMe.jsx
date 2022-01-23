import Scene from "./Scene";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Center } from "@react-three/drei";
import '../index.css'


function aboutMe() {
  return (
   
    <div className="pb-4 flex-row lg:flex justify-center sm:block md:block">
    
        <div className=" lg:w-1/2 sm:w-screen mt-2  px-4  text-slate-800 ">
          <h1 className=" text-4xl font-bold lg:text-left md:text-center sm:text-center">About Me</h1>
          
          <p className="px-2 text-left text-2xl  font-sans mt-6 ">
            I am a junior software engineer based in Sydney, Australia. My
            passion lies within web development and I love to explore the latest
            cutting edge technology! <br></br><br></br>My most recent experience has been as a
            Junior Web Developer as a SWE Intern. I am looking for opportunities
            where I can learn, grow and thrive with development. I also love
            building real, genuine relationships with people.
          </p>
        
      </div>
      <div className="mt-12 h-96  ">
        <Canvas camera={{ pov: 100, position: [3, 4, 6.5] }}>
          <Suspense fallback={null}>
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
            {/*<Stars radius={200}saturation={500} />*/}
            <ambientLight intensity={1} />
            <directionalLight />

            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default aboutMe;
