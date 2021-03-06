import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function SideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOverlayClick = () => {
      if (isMenuOpen) {
        closeMenu();
      }
    };
    overlayRef.current?.addEventListener('click', handleOverlayClick);

    return () =>
      overlayRef.current.removeEventListener('click', handleOverlayClick);
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <div className='fixed top-0 right-0 md:hidden z-[100]'>
        <button
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className='p-4 outline-none border-0'
        >
          {isMenuOpen ? (
            <XIcon className='text-neon' />
          ) : (
            <MenuIcon className='h-10 text-neon' />
          )}
        </button>
      </div>
      <div
        ref={overlayRef}
        className={`fixed ${
          !isMenuOpen ? 'hidden' : 'z-50 w-full h-full bg-[rgba(0,0,0,.5)]'
        }`}
      ></div>
      <menu
        className={`fixed right-0 z-[60] ${
          !isMenuOpen ? 'w-0 duration-100' : 'w-64'
        } pt-28 h-full bg-base my-0 transition-width duration-200 linear`}
      >
        <nav className='text-center w-full h-full'>
          <ul>
            <li className=''>
              <Link href='#top'>
                <a onClick={handleNavLinkClick} className='mobileNavLink'>
                  &lt;Home /&gt;
                </a>
              </Link>
            </li>

            <li>
              <Link href='#About'>
                <a onClick={handleNavLinkClick} className='mobileNavLink'>
                  &lt;About /&gt;
                </a>
              </Link>
            </li>

            <li>
              <Link href='#Projects'>
                <a onClick={handleNavLinkClick} className='mobileNavLink'>
                  &lt;Projects /&gt;
                </a>
              </Link>
            </li>

            <li>
              <Link href='#Contact'>
                <a onClick={handleNavLinkClick} className='mobileNavLink'>
                  &lt;Contact /&gt;
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </menu>
    </>
  );
}

export default SideMenu;
