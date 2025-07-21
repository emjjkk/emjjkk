import {LuArrowUpRight} from 'react-icons/lu'

export default function LProjects() {
  return (
    <div className="mt-10">
      <h2 className="text-xl mb-4 text-foreground">Latest projects</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        <div className="w-[230px] flex-shrink-0">
            <div className="w-full h-[150px] bg-slate-500 mb-1"></div>
            <h3 className="text-md">emjjkk/Mditor</h3>
            <p className="text-xs mb-1">browser markdown editor built with NextJS + flask for server functionality</p>
            <a href="#" className="text-sm flex items-center border-b w-fit">Learn more <LuArrowUpRight/></a>
        </div>
        <div className="w-[230px] flex-shrink-0">
            <div className="w-full h-[150px] bg-slate-500 mb-1"></div>
            <h3 className="text-md">emjjkk/yt-downloader</h3>
            <p className="text-xs mb-1">browser youtube downloader application built with Flask</p>
            <a href="#" className="text-sm flex items-center border-b w-fit">Learn more <LuArrowUpRight/></a>
        </div>
        <div className="w-[230px] flex-shrink-0">
            <div className="w-full h-[150px] bg-slate-500 mb-1"></div>
            <h3 className="text-md">Crypto tracker</h3>
            <p className="text-xs mb-1">Crypto tracker webpage using Coingecko API</p>
            <a href="#" className="text-sm flex items-center border-b w-fit">Learn more <LuArrowUpRight/></a>
        </div>
      </div>
    </div>
  );
}
