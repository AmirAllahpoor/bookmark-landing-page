import {FaBars  } from "react-icons/fa6";
import LogoBookMark from "../../assets/logo-bookmark.svg"
import NavbarMobile from "../navbarmobile/navbarmobile";
import { useState } from "react";

const NavbarBookMark = () => {

    const [isOpenNavbar , SetIsOpenNavbar] = useState(false)

    return ( 
        <>
        <div className=" bg-white w-full h-20 flex flex-row justify-between fixed z-40">
            <div className="leftbar h-full flex flex-row justify-center ">
                <img src={LogoBookMark} alt="LogoBookmark" className="w-full h-7 mt-6 ml-24 lg:ml-10 sm:ml-10 cursor-pointer" />
            </div>
            <div className=" h-full flex flex-row justify-center ">
                <a href="#">
                    <button className="uppercase mt-7 mr-12 font-medium text-base font-mono cursor-pointer text-zinc-800 hover:text-red-600 tracking-wider lg:hidden sm:hidden">features</button>
                </a>
                <a href="#">
                    <button className="uppercase mt-7 mr-12 font-medium text-base font-mono cursor-pointer text-zinc-800 hover:text-red-600 tracking-wider lg:hidden sm:hidden">pricing</button>
                </a>
                <a href="#">
                    <button className="uppercase mt-7 mr-12 font-medium text-base font-mono cursor-pointer text-zinc-800 hover:text-red-600 tracking-wider lg:hidden sm:hidden">contact</button>
                </a>
                <a href="#">
                    <button className="uppercase mt-5 mr-24 font-medium text-base font-mono bg-red-600 text-white w-28 h-1/2 tracking-wider lg:hidden sm:hidden rounded-md shadow-sm shadow-zinc-400 hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600">login</button>
                </a>
                <FaBars onClick={() => SetIsOpenNavbar(!isOpenNavbar)} className="xl:hidden mt-7 mr-10 text-2xl text-zinc-800 cursor-pointer"/>
            </div>
        </div>

        <NavbarMobile isOpen={isOpenNavbar} setIsOpen={SetIsOpenNavbar}/>

        </>
     );
}
 
export default NavbarBookMark;