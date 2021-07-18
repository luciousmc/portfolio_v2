import { Facebook, Linkedin, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import { MailIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function SocialBox() {
  return (
    <aside className='hidden md:flex flex-col fixed left-20 bottom-5'>
      <Link href="https://www.facebook.com/marlon.lucious/">
        <Facebook className='social-icon' />
      </Link>

      <Link href='https://www.linkedin.com/in/marlonclay/'>
        <Linkedin className='social-icon' />
      </Link>
      
      <Link href='#'>
        <Twitter className='social-icon' />
      </Link>
      
      <Link href='mailto:luciousmc@icloud.com'>
        <MailIcon className='social-icon' />
      </Link>

      <div className='border-l border-r border-neon h-24 w-0 mx-auto bg-neon' />
    </aside>
  )
}

export default SocialBox