import "../index.css";
import Video from "./Video/Code-Right3.mp4"

function homepage() {
  return (
    <div className="w-full h-full top-0 bottom-0 absolute overflow-hidden" >
      <video autoPlay loop muted className="object-cover w-auto h-auto min-w-full min-h-full -z-50 ">
        <source src={Video} type="video/mp4"></source>
      </video>
     
      
     
    
    </div>
  );
}

export default homepage;
