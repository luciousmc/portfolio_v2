import { Facebook, Linkedin, Twitter } from '@icons-pack/react-simple-icons';
import { MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function SocialBox() {
  return (
    <aside className='hidden md:flex flex-col items-center fixed left-8 bottom-0'>
      <a href='https://www.facebook.com/marlon.lucious/' target='_blank' rel='noreferrer'>
        <Facebook className='social-icon' />
      </a>

      <a href='https://www.linkedin.com/in/marlonclay/' target='_blank' rel='noreferrer'>
        <Linkedin className='social-icon' />
      </a>

      <a href='https://twitter.com/brotahman' target='_blank' rel='noreferrer'>
        <Twitter className='social-icon' />
      </a>

      <a href='mailto:luciousmc@icloud.com' target='_blank' rel='noreferrer'>
        <MailIcon className='social-icon' />
      </a>

      <div className='border-l border-r border-neon h-24 w-0 mx-auto bg-neon' />
    </aside>
  );
}

export default SocialBox;
