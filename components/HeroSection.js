function HeroSection() {
  return (
    <section className='h-screen flex items-center pl-10'>
      <div className='space-y-5'>
        <p className='text-neon md:text-2xl'>
          <span>Hello World</span>, I am
        </p>
        <h1 className='text-7xl md:text-8xl text-slate-lightest'>
          Marlon <span className='text-accent'>Clay</span>
        </h1>
        <p className='text-2xl md:text-4xl text-slate'>Software Engineer</p>
      </div>
    </section>
  );
}

export default HeroSection;
