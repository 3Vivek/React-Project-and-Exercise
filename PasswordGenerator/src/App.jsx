import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(8)
  const [length,setLength]=useState()
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const passwordRef=useRef(null)

  const [password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length  +1);
      pass+=str.charAt(char)
    }
    setPassword(pass);
    

  },[length,numberAllowed,charAllowed,setPassword])

  const CopyClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md'>
      <h1 className='text-2xl text-white'>Password Generator</h1>
      <div className='rounded-lg bg-slate-100 flex flex-row' >
        <input type='text' 
        className='h-16 p-2 w-full '
              placeholder='Enter Password'
                value={password}
                readOnly
                ref={passwordRef}
        />
        <button
        onClick={CopyClipboard}
        className='h-16 w-20 text-white bg-slate-400'>Copy</button>
      </div>
  
      <div className='flex flex-col gap-2 justify-center items-center'>
        <input type="range" 
        min={6} 
        max={100} 
        value={length}
        onChange={(e)=>{setLength(e.target.value)}} />
        <label className='text-xl text-white '>Length: {length}</label>

        <input type="checkbox"
        defaultChecked={numberAllowed} 
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}/>
        <label className='text-xl text-white '>Numbers</label>

          <input type="checkbox"
        defaultChecked={charAllowed} 
        id="numberInput2"
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}/>
        <label className='text-xl text-white '>Characters</label>


      </div>


    </div>
  
  )
}


export default App
