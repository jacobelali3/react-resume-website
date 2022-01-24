import { Link } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/burgerMenu.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Academia from "./components/academia.jsx";
import Projects from "./components/projects.jsx";
import Professional from "./components/professional.jsx";
import Contact from "./components/contactMe.jsx";
import Homepage from "./components/home.jsx";


function App() {
  return (
    <div  className="bg-white dark:bg-black  overflow-auto">
  
        <nav className="top-0 fixed z-50  w-screen    bg-black p-6">
          <div className="  text-white mr-6"></div>
          <div className="lg:hidden">
            <BurgerMenu />
          </div>
          <div className="w-full  lg:flex lg:items-center lg:w-auto">
            <div className=" hidden sm:hidden md:hidden lg:flex text-xl lg:flex-grow">
              <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
                <Link to="/">Home</Link>
              </p>
              <p className=" mt-4 lg:mt-0 text-white hover:text-blue-300 mr-4">
                <Link to="/AboutMe">About me</Link>
              </p>
              <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
                <Link to="/Academia">Academia</Link>
              </p>
              <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
                <Link to="/Professional">Professional</Link>
              </p>
              <p className=" mt-4 lg:mt-0 text-white hover:text-blue-300 mr-4">
                <Link to="/Projects">Projects</Link>
              </p>
              <p className="mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
                <Link to="/ContactMe">Contact Me</Link>
              </p>
            </div>

            <div className=" top-7 left-2 ">
              <a
                href={"/assets/resume.pdf"}
                className=" text-xl  px-4 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white mt-4 lg:mt-0"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>
       

        <div className="lg:w-screen  bottom-32  z-20 mt-32 container bg-gradient-to-r from-black to-blue-300  px-6 bg-opacity-50 flex items-center  rounded-tr-full rounded-br-full overflow-hidden  ">
          <div className="max-w-xl">
            <div className="text-3xl md:text-6xl lg:text-6xl">
              <h2 className=" text-white dark:text-slate-300 font-semibold text-center lg:ml-64 pt-2">
                Jacob Elali
              </h2>
            </div>

            <div className="mt-6 py-2 ">
              <a
                href="/assets/resume.pdf"
                className="lg:inline-block lg:text-lg md:text-base lg:ml-64 sm:ml-0 md:ml-6 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white "
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="lg:ml-72 sm:ml-32 md:ml-32 relative py-4 px-4 ">
            <div className="blur opacity-50 dark:opacity-80 absolute -inset-0 bg-blue-200 dark:bg-blue-200 rounded-full"></div>
            <img
              alt="jacobElali"
              className=" border-transparent hover:border-2 rounded-full relative lg:w-60 md:w-40 sm:w-40 w-40"
              src={"/assets/myprofilepic.jpg"}
            />
          </div>
        </div>
        

        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Academia" element={<Academia />} />
          <Route path="Professional" element={<Professional />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="ContactMe" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;
