import { useState } from "react"
import MeunbarHeader from "./MeunbarHeader"
import Navbar from "./navbar"
import SearchBar from "./searchBar/SearchBar"
import Todobody from "./TodoBody/Todobody"


function App() {
  let [istrue , SetTrue] = useState(false)

  let meunbar=()=>{
    console.log('it is working ')
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

     
      





  
    </div>
 
     

  )
}

export default App
