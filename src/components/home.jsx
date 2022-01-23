import '../index.css'

function homepage() {
    return (
        <div className='flex flex-row w-screen '>
       <img
            className="w-1/3 h-48 rounded-tl rounded-bl"
            src={'/assets/homepage.gif'}
            alt="homegif"
            rel="noreferrer"
            

          ></img>
          <img
            className="w-1/3 h-48"
            src={'/assets/homepage.gif'}
            alt="homegif"
            rel="noreferrer"
            

          ></img>
          <img
            className="w-1/3 h-48"
            src={'/assets/homepage.gif'}
            alt="homegif"
            rel="noreferrer"
            

          ></img>
        </div>
    )
}

export default homepage
