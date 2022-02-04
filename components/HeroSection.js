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
        <p className='text-3xl md:text-5xl text-slate'>
          I build things on the Web...
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
