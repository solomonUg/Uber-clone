import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";



export default function (){
    return (
        <nav className="w-full bg-black flex justify-center items-center">
            <div className="flex w-[90%] justify-between items-center h-16 px-2" >
                <div className=" text-white flex gap-8 justify-center items-center">
                    <h1 className="text-2xl">Uber</h1>
                        <ul className="hidden lg:flex">
                            <li className=" py-2 px-3 cursor-pointer rounded-full hover:bg-slate-900 ">Ride</li>
                            <li className=" py-2 px-3 cursor-pointer rounded-full hover:bg-slate-900 ">Drive</li>
                            <li className=" py-2 px-3 cursor-pointer rounded-full hover:bg-slate-900 ">Business</li>
                            <li className=" py-2 px-3 rounded-full cursor-pointer hover:bg-slate-900 ">Uber Eats</li>
                            <li className="flex items-center py-2 px-3 cursor-pointer rounded-full justify-center gap-1 hover:bg-gray-900">About <IoIosArrowDown /></li>

                        </ul>
                </div>
                <div className="flex text-white gap-2">
                    <div className="hidden lg:flex justify-center items-center gap-2 py-2 px-4 rounded-full hover:bg-slate-900 ">
                <TbWorld /> <div>EN</div> 
                    </div>
                    <div className="hidden lg:flex">
                    <button className=" py-2 px-4 rounded-full hover:bg-slate-900 ">Help</button>
                    </div>
                    <button className=" py-2 px-4 rounded-full hover:bg-slate-900 ">Log in</button>
                    <button className="bg-white text-black text-center py-2 px-4 text-sm font-medium rounded-full hover:bg-gray-300">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}