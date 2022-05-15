import React, { useState } from 'react'

const Profile1 = () => {
var [name,setName]=useState("vani")
const changeName = () => {
    setName(
name ='ammu'
)
}

  return (
    <div>Logged in as {name}
    <button onClick={changeName} className='btn btn-success'>LOGIN</button></div>
  )
}

export default Profile1