import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const  All:any=[];
const initialState = {
  Menu:true,
  timeframe: 1400,
  MosNumber:4,
  dead:0,
  Mos:[{  id:0,
    State:1,
    cor:{right:Math.floor(Math.random() * (71) ),Top:Math.floor(Math.random() * (75) )}},
    {  id:1,
        State:1,
        cor:{right:Math.floor(Math.random() * (71) ),Top:Math.floor(Math.random() * (75) )}},
        {  id:2,
            State:1,
            cor:{right:Math.floor(Math.random() * (71) ),Top:Math.floor(Math.random() * (75) )}},
            {  id:3,
                State:1,
                cor:{right:Math.floor(Math.random() * (71) ),Top:Math.floor(Math.random() * (75) )}}             

],
  win:false
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers:{
    SetDifficulty:(state, action: PayloadAction<number>)=>{
    state.timeframe-=action.payload*200;
    state.MosNumber=4+2*action.payload
      },
    SetMenu:(state, action: PayloadAction<boolean>)=>{
        state.Menu=action.payload
          },
     SetMos:(state)=>{
//    let length=0
//   while(length<state.MosNumber) {
//     state.Mos.push({  id:length,
//         State:1,
//         cor:{right:Math.floor(Math.random() * (71) ),Top:Math.floor(Math.random() * (75) )}})
//     length++;
//    }
     } ,
     Fly:(state)=>{
      state.Mos.forEach(M => { 
        if(M.State!=0)
       { M.cor.right=Math.floor(Math.random() * (71) )
        M.cor.Top=Math.floor(Math.random() * (75) )   }
      });
     } ,
     KillMos:(state,action: PayloadAction<number>)=>{
   state.Mos[action.payload].State=0
   state.MosNumber--
     }  
  }
});

export const {SetDifficulty,SetMenu,SetMos,Fly,KillMos}=  settingsSlice.actions
export default settingsSlice.reducer;