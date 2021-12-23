import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/walle/Scene.js";
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

      <div className="lg:w-screen   my-8 container bg-gradient-to-r from-black to-blue-300  px-6 bg-opacity-50 flex items-center  rounded-tr-full rounded-br-full overflow-hidden  ">
        <div className="max-w-xl">
          <div className="text-6xl">
            <h2 className=" text-white font-semibold text-center pt-2">
              Jacob Elali
            </h2>
          </div>

          <div className="mt-6 py-2 ">
            <a
              href="/resume.pdf"
              className="inline-block text-xl sm:ml-0 md:ml-6 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white lg:ml-0 "
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

      <div className="flex">
        <div className="lg:ml-20   mt-2  px-4 text-black  lg:w-1/2 lg:h-1/4 sm:w-screen sm:h-fit">
          <h2 className=" text-4xl text-left font-bold">About Me</h2>
          <p className=" text-2xl font-sans mt-6 ">
            I am a junior software engineer based in Sydney, Australia. My
            passion lies within web development and I love to explore the latest
            cutting edge technology! My most recent experience has been as a
            Junior Web Developer as a SWE Intern. I am looking for opportunities
            where I can learn, grow and thrive with development. I also love
            building real, genuine relationships with people.
          </p>
        </div>
      </div>
      <div className="flex lg:ml-48 w-96 mt-8 h-96  ">
        <Canvas camera={{ pov: 100, position: [3, 3, 7] }}>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <ambientLight intensity={1} />
          <directionalLight />

          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex top-48">
        <div className="lg:ml-20  float-left   px-4 text-black  lg:w-1/2 lg:h-1/4 sm:w-screen sm:h-fit">
          <h2 className="text-4xl text-left font-bold">Academia</h2>
          <img
            className="place-items-center w-32 float-right"
            src="utslogo.jpg"
            alt="utslogo"
          ></img>
          <p className="text-2xl mt-6">
            <b>Course: </b>Bachelor of Engineering (Honours) <br></br>{" "}
            <b>Major: </b>Software Engineering
            <br></br>
            <b> Sub-Major: </b>Real-time Systems <br></br> January 2017 – June
            2022 (expected)
            <br></br>
            <b> University: </b>University of Technology Sydney <br></br>{" "}
            <b>WAM:</b> 74
          </p>
        </div>
      </div>
      <div className="flex mt-16">
        <div className="lg:ml-20  float-left   px-4 text-black text-2xl lg:w-1/2 lg:h-1/4 sm:w-screen sm:h-fit">
          <h2 className="text-4xl text-left font-bold">Projects</h2>
          <a href="https://github.com/jacobelali3/react-resume-website" target="_blank">
          <img
            className="place-items-center w-20 animate-bounce float-right"
            src="githubLogo.png"
            alt="Git Hub Logo"
          ></img>
          </a>
          <p className="text-slate-800  font-sans mt-6 ">
            <b>This Website</b><br></br><br></br> This website is made with React, Three.js
            and TailwindCSS. Three.js is used to render the cute wallE model you
            see above and Tailwind is used for styling. This website was built to serve as my portfolio website. I intially built this
            website using the new REMIX framework, which can be found<a className='text-bold text-blue-500'href="https://github.com/jacobelali3/REMIXresumeWebsite" target="_blank"> here</a>, but there were alot of complications with the 3d model.
          </p>
          <a href="https://github.com/jacobelali3/react-resume-website" target="_blank">
          <img
            className="place-items-center animate-bounce w-20 float-right"
            src="githubLogo.png"
            alt="Git Hub Logo"
          ></img>
          </a>
          <p className="  font-sans mt-6 ">
            <b>This Website</b><br></br><br></br> This website is build with React, Three.js
            and TailwindCSS. Three.js is used to render the cute wallE model you
            see above and Tailwind is used for styling. This website is built
            from scratch to serve as my portfolio website. I intially built this
            website using the new REMIX framework, which can be found<a className='text-bold text-blue-500'href="https://github.com/jacobelali3/REMIXresumeWebsite" target="_blank"> here</a>, but there were alot of complications with the 3d model.
          </p>
          <a href="https://github.com/jacobelali3/react-resume-website" target="_blank">
          <img
            className="place-items-center  animate-bounce w-20 float-right"
            src="githubLogo.png"
            alt="Git Hub Logo"
          ></img>
          </a>
          <p className="  font-sans mt-6 ">
            <b>This Website</b><br></br><br></br> This website is build with React, Three.js
            and TailwindCSS. Three.js is used to render the cute wallE model you
            see above and Tailwind is used for styling. This website is built
            from scratch to serve as my portfolio website. I intially built this
            website using the new REMIX framework, which can be found<a className='text-bold text-blue-500'href="https://github.com/jacobelali3/REMIXresumeWebsite" target="_blank"> here</a>, but there were alot of complications with the 3d model.
          </p>
        
        
        </div>
      </div>
    </>
  );
}

export default App;
