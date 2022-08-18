import '../index.css'
import {Helmet} from "react-helmet";

function professional() {
    return (
        <div className="flex mt-16  lg:flex-row flex-col mb-12 ">

<Helmet>
        <meta charSet="utf-8" />
        <title>Professional</title>
        <meta name="Professional" content="Jacob Elali portfolio software engineer professional experience sydney australia" />
      </Helmet>

        <div className="lg:ml-16  px-4  text-2xl ">
          <h2 className="text-4xl text-left font-bold">
            Professional Experience
          </h2>

          <div className='mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <img
            className=" mt-10 ml-2 lg:mr-6 rounded-lg w-20 float-right"
            src={"/assets/prospecta-logo.png"}
            alt="Income Energy Logo"
          ></img>
          <p className=" font-sans mt-10  ">
            <b>Prospecta Software</b>
            <br></br>Graduate Software Engineer
            <br></br>March 2022 - June 2022
            <br></br>
            <br></br> Prospecta software specialises in master data governance. When I was working there, they were in the process of revamping their software architecture and product vision.
            They were in the process of moving from a monolithic to microservice based architecture and developing a new white label product 'MDO FUSE'. I had regular talks with other engineers, architect, product owners and analysts throughout the SDLC.
            <br></br>
            <br></br>&#8226; Developed and optimised multiple API's within tight deadlines using Spring boot and Java 11.
            <br></br>&#8226; Merged, pulled and resolved branches using git, bitbucket and builds using Jenkins.
            <br></br>&#8226; Developed unit tests using JUnit and Mockito.
            <br></br>&#8226; Used Agile software such as Jira and Confluence.
            <br></br>&#8226; Executed queries and data changes using Elasticsearch.
            <br></br>&#8226; Communicated with engineers, product owners and analysts throughout the SDLC.
          </p>
          </div>

          <div className='mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <img
            className=" mt-6  rounded-lg w-20 float-right"
            src={'/assets/astrnt-logo.png'}
            alt="Astronaut Technologies Logo"
          ></img>
          <p className=" font-sans mt-10 ">
            <b>Astronaut Technologies</b>
            <br></br>Software Engineer Intern
            <br></br> November 2021 - Present
            <br></br>
            <br></br> Astronaut is an asynchronous video interviewing company
            offering SAP and SAS services.
            <br></br>&#8226; Daily standup and product meetings.
            <br></br>&#8226; Devleop backend logging features.
            <br></br>&#8226; Perform system and API tests.
          </p>
          </div>

          <div className='mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <img
            className=" mt-10 ml-2 lg:mr-6 rounded-lg w-20 float-right"
            src={"/assets/incomeenergy-logo.png"}
            alt="Income Energy Logo"
          ></img>
          <p className=" font-sans mt-10  ">
            <b>Income Energy</b>
            <br></br>Software Engineer Intern
            <br></br>February 2021 - April 2021
            <br></br>
            <br></br> Income Energy was a solar startup hosted by Energy Lab, a
            UTS partner.
            <br></br>&#8226; Co-developed a billing system in JS, HTML and css.
            <br></br>&#8226; Programmed dynamic pdf bills for customers.
            <br></br>&#8226; Converted electric API data into useful
            analytics.
          </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 px-4  text-2xl  lg:mr-16">
          <h2 className="text-4xl text-left font-bold">Skills</h2>
          <div className='mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <p className=" font-sans font-bold text-2xl mt-10  ">Technical</p>
          <p className=" font-sans mt-4  ">
            Programming &#10137; Javascript, Typescript, Java, C, HTML, CSS,
            MySQL, NoSQL.
            <br></br>
            Technologies &#10137; Laravel, React, Remix, Django and Flask,
            Pandas, Threejs.
          </p>
          <p className=" font-sans font-bold text-2xl mt-6  ">Transferable</p>
          <p className=" font-sans mt-4  ">
            &#8226; Good <b>problem solving skills</b>, always determined to
            achieve tasks using creative and proven methods.
            <br></br>&#8226; Excellent <b>communication</b> and{" "}
            <b>interpersonal skills</b> as demonstrated working in small dev
            teams aswell as product teams.
            <br></br>&#8226; <b>Autonomous</b> and self-driven work ethic, able
            to absorb information and have a <b>passion for learning</b>.
          </p>
        </div>
        </div>
      </div>
    )
}

export default professional
