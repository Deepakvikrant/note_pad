import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/note/noteContext'

const About = () => {
  const a = useContext(noteContext)
  
  useEffect(() => {
    a.updateFun()
  },[])
  
  
  return (
    <div>
        this is About {a.state.name} and he is in {a.state.class}
    </div>
  )
}

export default About
