import '../index.css'

function professional() {
    return (
        <div className="flex mt-16  lg:flex-row flex-col mb-12 ">
        <div className="lg:ml-20   px-4  text-2xl ">
          <h2 className="text-4xl text-left font-bold">
            Professional Experience
          </h2>

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
       
        <div className="lg:ml-20   px-4  text-2xl mt-8  ">
          <h2 className="text-4xl text-left font-bold">Skills</h2>
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
    )
}

export default professional
