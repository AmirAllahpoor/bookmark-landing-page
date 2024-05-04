import ImgFeatureTab1 from "../../assets/illustration-features-tab-1.svg";
import ImgFeatureTab2 from "../../assets/illustration-features-tab-2.svg";
import ImgFeatureTab3 from "../../assets/illustration-features-tab-3.svg";
import { useState } from "react";

const FeatureSection = () => {
  const tabs = [
    {
      img: ImgFeatureTab1,
      caption: "Bookmark is one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives your complete control over how you manage your favorite sites.",
        buttontitle : "Simple Bookmarking" ,
    },
    {
      img: ImgFeatureTab2,
      caption: "Intelligent search",
      description:
        "Our powerful search features will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        buttontitle : "Speedy Searching" ,
    },
    {
      img: ImgFeatureTab3,
      caption: "Share your bookmarks",
      description:
        "Easily share you bookmarks and collections with others. Create a shareable link that you can send at the click of the button.",
        buttontitle : "Easy Sharing" ,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabFeature = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative top-64">
      <div className="text-center">
        <h1 className="text-4xl font-sans font-bold text-zinc-700">Features</h1>
        <div className="w-full flex flex-row justify-center">
          <h5 className="text-base text-zinc-400 font-sans mt-5 w-1/3 text-center sm:w-full sm:px-4">
            Our Aim is to make it quik and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.
          </h5>
        </div>
        <div className="mt-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabFeature(tab)}
              value={tab.buttontitle}
              className="focus:border-b-4 focus:text-zinc-700 focus:border-red-600 bg-white text-base pb-12 sm:w-3/4 sm:pt-5 font-semibold text-zinc-500 hover:text-red-600 w-1/5 h-10 border-b-2  border-zinc-200"
            >
              {tab.buttontitle}
            </button>
          ))}
        </div>
      </div>
      {activeTab && (
        <div className="mt-10 flex flex-row justify-between">
          <div className="w-1/6">
            <img src={activeTab.img} alt="ImgFirstSection" className="absolute w-[30rem] ml-28 mt-10 left-4 z-10 md:w-[18rem] md:ml-10 md:mt-28 sm:w-5/6 sm:ml-0" />
          </div>
          <div className="flex flex-col w-1/3 mt-32 mr-5 sm:w-full sm:relative sm:top-64">
            <h1 className="text-3xl font-sans font-bold text-zinc-700 md:text-2xl">
              {activeTab.caption}
            </h1>
            <h5 className="text-base text-zinc-400 font-sans mt-5 w-4/5 sm:w-5/6 md:w-full">
              {activeTab.description}
            </h5>
            <button className="sm:w-5/6 bg-indigo-600 text-white text-sm font-sans font-semibold w-1/3 h-10 mt-5 rounded-md hover:border-2 hover:bg-white hover:border-indigo-600 hover:text-indigo-600">
              More Info
            </button>
          </div>
        </div>
      )}
      <div className="bg-[#5368df] relative bottom-32 w-[33rem] h-72 rounded-r-full md:w-[20rem] md:bottom-36 md:h-52 sm:w-3/4 sm:bottom-[15rem] sm:h-56"></div>
    </div>
  );
};

export default FeatureSection;