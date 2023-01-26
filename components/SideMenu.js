import { MailIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Facebook, Linkedin, Twitter } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function SideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const handleOverlayClick = () => {
      if (isMenuOpen) {
        closeMenu();
      }
    };
    overlay.addEventListener("click", handleOverlayClick);

    return () => overlay.removeEventListener("click", handleOverlayClick);
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
          !isMenuOpen && "translate-x-full duration-200"
        } pt-28 pb-10 pl-0 h-full bg-base my-0`}
      >
        <nav className='flex flex-col justify-between text-center w-full h-full'>
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

          <div className='flex flex-wrap justify-center'>
            <div className='flex items-center gap-3 px-5 w-full'>
              <div className='h-1 w-full bg-accent' />
              <h3 className='text-xl'>Socials</h3>
              <div className='h-1 w-full bg-accent' />
            </div>

            <ul className='flex'>
              <li>
                <a
                  href='https://www.facebook.com/marlon.lucious/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Facebook className='social-icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/marlonclay/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Linkedin className='social-icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/brotahman'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Twitter className='social-icon' />
                </a>
              </li>
              <li>
                <a
                  href='mailto:luciousmc@icloud.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <MailIcon className='social-icon' />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </menu>
    </>
  );
}

export default SideMenu;
