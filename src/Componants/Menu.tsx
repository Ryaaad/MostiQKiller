import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import MosBg from '../assets/MosBG.jpg'
import {SetMenu} from '../../features/settings/settingSlice'

const Menuu = () => {

  const dispatch=useDispatch()
      
    return (  
          <div style={{backgroundImage:`url(${MosBg})`}} className='h-[100vh] absolute w-full ' >
              <motion.div className='rounded-md w-[700px] bg-[#59505056] grid items-center  fixed right-[25%] h-[450px]  ' 
              initial={{y:-10,  opacity: 0.5,}} animate={{ y: 90,  opacity: 1 }}  
              transition={{  type: "spring", bounce: .5,duration:1.5 }} >
              <ul className="grid text-center justify-center gap-5 items-center text-2xl font-bold p-10 py-7 w-full ">
                <li className='p-7 py-4 bg-white cursor-pointer ' onClick={()=>  dispatch(SetMenu(false))}  >MAIN</li>
                <li className='p-7 py-4 bg-white cursor-pointer'  >DIFFICULTIES</li>
                <li className='p-7 py-4 bg-white cursor-pointer' onClick={()=>{}}  >OPTIONS</li>
              </ul>
               </motion.div>
            </div>
    
    );
}
 
export default Menuu;