import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password,setPassword]=useState('')
    
    const{setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div class="bg-gray-100 flex items-center justify-center " >
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <div class="mb-4">
            <input type="text"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                value={username}
                placeholder='Username'
                onChange={(e) => {
                    setUsername(e.target.value)
                }} />
        </div>
        <div class="mb-6">
            <input type="password"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                placeholder='Password'
                onChange={(e) => {
                    setPassword(e.target.value)
                }} />
        </div>
        <button onClick={handleSubmit}
            class="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300">
            Submit
        </button>
    </div>
    </div>
  )
}

export default Login