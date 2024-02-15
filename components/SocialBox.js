import { Facebook, Linkedin, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";

function SocialBox() {
  return (
    <aside className='hidden md:block fixed bottom-0'>
      <ul className='flex flex-col items-center gap-2'>
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

      <div className='border-l border-r border-neon h-24 w-0 mx-auto bg-neon' />
    </aside>
  );
}

export default SocialBox;
