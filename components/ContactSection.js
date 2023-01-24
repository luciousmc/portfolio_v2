function ContactSection() {
  return (
    <div className='space-y-8 w-10/12 md:w-3/5 mx-auto bg-gray-700 p-5 md:p-16 rounded-md'>
      <h3 className='text-3xl text-center'>Let&apos;s Talk</h3>
      <p className='text-center text-gray-400'>I&apos;d like to work with you to make your idea come to life. Drop me a line!</p>
      <form className='flex flex-col space-y-5'>
        <div className='flex flex-col'>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name' />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' name='email' />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>

        <input type="submit" value="Send" className='cursor-pointer' />
      </form>
    </div>
  )
}
export default ContactSection