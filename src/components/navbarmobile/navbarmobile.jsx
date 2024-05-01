import { FaX , FaTwitter , FaFacebook } from "react-icons/fa6";
import LogoBookMark from "../../assets/logo-bookmark.svg"

const NavbarMobile = ({isOpen , setIsOpen}) => {

    return ( 
        <div className={isOpen ? "transition-all duration-[300ms] absolute left-0 ease-linear" : "transition-all duration-[300ms] ease-linear absolute left-full"}>
        <div className="w-full h-full bg-[#ffffff] fixed z-40 xl:hidden border-[1px] border-zinc-500 ">
            <div className="flex flex-row justify-between">
                <img src={LogoBookMark} alt="logoBookMark" className=" mt-5 ml-7 cursor-pointer" />
                <FaX className="mr-7 mt-6 text-lg cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
            </div>
                <div className="flex flex-col justify-between h-full ">
                    <div className="flex flex-col items-center justify-center ">
                        <hr className="text-zinc-900 w-3/4 mt-14 h-5"/>
                        <a href="#"> 
                            <button className="uppercase font-medium text-2xl my-2 font-mono cursor-pointer text-zinc-800 hover:text-red-600 tracking-wider ">features</button>
                        </a>
                        <hr className="text-zinc-800 w-3/4 mt-5 h-5"/>
                        <a href="#">
                            <button className="uppercase font-medium text-2xl my-2 font-mono cursor-pointer text-zinc-800 hover:text-red-600 tracking-wider ">pricing</button>
                        </a>
                        <hr className="text-zinc-800 w-3/4 mt-5 h-5"/>
                        <a href="#">
                            <button className="uppercase font-medium text-2xl my-2 font-mono cursor-pointer text-zinc-800 hover:text-red-600 tracking-wider ">contact</button>
                        </a>
                        <hr className="text-zinc-800 w-3/4 mt-5 h-5"/>
                        <a href="#" className="w-full flex flex-row justify-center">
                            <button className="uppercase font-medium text-2xl my-2 font-mono cursor-pointer text-zinc-800 tracking-wider w-2/3 rounded-lg h-14 border-2 border-red-600 hover:bg-red-600 hover:text-white ">login</button>
                        </a>
                    </div>
                    <div className="flex flex-row justify-center gap-7 mb-20">
                        <FaFacebook className="text-3xl text-zinc-700 cursor-pointer hover:text-red-600"/>
                        <FaTwitter className="text-3xl text-zinc-700 cursor-pointer hover:text-red-600"/>
                    </div>
                </div>
        </div>
        </div>
     );
}
 
export default NavbarMobile;