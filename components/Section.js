function Section({ title, children }) {
  return (
    <section className='w-full h-screen'>
      <div className='flex items-center space-x-4'>
        <h2 className='flex-grow whitespace-nowrap text-2xl'>{title}</h2>
        <div className='h-1 bg-green-100 w-full' />
      </div>

      {children}
    </section>
  )
}

export default Section
