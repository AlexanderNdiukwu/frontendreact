import React, { useState } from 'react'
import Todoheader from '../Todoheader'
import Todos from './Todos'

export default function Todobody() {
  let [recieveBool , setrecieveBool ] = useState()


  let data = (x)=>{

    setrecieveBool(x)
    
  }
  
  
 


  return (
    <div className='lg:mx-8 mx-4'>

      <div className='bg-slate-200 w-full'>

        <Todoheader handle = {data}/>
        <Todos u = {recieveBool}/>




        

      </div>



        
      
    </div>
  )
}
