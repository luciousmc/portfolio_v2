function Logo() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0 })}
      className='logo font-bold tracking-wider text-2xl cursor-pointer'
    >
      <p>
        M<span className='text-accent'>C</span>
      </p>
    </div>
  );
}

export default Logo;
