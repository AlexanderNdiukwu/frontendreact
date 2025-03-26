import { useState } from "react"
import MeunbarHeader from "./MeunbarHeader"
import Navbar from "./navbar"
import SearchBar from "./searchBar/SearchBar"
import Todobody from "./TodoBody/Todobody"
import Todofooter from "./TodoBody/Todofooter"


function App() {
  let [istrue , SetTrue] = useState(false)

  let meunbar=()=>{
    SetTrue(!istrue)
  }


  return (
 
    <div className=''>
      <div>
        <Navbar isclicked={meunbar}/>

      <div className="grid md:hidden transition-opacity">
        {istrue && <MeunbarHeader/>}

      </div>
     
        <SearchBar/>
        
      </div>

      <div>

        <Todobody/>
        

      </div>
{/* 
      <div className="absolute bottom-0 bg-slate-900 w-full text-white">
        <Todofooter/>
      </div>

     
       */}





  
    </div>
 
     

  )
}

export default App
