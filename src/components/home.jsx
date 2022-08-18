import "../index.css";
import Video from "./Video/Code-Right3.mp4"
import Spinner from "./spinner";
import { Link } from "react-router-dom";
import { Suspense } from "react";
function homepage() {
  return (
    <div>


    <div className="w-full h-full top-0 bottom-0 absolute overflow-hidden object-cover min-h-fill min-w-full " >
    <Suspense fallback= {<Spinner></Spinner>}>
      <video playsInline autoPlay loop muted className="object-cover w-full h-full min-w-full min-h-full -z-50 ">
        <source src={Video} type="video/mp4"></source>
      </video>
      </Suspense>
    </div>



    <div  className=" h-22 mt-48   flex  justify-center mx-12">
      <div className="px-6 py-6 relative bg-slate-800 rounded-lg animate-beat ">
        <h1 className="text-2xl text-white text-center"><Link to="/AboutMe">Welcome,<br></br>I'm a software engineer with a passion for technology!</Link></h1>
        <p className="pt-4 text-white text-center no-underline hover:underline decoration-blue-400"><Link to="/AboutMe">Check me out!</Link></p>

        </div>
    </div>

    </div>
  );
}

export default homepage;
