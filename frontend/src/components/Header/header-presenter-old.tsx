import type { HeaderPresenterProps } from "../../types/types";
import { FaSpotify } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { PiBrowsers } from "react-icons/pi";

export function HeaderPresenter(props: HeaderPresenterProps) {
  return (
    <header className="flex justify-between items-center p-2 h-full bg-black">
      {/* left*/}
      <button className="flex w-70 items-center justify-center h-full aspect-square">
        <FaSpotify className="h-3/5 w-3/5 text-white" />
      </button>

      {/* middle*/}
      <div className="flex items-center gap-2 h-full w-full max-w-150">
        {/* home */}
        <div className="h-full aspect-square bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <GoHome className="text-white text-2xl" />
        </div>

        {/* searchbar */}
        <div className="flex-1 h-full bg-[#1f1f1f] rounded-full flex items-center px-4 gap-3 hover:bg-[#2a2a2a] border border-transparent hover:border-white/10 transition group">
          <IoSearchOutline className="text-gray-400 text-xl group-hover:text-white" />

          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-gray-500"
          />

          {/* file?*/}
          <div className="pl-2 border-l border-gray-600">
            <PiBrowsers className="text-gray-400 text-xl hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-70 flex items-center gap-6 h-full">
        <button> temp </button>
        {/* notification */}
        <button className="cursor-pointer text-gray-400 hover:text-white transition">
          <IoNotificationsOutline size={24} />
        </button>

        {/* friends */}
        <button className="cursor-pointer text-gray-400 hover:text-white transition">
          <HiOutlineUserGroup size={24} />
        </button>

        {/* profile */}
        <button
          onClick={props.onLogout} // Or onToggleMenu if you have that
          className="cursor-pointer h-full py-1 aspect-square group"
        >
          <div className="h-full aspect-square rounded-full bg-black flex items-center justify-center border-[6px] border-[#1f1f1f] transition-transform overflow-hidden">
            {props.user?.profilePicture ? (
              <img
                src={props.user.profilePicture}
                alt="User"
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src="https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-white-background-profile-107327860.jpg"
                alt="User"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </button>
      </div>
    </header>
  );
}
