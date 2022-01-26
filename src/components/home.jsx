import "../index.css";
import Video from "./Video/Code-Right3.mp4"

function homepage() {
  return (
    <div>
    <div className="w-full h-full top-0 bottom-0 absolute overflow-hidden  " >
      <video playsInline autoPlay loop muted className="object-cover w-full h-full min-w-full min-h-full -z-50 ">
        <source src={Video} type="video/mp4"></source>
      </video>
     
      
     
    
    </div>

    <div  className=" h-22 mt-48   flex  justify-center mx-12">
      <div className="px-6 py-6  bg-slate-800 rounded-lg relative animate-beat ">
        <h1 className="text-2xl text-white text-center">Welcome,<br></br>I'm a software engineer with a passion for technology!</h1>
        <p className="pt-4 text-white text-center">Check me out!</p>
      </div>
    </div>
    
    </div>
  );
}

export default homepage;
