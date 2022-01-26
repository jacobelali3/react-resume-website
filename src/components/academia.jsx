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
          
          <div className=" mt-12 ">
          <img
            className="w-22 h-14 float-right relative mb-12 rounded-lg bg-black px-2 py-2"
            src={'/assets/utslogo.png'}
            alt="utslogo"
            rel="noreferrer"
            
            
          ></img>
         <p className="text-2xl ">
            <b>Course: </b>Bachelor of Engineering (Honours) <br></br>{" "}
            <b>Major: </b>Software Engineering
            <br></br>
            <b> Sub-Major: </b>Real-time Systems <br></br> January 2017 – June
            2022 (expected)
            <br></br>
            <b> University: </b>University of Technology Sydney <br></br>{" "}
            <b>WAM:</b> 75
          </p>
          </div>



         
          
          <div>
          <h2 className="mt-12 text-3xl   font-bold  ">Engineering Capstone</h2>
          </div>

          <div className='mb-4'>
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



            <div className="mt-12 text-xl" >
              <h1 className=" font-bold">41055 Engineering Workplace Reflections</h1>
              <p className="mt-4">For Engineering Workplace Reflections we had to create reflections to address <br></br>1.Principles of Sustainability to create viable systems.<br></br>2.Professional Practice within intercultural and global contexts.</p>
              <p className="mt-4  relative w-56  border text-center rounded  border-black dark:border-white hover:border-2 hover:border-blue-300 hover:text-blue-300 hover:bg-white  px-2 py-2"><a
              rel="noreferrer"
              target="_blank"
              href={"/assets/41055EngineeringWorkplaceReflections.pdf"}
            >
              41055 Workplace Reflections
            </a></p>

            </div>
           
            </div>
            
    )
}

export default academia
