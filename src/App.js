import { Link} from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Scene from './components/walle/Scene.js';
import { Suspense } from "react";


function App() {
  return (
   <>
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6"></div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-blue-300 hover:border-blue-300">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="  text-xl lg:flex-grow">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link to="/">Home</Link>
            </p>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link to="/">About me</Link>
            </p>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link to="/">Academia</Link>
            </p>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link to="/">Professional</Link>
            </p>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link to="/">Contact Me</Link>
            </p>
          </div>

          <div>
            <a
              href="/resume.pdf"
              className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white mt-4 lg:mt-0"
              download="JacobElaliResume.pdf"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div>
      <div className="lg:w-3/4   my-8 container bg-gradient-to-r from-black to-blue-300  px-6 bg-opacity-50 flex items-center  rounded-tr-full rounded-br-full overflow-hidden  ">
        <div className="max-w-xl">
          <div className="text-6xl">
            <h2 className=" text-white font-semibold text-center pt-2">
              Jacob Elali
            </h2>
          </div>

          <div className="mt-6 py-2 ">
            <a
              href="/resume.pdf"
              className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white lg:ml-0 "
              download="JacobElaliResume.pdf"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="lg:ml-72 sm:ml-32 md:ml-32 relative py-4 px-4 ">
          <div className="blur opacity-50 absolute -inset-0 bg-blue-200 rounded-full"></div>
          <img
            className=" border-transparent hover:border-2 rounded-full relative lg:w-60 md:w-40 sm:w-40"
            src={"/myprofilepic.jpg"}
          />
        </div>
      </div>

      <div    >
        <div className="block float-left mt-6 py-6 px-4 text-black text-2xl lg:w-1/2 lg:h-1/4 sm:w-screen sm:h-fit">
          <h2 className="float-left text-2xl text-left">About Me</h2>
          <p className="mt-6 float-left">
            I am a junior software engineer based in Sydney, Australia. My
            passion lies within web development and I love to explore the latest
            cutting edge technology! My most recent experience has been as a
            Junior Web Developer as a SWE Intern. I am looking for opportunities
            where I can learn, grow and thrive with development. I also love
            building real, genuine relationships with people.
          </p>
        </div>
        <div className="block left-40 w-96 h-96 float-right lg:mr-28 lg:mt-20">
          <Canvas camera={{ pov: 40, position: [1, 1, 1] }}>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <ambientLight intensity={0.7} />
            <directionalLight />
            <Suspense fallback={null}>
            <Scene />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
