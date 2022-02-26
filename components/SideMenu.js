import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function SideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='fixed top-0 right-0 md:hidden z-[100]'>
        <button
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className='p-4 outline-none border-0'
        >
          <MenuIcon className='h-10 text-slate' />
        </button>
      </div>
      <div
        className={`fixed ${
          !isMenuOpen ? 'hidden' : 'z-50 w-full h-full bg-[rgba(0,0,0,.5)]'
        }`}
      ></div>
      <menu
        className={`fixed right-0 z-[60] ${
          !isMenuOpen ? 'w-0 duration-100' : 'w-64'
        } pt-28 h-full flex flex-col items-end bg-base my-0 transition-width duration-200 linear`}
      >
        <nav className='text-center w-full'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </menu>
    </>
  );
}

export default SideMenu;
