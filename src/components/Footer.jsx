import { assets } from '../assets/assets'
export const Footer = () => {
  return (
    <div id='footer' className='bg-[#323232] text-[#d9d9d9] mt-20 px-12 md:px-26 py-12'>
    <div className='  flex flex-col md:flex-row  gap-12 justify-between '>
        <div className='flex flex-col gap-5'>
        <h1 className="text-[44px] text-[tomato] font-bold">گوجه </h1>
            <div className='flex items-center gap-3'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div>
            
            <ul className=' flex flex-col gap-2 text-white'>
                <li>درباره ما</li>
                <li>فرصت‌های شغلی</li>
                <li>قوانین سایت</li>
                <li>حریم خصوصی</li>
            </ul>
        </div>
        <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold text-white'>تماس با ما</h2>
            <p>09907499672</p>
            <p>sadeghinima090@gmail.com</p>
        </div>
    </div>
    <hr className='h-[2px] w-full my-8' />
    <p className='text-center'>کلیه حقوق محفوظ است 1403 </p>
    </div>
  )
}
