import { useState } from "react";


function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {setIsOpen(!isOpen)
  console.log('hi')}

  return (
    <div className="flex  lg:hidden">
    <button onClick = {toggleMenu} className=" items-center px-3 py-2 border rounded text-white border-white hover:text-blue-300 hover:border-blue-300 hover:bg-white">
    <svg
      className="fill-current h-3 w-3"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </button>
  </div>
  );
}

export default BurgerMenu;
