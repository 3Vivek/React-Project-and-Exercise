import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
  const {user}=useContext(UserContext)
  if(!user) return <div className='text-2xl p-2 font-bold  '>Please Login</div>
  return <div className='text-2xl'>Welcome {user.username}</div>
}

export default Profile
