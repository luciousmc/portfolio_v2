import Link from 'next/link';


function Header() {
  return (
    <header className='fixed h-20 w-full flex items-center justify-between px-10 py-5 shadow-lg'>
      <div className='flex-grow'>
        {/* Title */}
        <h1 className='font-medium'>Brotahman</h1>
      </div>
      <div>
        <nav>
          <ul className='hidden md:flex mr-5 space-x-8'>
            <li>
              <Link href="/">
                <a className='navLink'>&lt;Home /&gt;</a>
              </Link>
            </li>
            <li>
              <Link href="#About">
                <a className='navLink'>&lt;About /&gt;</a>
              </Link>
            </li>
            <li>
              <Link href="#Projects">
                <a className='navLink'>&lt;Projects /&gt;</a>
              </Link>
            </li>
            <li>
              <Link href="#Contact">
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
  )
}

export default Header
