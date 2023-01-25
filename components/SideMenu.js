import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    overlayRef.current?.addEventListener("click", handleOverlayClick);

    return () =>
      overlayRef.current.removeEventListener("click", handleOverlayClick);
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <button
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        className='fixed top-0 right-0 md:hidden z-[100] p-4 outline-none border-0'
      >
        {isMenuOpen ? (
          <XIcon className='h-10 text-neon' />
        ) : (
          <MenuIcon className='h-10 text-neon' />
        )}
      </button>
      <div
        ref={overlayRef}
        className={`fixed ${
          !isMenuOpen ? "hidden" : "z-50 w-full h-full bg-[rgba(0,0,0,.5)]"
        }`}
      ></div>
      <menu
        className={`fixed w-64 z-[60] right-0 transform transition-transform ${
          !isMenuOpen && "translate-x-full duration-100"
        } pt-28 h-full bg-base my-0 transition-width duration-200 linear`}
      >
        <nav className='text-center w-full h-full'>
          <ul className='space-y-3'>
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
