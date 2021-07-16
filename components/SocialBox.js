import { Facebook, Linkedin, Instagram, Twitter } from '@icons-pack/react-simple-icons'

function SocialBox() {
  return (
    <aside className='hidden md:flex flex-col fixed left-20 bottom-0'>
      <Facebook className='social-icon' />
      <Linkedin className='social-icon' />
      <Twitter className='social-icon' />
    </aside>
  )
}

export default SocialBox
