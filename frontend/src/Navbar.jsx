const Navbar = ({isclicked}) => {
    return ( 
    <div className="flex justify-end bg-slate-400">


        <div className="flex  items-center w-[95vw] ">
            <div className="flex-1/2 py-2">
                <div className="flex items-center ">
                    <p className="text-2xl">My Todo </p>
                    <p className="text-red-800 text-xl ">s~</p>
                    <div className="bg-black size-4 animate-spin flex items-center"></div>

                </div>
            </div>

            <div className="md:flex flex-1/2 gap-6 justify-end hidden  ">
                <p>About</p>
                <p>Contacts</p>
                <p>My Dream</p>

            </div>

            <div className="lg:flex flex-1/3 justify-end p-2 hidden ">
            <p>Profile</p>

                
            </div>



            <div>
            <div className='flex justify-end lg:hidden px-2'>
            <span onClick={isclicked}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
            </span>
            </div>
                
                
            </div>










        </div>







    </div> );
}
 
export default Navbar;