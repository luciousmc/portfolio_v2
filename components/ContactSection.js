import { useForm } from "react-hook-form";

function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='space-y-8 w-10/12 md:w-3/5 mx-auto bg-gray-700 p-5 md:p-16 rounded-md'>
      <h3 className='text-3xl text-center'>Let&apos;s Talk</h3>
      <p className='text-center text-gray-400'>
        I&apos;d like to work with you to make your idea come to life. Drop me a
        line!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-5'
      >
        <div className='flex flex-col'>
          <label htmlFor='name'>Name:</label>
          <input
            {...register("name", {
              required: "Name field is required",
              maxLength: 15,
            })}
            type='text'
          />
          {errors.name && (
            <p className='text-red-500' role='alert'>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          <label htmlFor='email'>Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              maxLength: 20,
            })}
            type='email'
          />
          {errors.email && (
            <p className='text-red-500' role='alert'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          <label htmlFor='message'>Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            cols='30'
            rows='10'
          ></textarea>
          {errors.message && (
            <p className='text-red-500' role='alert'>
              {errors.message.message}
            </p>
          )}
        </div>

        <input type='submit' value='Send' className='cursor-pointer' />
      </form>
    </div>
  );
}
export default ContactSection;
