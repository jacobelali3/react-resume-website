import Scene from "./Scene";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Center } from "@react-three/drei";
import '../index.css'
import {Helmet} from "react-helmet";

function aboutMe() {
  return (
   
    <div className="pb-4  lg:flex justify-center block md:block mt-14 ">
    <Helmet>
     
        <title>About Me</title>
        <meta name="About Me" content="Jacob Elali portfolio software engineer about me page description sydney australia" />
      </Helmet>
        <div className=" lg:w-1/2 sm:w-screen mt-2  px-4   ">
          <h1 className=" text-4xl font-bold ">About Me</h1>
          
          <p className="px-2 text-2xl  font-sans mt-6 ">
            I am a junior software engineer based in Sydney, Australia. My
            passion lies within web development and I love to explore the latest
            cutting edge technology! <br></br><br></br>My most recent experience has been as a
            Junior Web Developer as a SWE Intern. Currently im learning both frontend and backend in hopes of becoming a full stack. I am looking for opportunities
            where I can learn, grow and thrive with development. I also love
            building real, genuine relationships with people.
            <br></br>
            <br></br>
            When I was a kid, I remember watching the movie Wall-E and reading a magazine about Hondas Robot 
            <a
            className="text-bold text-blue-500"
            href="https://en.wikipedia.org/wiki/ASIMO"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            ASIMO 
          </a>
           , which greatly inspired my love for technology. The use of programs and machinery to serve humanity gave me hope for a future with countless possibilites. Naturally, my specialisation into software happened thereafter.
          </p>
        
      </div>
      <div className="mt-12 h-96  ">
        <p className="text-md text-center italic animate-pulse">Touch me!</p>
        <Canvas camera={{ pov: 100, position: [3, 4, 6.5] }}>
          <Suspense fallback={null}>
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
            <Stars radius={200}saturation={500} />
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
