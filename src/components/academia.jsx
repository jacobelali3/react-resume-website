import '../index.css'
import {Helmet} from "react-helmet";

function academia() {
    return (


        <div className="justify-center lg:w-1/2 lg:ml-20 px-4 py-4 block md:block lg:flex lg:flex-col  mt-14 h-full ">

          <Helmet>

        <title>Academia</title>
        <meta name="Academia" content="Jacob Elali portfolio software engineer academic academia university uts sydney australia" />
      </Helmet>

          <div>
          <h2 className="text-4xl   font-bold  ">Academia</h2>
          </div>


          <div className='mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <img
            className="w-22 h-14 float-right relative mb-12 rounded-lg bg-gray-800 px-2 py-2 "
            src={'/assets/utslogo.png'}
            alt="utslogo"
            rel="noreferrer"


          ></img>
         <p className="text-2xl ">
            <b>Course: </b>Bachelor of Engineering (Honours) <br></br>{" "}
            <b>Major: </b>Software Engineering
            <br></br>
            <b> Sub-Major: </b>Real-time Systems <br></br> January 2017 – June
            2022
            <br></br>
            <b> University: </b>University of Technology Sydney <br></br>{" "}
            <b>WAM:</b> 77
            <br></br>
            <br></br>
            <a
              href={"/assets/degree.pdf"}
              className="mt-4  relative w-56 text-xl border text-center rounded  border-black dark:border-white hover:border-2 hover:border-blue-300 hover:text-blue-300 hover:bg-white  px-2 py-2"
              target="_blank"
              rel="noreferrer"
            >
              View Degree
            </a>
          </p>
          </div>





          <div>
          <h2 className="mt-12 text-3xl   font-bold  ">Engineering Capstone</h2>
          </div>

          <div className='mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <p className="text-2xl mt-12 mb-4 ">
            <b>Research Topic:</b> Assisted Posting for Small Business Owners on
            Instagram<br></br>
            <b>Supervisor: </b>Prof. Alan Parr<br></br><br></br>Based on thorough research,
            social media marketing appears to have a large impact on small businesses. My
            engineering capstone attempts to create a program that provides data
            analyics and predictive suggestions for small business owners on
            Instragram using machine learning.{" "}
          </p>



          <a
              href={"/assets/Research_Proposal_Jacob_Elali.pdf"}
              className="mt-4  relative w-56 text-xl border text-center rounded  border-black dark:border-white hover:border-2 hover:border-blue-300 hover:text-blue-300 hover:bg-white  px-2 py-2"
              target="_blank"
              rel="noreferrer"
            >
              View Proposal Paper
            </a>
            </div>

            </div>

    )
}

export default academia
