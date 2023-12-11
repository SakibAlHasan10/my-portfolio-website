
const Contact = () => {
  return (
    <div>
      <div className='grid md:grid-cols-3'>
        <div></div>
        <div className='p-8 md:p-12 bg-gradient-to-r from-[#202020] to-[#151515] col-span-2 rounded-3xl'>
          <h2 className="text-4xl font-bold text-white">Let&quot;s work together.</h2>
          <form >

          <input type="text" name="" id="" className=' rounded-xl border-none h-14 mt-8 bg-black text-white px-5 w-full' />
          <input type="text" name="" id="" className=' rounded-xl border-none h-14 mt-4 bg-black text-white px-5 w-full' />
          <input type="text" name="" id="" className=' rounded-xl border-none h-14 mt-4 bg-black text-white px-5 w-full' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
