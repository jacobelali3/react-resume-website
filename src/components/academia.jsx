import '../index.css'


function academia() {
    return (
        
      <div>
        <div className="text-slate-800 lg:w-1/2 px-4 py-4 flex flex-col justify-center">

          <h2 className="text-4xl  text-center font-bold mb-12  ">Academia</h2>
          
          <img
            className="w-16 h-16 align-self"
            src={'/assets/utslogo.jpg'}
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
          <p className="text-3xl">
            <b>Engineering Capstone</b>
          </p>
          <p className="text-2xl mt-2 mb-4">
            <b>Research Topic:</b> Assisted Posting for Small Business Owners on
            Instagram<br></br>
            <b>Supervisor: </b> Alan Parr<br></br>Based on thorough research,
            social media marketing appears to have a large impact on small businesses. My
            engineering capstone attempts to create a program that provides data
            analyics and predictive suggestions for small business owners on
            Instragram using machine learning.{" "}
          </p>
          </div>
          <a
              href={"/assets/Research_Proposal_Jacob_Elali.pdf"}
              className=" text-xl border rounded  border-black hover:border-2 hover:border-blue-300 hover:text-blue-300 hover:bg-white  "
              target="_blank"
            >
              View Proposal Paper
            </a>
            </div>
    )
}

export default academia
