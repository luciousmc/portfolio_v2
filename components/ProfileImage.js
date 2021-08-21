import Image from 'next/image';

function ProfileImage() {
  return (
    <div className='relative w-52 h-52 mb-10 hover:scale-105 hover:-translate-x-2 hover:-translate-y-2 transition duration-200 rounded-lg'>
      <Image
        src='/images/profile.jpg'
        layout='fill'
        className='filter backdrop-brightness-75 rounded-lg'
      />
      <div className='absolute w-full h-full rounded-lg bg-neon mix-blend-multiply hover:bg-transparent transition duration-150' />
    </div>
  )
}

export default ProfileImage;
