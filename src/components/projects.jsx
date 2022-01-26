import '../index.css'
import {Helmet} from "react-helmet";

function projects() {
  return (
    <div className="flex my-16">
<Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
        <meta name="Projects" content="Jacob Elali portfolio software engineer projects hobby android java javascript web developer sydney australia" />
      </Helmet>

      <div className="lg:ml-20    px-4  text-2xl lg:w-1/2 w-auto ">
        <h2 className="text-4xl text-left font-bold">Projects</h2>

        <a
          href="https://github.com/jacobelali3/Software-Engineering-Studio-2B"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="place-items-center mt-4  animate-bounce w-20 float-right dark:bg-white dark:rounded-full"
            src={"/assets/githubLogo.png"}
            alt="Git Hub Logo"
          ></img>
        </a>
        <p className="  font-sans  mt-10 ">
          <b>UTS HELPS Prototype</b>
          <br></br>
          <br></br> Collaborated on a prototype for the outdated UTS HELPS
          website that handled student appointment booking. The website was
          built with django, sqlite, JS and html. In addition to booking, the
          system had authentication, chat, email and various admin
          functionality.
        </p>
        <a
          href="https://github.com/jacobelali3/2021-SES3B-Team4"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="place-items-center mt-10 animate-bounce w-20 float-right dark:bg-white dark:rounded-full"
            src={"/assets/githubLogo.png"}
            alt="Git Hub Logo"
          ></img>
        </a>
        <p className=" font-sans mt-10 ">
          <b>COVID-19 App</b>
          <br></br>
          <br></br> Collaborated on an application that was developed in
          response to the Covid-19 pandemic. The main feature consisted of a
          chatbot that predicted if a patient had covid. In addition; the app
          provided statistics, news, visual models and client-to-doctor
          communication functionality. It was built with React, Material UI and
          Flask.
        </p>
        <a
          href="https://github.com/jacobelali3/react-resume-website"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="place-items-center mt-10 w-20 animate-bounce float-right dark:bg-white dark:rounded-full"
            src={"/assets/githubLogo.png"}
            alt="Git Hub Logo"
          ></img>
        </a>
        <p className="  font-sans mt-10 ">
          <b>This Website</b>
          <br></br>
          <br></br> This website is made with React, Three.js and Tailwind.
          Three.js is used to render the cute wallE model in the 'About Me' section and
          Tailwind is used for styling. This website was built to serve as my
          portfolio website. I intially built this website using the new REMIX
          framework, which can be found
          <a
            className="text-bold text-blue-500"
            href="https://github.com/jacobelali3/REMIXresumeWebsite"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            here
          </a>
          , but there were alot of complications with REMIX's server side and
          webGL rendering.
        </p>
        <p className="font-semibold mt-10 ">Other Projects</p>
        <ul className=" pl-6 font-sans mt-6 list-disc">
          <li className="underline decoration-blue-400 hover:text-blue-500">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/jacobelali3/CprogrammingUTS"
            >
              Banking app using <b>C</b>.
            </a>
          </li>
          <li className="underline decoration-blue-400 hover:text-blue-500">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/jacobelali3/CProg"
            >
              Encryption and compression using <b>C</b>
            </a>
          </li>
          <li className="underline decoration-blue-400 hover:text-blue-500">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/jacobelali3/SES-1B-Group-3"
            >
              Android health app with map and heart rate monitor using{" "}
              <b>Java</b>.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default projects;
