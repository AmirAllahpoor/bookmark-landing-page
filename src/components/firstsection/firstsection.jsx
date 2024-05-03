import IllustrationHero from "../../assets/illustration-hero.svg"

const FirstSection = () => {
    return ( 
        <>
            <div className="flex flex-row justify-between relative top-44 w-full sm:flex sm:flex-col-reverse sm:top-36">
                <div className="flex flex-col justify-center mb-20 w-1/3 ml-28 md:mt-16 md:ml-16 sm:w-full sm:ml-0  sm:text-center sm:mt-20 sm:px-8">
                    <h1 className="text-5xl font-sans font-bold text-zinc-700 md:text-3xl sm:text-3xl ">A Simple Bookmark Manager</h1>
                    <h5 className="text-base text-zinc-400 mt-7 w-4/5  md:w-full sm:w-full  ">A clearn and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</h5>
                    <div className="flex flex-row  w-3/4 md:w-full mt-7 gap-4 sm:w-full sm:justify-center ">
                    <button className="w-44 rounded-lg bg-indigo-500 shadow-md text-white font-sans text-sm h-12 font-semibold hover:bg-white hover:border-2 hover:border-indigo-500 hover:text-indigo-500">Get in on Chrome</button>
                    <button className="w-44 rounded-lg md:ml-1 bg-zinc-200 shadow-md text-zinc-700 font-sans text-sm h-12 font-semibold hover:bg-white hover:border-2 hover:border-zinc-500 hover:text-zinc-500">Get in on Firefox</button>
                    </div>
                </div>
                <div className="w-1/6">
                    <img src={IllustrationHero} alt="ImgFirstSection" className="absolute w-[40rem] ml-40 md:w-[28rem] right-4 sm:w-full sm:top-0 z-20" />
                </div>
                    <div className="bg-[#5368df] w-[33rem] h-80 rounded-l-full mt-32 md:w-[20rem] md:h-52 sm:w-3/4 sm:mt-[70px] sm:rotate-180 sm:h-56"></div>
            </div>
        </>
     );
}
 
export default FirstSection;