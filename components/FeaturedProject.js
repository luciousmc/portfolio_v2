import Link from 'next/dist/client/link';
function FeaturedProject() {
  return (
    <div className='relative max-w-600px shadow-md'>
      <div className='absolute opacity-[4%] top-0 left-0 right-0 bottom-0 z-[-1]'>
        <img
          className='w-full h-full object-cover object-left-top'
          src='/images/projects/amazon_preview.png'
          alt='Amazon Photo'
        />
      </div>

      <div className='px-10 py-20 z-50'>
        <h2 className='text-accent'>Featured Project</h2>
        <h3 className='text-3xl tracking-wider hover:text-neon'>
          <Link href='http://www.Amazon.com'>Amazon Clone</Link>
        </h3>
        <p className='mt-7 mb-4 text-xl font-light'>
          A copy of the popular Amazon website. It features the ability to add
          items to the cart and purchase them.
        </p>
        <ul className='flex gap-5'>
          <li>React</li>
          <li>TailwindCSS</li>
          <li>NextJs</li>
          <li>Stripe CLI</li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturedProject;
