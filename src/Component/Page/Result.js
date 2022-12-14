import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Result.css"

const Result = ({Score}) => {
  const navigate=useNavigate()

  const Home=()=>{
    navigate("/")
  }
  return (
    <div className='result'>
      <h1 className='score'>Score:{Score}</h1>
      <button  className='btn'onClick={Home}>Go To Home Page</button>
    </div>
  )
}

export default Result
