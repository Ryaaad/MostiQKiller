import Fck from './assets/Fucker.png'
import Sound from './assets/mosquito.ogg'
import Dead from './assets/dead.png'
import { useState } from 'react'
function App() {
  const [Alive, setAlive] = useState(5)
  const [dead, setdead] = useState(0)
  const [Animal, setAnimal] = useState([
    {
    id:0,
    State:1,
    src:Fck,
    cor:{right:85,Top:20},
  },
  {
    id:1,
    State:1,
    src:Fck,
    cor:{right:2,Top:5}
  },
  {
    id:2,
    State:1,
    src:Fck,
    cor: {right:33,Top:90},
  },
  {
    id:3,
    State:1,
    src:Fck,
    cor:   {right:9,Top:50},
  },
  {
    id:4,
    State:1,
    src:Fck,
    cor:  {right:90,Top:70},
  },
] )

  const clickHandler=(e:React.MouseEvent<HTMLImageElement, MouseEvent>,id:number)=>{
   Animal[id].src=Dead
   setAlive(prev=>prev=prev-1)
   setdead(prev=>prev=prev+1)
  
  }
  setInterval(() => {

    for(let i=0;i<5;i++){
      if(Animal[i].State!=0){
      Animal[i].cor.Top=Math.floor(Math.random() * (70 + 1) )
      Animal[i].cor.right=Math.floor(Math.random() * (70 + 1) )}
    }
  }, 1900);
  return (
  <div  className="h-[100vh] w-full flex gap-2 "
   onClick={(e)=>{
 const x= document.getElementById("backgroundMusic") as  HTMLVideoElement | null;
 if(x){ x.play();}
  }}>
    <audio id='backgroundMusic' >
    <source src={Sound} type="audio/ogg"></source>
    </audio>
  <div className="h-full w-[60%] relative " >

  <img  src={Animal[0].src} style={{'top':`${Animal[0].cor.Top}%`,'right':`${Animal[0].cor.right}%`}}
   onClick={(e)=>{     Animal[0].State=0;clickHandler(e,0) }}
      className={` absolute cursor-pointer `}/>
  <img src={Animal[1].src}  style={{'top':`${Animal[1].cor.Top}%`,'right':`${Animal[1].cor.right}%`}}
  onClick={(e)=>{   Animal[1].State=0;clickHandler(e,1)}}
      className={`absolute cursor-pointer `}/>
  <img src={Animal[2].src}  style={{'top':`${Animal[2].cor.Top}%`,'right':`${Animal[2].cor.right}%`}}
  onClick={(e)=>{  Animal[2].State=0;clickHandler(e,2)}}
        className={` absolute cursor-pointer `}/>
  <img src={Animal[3].src}  style={{'top':`${Animal[3].cor.Top}%`,'right':`${Animal[3].cor.right}%`}}
  onClick={(e)=>{  Animal[3].State=0;clickHandler(e,3)}}
      className={` absolute cursor-pointer `}/>
  <img  src={Animal[4].src}  style={{'top':`${Animal[4].cor.Top}%`,'right':`${Animal[4].cor.right}%`}}
  onClick={(e)=>{  Animal[4].State=0;clickHandler(e,4)}}
        className={` absolute cursor-pointer `}/>                

  </div>

  <div className="flex-auto p-5 bg-black w-[40%] ">
          <div className="flex flex-col justify-items-center justify-evenly h-full w-full">
            <div className="bg-zinc-200 rounded-3xl h-96">
              <div className="flex flex-col justify-items-center justify-between h-full text-center">
                <div>
                  <p className="pt-24 text-5xl font-semibold text-black">
                    SCORE: {dead}
                  </p>
                  <p className="pt-4 text-lg">alive: {Alive}</p>
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
              <a href="https://youtu.be/iik25wqIuFo" target="_blank">
                Report
              </a>
            </div>
          </div>
       
  </div>
 
  </div>
  )
}

export default App
