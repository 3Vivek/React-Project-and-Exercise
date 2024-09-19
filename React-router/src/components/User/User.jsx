import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userId}=useParams()
  return (
    <div>
      <h1 className='bg-gray-600 text-white text-3xl p-4'>User: {userId} </h1>
    </div>
  )
}

export default User
