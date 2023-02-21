import Fck from './assets/Fucker.png'
import Sound from './assets/mosquito.ogg'
import Dead from './assets/dead.png'
import { useEffect, useState } from 'react'
import Menuu from './Componants/Menu'
import { useDispatch, useSelector } from 'react-redux'
import {SetMos,Fly,KillMos} from '../features/settings/settingSlice'
function App() {
  const [dead, setdead] = useState(0)
  const Menu=useSelector((state:any)=>state.settings.Menu)
  const TimeFrame=useSelector((state:any)=>state.settings.timeframe)
  const Mos=useSelector((state:any)=>state.settings.Mos)
  const MosNumber=useSelector((state:any)=>state.settings.MosNumber)
  const dispatch=useDispatch()


  useEffect(() => {
    if(!Menu){ 
        dispatch(SetMos())
    setInterval(() => {
      dispatch(Fly())
    }, TimeFrame);}
  }, [Menu])
  
 
  return (
    <>
  { Menu && 
 <Menuu></Menuu>
}
{ !Menu && <div  className="h-[100vh] relative w-full flex gap-2 " 
  onClick={(e)=>{
 const x= document.getElementById("backgroundMusic") as  HTMLVideoElement | null;
 if(x){ x.play();}
  }}>
 
    <audio id='backgroundMusic' >
    <source src={Sound} type="audio/ogg"></source>
    </audio>
 {   Mos &&
  <div className="h-full w-[60%] relative " >
  {Mos.map((M:any)=>{
              return M.State!=0 ? <img  src={Fck} key={M.id} style={{'top':`${M.cor.Top}%`,'right':`${M.cor.right}%`}} className={` absolute cursor-pointer `} onClick={()=>dispatch(KillMos(M.id))}></img> : 
              <img  src={Dead} key={M.id} style={{'top':`${M.cor.Top}%`,'right':`${M.cor.right}%`}} className={` absolute cursor-pointer `}  ></img>
            })}

  </div>}

  <div className="flex-auto p-5 bg-black w-[40%] ">
          <div className="flex flex-col justify-items-center justify-evenly h-full w-full">
            <div className="bg-zinc-200 rounded-3xl h-96">
              <div className="flex flex-col justify-items-center justify-between h-full text-center">
                <div>
                  <p className="pt-24 text-5xl font-semibold text-black">
                    SCORE: {dead}
                  </p>
                  <p className="pt-4 text-lg">alive: {MosNumber}</p>
                </div>
                <div className="flex flex-col">
                  <p className="p-2 m-4 bg-zinc-800 text-center rounded-xl">
                    <span className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-lime-400 to-cyan-500">
                      created by <b>Ryad</b>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly font-semibold text-white w-full">
              <a href="https://github.com/Ryaaad" target="_blank">
                Github
              </a>
              <a href="https://youtu.be/mKRZIHwTr-I" target="_blank">
                Learn more
              </a>
            </div>
            <div  className='flex gap-2 ' >
            </div>
       
          </div>
       
  </div>
 
  </div>}
    </>
  
  )
}

export default App
