import { assets } from '../assets/assets'
export const AppDownload = () => {
  return (
    <div id='mobile-app' className=' mt-24 mx-auto flex flex-col justify-center items-center gap-6 '>
        <h2 className=' text-3xl md:text-4xl font-bold leading-[54px] text-center'>تجربه کاربری بهتر با اپلیکشن موبایلی</h2>
        <div className='flex gap-6 md:gap-8 items-center'>
            <img className=' w-[155px] md:w-[175px] transition-[0.5s] hover:scale-[1.1]' src={assets.play_store} alt="" />
            <img className=' w-[155px] md:w-[175px] transition-[0.5s] hover:scale-[1.1]' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}
