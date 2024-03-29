import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/burgerMenu.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Academia from "./components/academia.jsx";
import Projects from "./components/projects.jsx";
import Professional from "./components/professional.jsx";
import Homepage from "./components/home.jsx";
import DarkMode from "./components/darkMode.jsx";
import { Helmet } from "react-helmet";

function App() {
  
  return (
    <div className="bg-white dark:bg-black  overflow-hidden w-full h-full text-slate-800 dark:text-white ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jacob Elali</title>
        <meta name="Homepage" content="Jacob Elali portfolio software engineer Homepage" />
      </Helmet>
      <div className="left-0 top-0 fixed z-50 w-22 bg-black">
        <DarkMode />
      </div>
      <nav className="right-0 top-0 fixed z-50  w-22 lg:w-screen rounded-full lg:rounded-none dark:bg-slate-800  bg-black p-6">
        <div className="  text-white "></div>
        <div className="lg:hidden float-right">
          <BurgerMenu />
        </div>
        <div className="lg:ml-4 w-full  lg:flex lg:justify-center lg:w-auto">
          <div className=" hidden  lg:flex text-xl lg:flex-grow">
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
            <DarkMode />
          </div>

          <div className="">
            <a
              href={"mailto:jacobelali3@outlook.com"}
              className=" text-xl hidden  lg:flex px-4 py-1  mr-4  border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white "
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <div className="lg:w-screen  relative z-20 mt-16 lg:mt-32 container bg-gradient-to-r from-black to-blue-300  px-6 bg-opacity-50 flex items-center  rounded-tr-full rounded-br-full overflow-hidden  ">
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
        <Route path="/" element={<Homepage />} title="Homepage" />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Academia" element={<Academia />} />
        <Route path="Professional" element={<Professional />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
