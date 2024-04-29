
import { menu_list } from '../assets/assets'
export const ExploreMenu = ({category, setCategory}) => {
  return (
    <div id='menu' className='flex flex-col gap-5'>
        <h2 className='font-bold text-3xl text-center'>دسته بندی ها</h2>
        <div className='list-menu flex justify-between items-center gap-8 '>
            {menu_list.map((item , index)=>(
                <div onClick={()=>setCategory(item.menu_name)} className='flex flex-col justify-center items-center gap-4 text-center my-[20px] min-w-[80px] w-[7.5vw]' key={index}>
                    <img className={category === item.menu_name ? 'border-4 rounded-full p-[2px] border-[tomato]' : ''}   src={item.menu_image} alt="" />
                    <p className='text-[#747474] cursor-pointer text-lg'>{item.menu_name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
