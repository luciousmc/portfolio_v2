import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

function SideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsMenuOpen(isOpen => !isOpen)}
        className='absolute top-0 right-0 p-4 z-[100] md:hidden outline-none border-0'
      >
        <MenuIcon className='h-12 text-slate' />
      </button>
      <div className={`${!isMenuOpen ? 'hidden' : 'fixed z-50 w-full h-full bg-[rgba(0,0,0,.5)]'}`}>
        <menu className='absolute right-0 pt-28 w-64 h-full flex flex-col items-end bg-base my-0'>
          <nav className='text-center w-full'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </menu>
      </div>
    </>
  )
}

export default SideMenu
