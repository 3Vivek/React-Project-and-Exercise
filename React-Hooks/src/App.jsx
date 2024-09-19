import { useState } from 'react'
import './App.css'
import CardOne from './Components/Card';

function App() {
  const [num,setNum]=useState(0);

  const Increment=()=>{
    setNum(num+1);
 

  }
  const Decrement=()=>{
    setNum(num-1);
  }


  return (
    <>
      <h1 className='text-2xl text-red-400'>Counter Value : {num} </h1>
      <button onClick={Increment}>Increment</button> 
      <button onClick={Decrement}>Decrement</button>
      <div className='mt-4 flex flex-row gap-4'>

        <CardOne name="Gwen"/>
        <CardOne name="Jenny"/>
        
      </div>
    </>
  )
}

export default App
