import { BsPlayCircle, BsThreeDots } from 'react-icons/bs'
import { AiFillPlayCircle, AiOutlineHeart } from 'react-icons/ai'



export function Card_lg({ cover, name, tag }) {

    
    return (
        <>

            <div className='img relative h-72'>
                <img src={cover} alt="cover" className='w-full h-full object-cover rounded-md' />
                <div className='overlay icon absolute top-1/2 left-[40%] text-white'>
                    <BsPlayCircle size={45} className='show' />
                    <AiFillPlayCircle size={50} className='hide absolute -top-1 -left-1' />
                </div>
            </div>
            <div className='overlay absolute bottom-0 right-0 text-secundary'>
                <div className='flex p-3'>
                    <AiOutlineHeart size={22} className='mx-3' />
                    <BsThreeDots size={22} className='mx-3' />
                </div>
            </div>
            <div className="text">
                <h3 className="text-xl font-semibold">{name}</h3>
                <span className="text-gray-400">{tag}</span>
            </div>


        </>
    )
}
