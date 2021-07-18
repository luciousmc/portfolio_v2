function Section({ id, title, children }) {
  return (
    <section id={id} className='w-full min-h-screen pt-24'>
      <div className='flex items-center space-x-4'>
        <h2 className='flex-grow text-3xl'>{title}</h2>
        <div className='h-1 bg-neon w-full' />
      </div>

      {children}
    </section>
  )
}

export default Section
