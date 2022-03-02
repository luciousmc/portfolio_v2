import Link from 'next/link';
import Logo from './Logo';

function Header() {
  return (
    <header className='bg-base fixed z-50 h-20 w-full flex items-center justify-between px-10 py-5 shadow-lg'>
      <div className='flex-grow'>
        <Logo />
      </div>
      <div>
        <nav>
          <ul className='hidden md:flex mr-5 space-x-8'>
            <li>
              <Link href='#top'>
                <a className='navLink'>&lt;Home /&gt;</a>
              </Link>
            </li>

            <li>
              <Link href='#About'>
                <a className='navLink'>&lt;About /&gt;</a>
              </Link>
            </li>

            <li>
              <Link href='#Projects'>
                <a className='navLink'>&lt;Projects /&gt;</a>
              </Link>
            </li>

            <li>
              <Link href='#Contact'>
                <a className='navLink'>&lt;Contact /&gt;</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link href='#'>
          <a className='hidden md:inline text-neon border-2 py-2 px-3 border-neon rounded-md transition-colors duration-300 hover:bg-neon-tint'>
            Resume
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
