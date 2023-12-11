
const Contact = () => {
  return (
    <div>
      <div className='grid md:grid-cols-3'>
        <div></div>
        <div className='p-8 md:p-12 bg-gradient-to-r from-[#202020] to-[#151515] col-span-2 rounded-3xl'>
          <h2 className="text-4xl font-bold text-white">Let&quot;s work together.</h2>
          <form >

          <input type="text" name="" placeholder="Name" required id="" className=' rounded-xl border-none h-14 mt-8 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full' />
          <input type="email" name="" placeholder="Email" required id="" className=' rounded-xl border-none h-14 mt-4 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full' />
          <input type="text" placeholder="Your Subject" required name="" id="" className=' rounded-xl border-none h-14 mt-4 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full' />
            <textarea name="" id="" placeholder="Your Message" required className=' rounded-xl border-none h-40 pt-5 mt-4 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full'></textarea>
            
          <button type="submit" className="bg-[#343333] text-white hover:bg-[#626161] hover:text-black h-14 rounded-xl mt-4 w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
