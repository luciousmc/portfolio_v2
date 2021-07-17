import { Facebook, Linkedin, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import { MailIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function SocialBox() {
  return (
    <aside className='hidden md:flex flex-col fixed left-20 bottom-0'>
      <Link href="https://www.facebook.com/marlon.lucious/">
        <Facebook className='social-icon' />
      </Link>
      <Linkedin className='social-icon' />
      <Twitter className='social-icon' />
      <MailIcon className='social-icon' />
    </aside>
  )
}

export default SocialBox