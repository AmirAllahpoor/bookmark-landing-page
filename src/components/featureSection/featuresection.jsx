import ImgFeatureTab1 from "../../assets/illustration-features-tab-1.svg"

const FeatureSection = () => {
    return ( 
        <div className="relative top-64 ">
            <div className="text-center">
                <h1 className="text-4xl font-sans font-bold text-zinc-700">Features</h1>
                <div className="w-full flex flex-row justify-center">
                <h5 className="text-base text-zinc-400 font-sans mt-5 w-1/3 text-center">Our Aim is to make it quik and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</h5>
                </div>
                <div className="mt-12">
                    <button className="bg-white text-base pb-12 font-semibold text-zinc-500 focus:text-zinc-700 hover:text-red-600 w-1/6 h-10 border-b-2 focus:border-b-4 border-zinc-200 focus:border-red-600 ">Simple Bookmarking</button>
                    <button className="bg-white text-base pb-12 font-semibold text-zinc-500 focus:text-zinc-700 hover:text-red-600 w-1/6 h-10 border-b-2 focus:border-b-4 border-zinc-200 focus:border-red-600 " >Speedy Searching</button>
                    <button className="bg-white text-base pb-12 font-semibold text-zinc-500 focus:text-zinc-700 hover:text-red-600 w-1/6 h-10 border-b-2 focus:border-b-4 border-zinc-200 focus:border-red-600 ">Easy Sharing</button>
                </div>
                </div>
                <div className="mt-10 flex flex-row justify-between">
                <div className="w-1/6">
                    <img src={ImgFeatureTab1} alt="ImgFirstSection" className="absolute w-[33rem] ml-28 mt-10 left-4 z-10" />
                </div>
                    <div className="flex flex-col w-1/3 mt-32">
                        <h1 className="text-3xl font-sans font-bold text-zinc-700">Bookmark is one click</h1>
                        <h5 className="text-base text-zinc-400 font-sans mt-5 w-4/5">Organize your bookmarks however you like. Our simple drag-and-drop interface gives your complete control over how you manage your favorite sites.</h5>
                        <button className="bg-indigo-600 text-white text-sm font-sans font-semibold w-1/4 h-10 mt-5 rounded-md hover:border-2 hover:bg-white hover:border-indigo-600 hover:text-indigo-600">More Info</button>
                    </div>
                </div>
            <div className="bg-[#5368df] relative bottom-32 w-[33rem] h-72 rounded-r-full "></div>
        </div>
     );
}
 
export default FeatureSection;