import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendSucess = () => {
    toast("Message Sent!", {
      position: "bottom-right",
      autoclose: 3000,
      hideProgressBar: true,
      draggable: false,
      toastId: "notifyToast",
      pauseOnHover: false,
    });
  };

  const onSubmit = async ({ name, email, message }) => {
    const params = { name, email, message };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.error(error.message);
    }
    reset();
    sendSucess();
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
        className='flex flex-col space-y-7'
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
            rows='5'
          ></textarea>
          {errors.message && (
            <p className='text-red-500' role='alert'>
              {errors.message.message}
            </p>
          )}
        </div>

        <input type='submit' value='Send' className='cursor-pointer' />
      </form>
      <ToastContainer
        toastClassName='!bg-gray-700 shadow-md'
        bodyClassName='text-neon'
      />
    </div>
  );
}
export default ContactSection;
