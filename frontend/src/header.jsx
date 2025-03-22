const Header = () => {
    return ( 
    <div className="flex justify-end bg-slate-400">


        <div className="flex  items-center w-[95vw] ">
            <div className="flex-1/2">
                <p className="flex items-center ">
                    <p className="text-2xl">My Todo </p>
                    <p className="text-red-800 text-xl ">s~</p>
                </p>
            </div>

            <div className="flex flex-1/2 gap-6 justify-end ">
                <p>About</p>
                <p>Contacts</p>
                <p>My Dream</p>

            </div>

            <div className="flex flex-1/3 justify-end p-2">
            <p>Profile</p>

                
            </div>










        </div>







    </div> );
}
 
export default Header;