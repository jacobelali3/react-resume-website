import "../index.css";
import Video from "./Video/Code-Right3.mp4"

function homepage() {
  return (
    <div >
      <video autoPlay loop muted className="w-full h-full object-fill   -z-50">
        <source src={Video} type="video/mp4"></source>
      </video>
      
     
    
    </div>
  );
}

export default homepage;
