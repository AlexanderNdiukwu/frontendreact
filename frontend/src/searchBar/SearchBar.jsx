
function SearchBar() {
  return (
    <div className="flex justify-center">

      <div className="flex my-5 rounded-2xl gap-1">
        <div className="border rounded-sm ">
          <input type="text" className="w-60 px-3 rounded-sm " />
        </div>
        <div className="border rounded-r-lg p-0.5 hover:bg-slate-100 hover:text-slate-500">
          <p>search</p>
        </div>

      </div>

    
      
    </div>
  )
}

export default SearchBar
