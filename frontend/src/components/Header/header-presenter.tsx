import type { HeaderPresenterProps } from "../../types/types";
import { FaSpotify } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { PiOpenAiLogoLight } from "react-icons/pi";
import DropdownContainer from "../Dropdown/dropdown-container";

export function HeaderPresenter(props: HeaderPresenterProps) {
  return (
    <header className="flex justify-between items-center p-2 h-full bg-black">
      {/* left*/}
      <div className="w-70 h-full pl-4 flex items-center">
        <button className="flex items-center justify-center rounded-full h-3/5 aspect-square cursor-pointer">
          <FaSpotify className="h-full aspect-square scale-210" />
        </button>
      </div>
      {/* middle*/}
      <div className="flex-1 flex items-center justify-center h-full w-full ">
        <div className="flex items-center justify-content gap-2 w-[75%] h-full px-2">
          <button className="flex items-center justify-center rounded-full h-4/5 aspect-square cursor-pointer bg-[#121212]">
            <GoHome className="text-white text-3xl" />
          </button>
          <div className="bg-[#121212] flex-1 h-4/5 rounded-full flex items-center justify-left">
            <button className="h-full w-10 ml-1 rounded-full flex items-center justify-center">
              <IoSearchOutline className="text-gray-400 text-xl group-hover:text-white" />
            </button>
            <input
              type="text"
              placeholder="What do you want to play?"
              className="bg-transparent border-none outline-none text-l text-white w-full placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-70 flex items-center h-full">
        <div className=" flex w-[50%] h-full items-center justify-center p-3">
          <button
            onClick={props.onChat}
            className="flex items-center justify-center h-full w-[75%] bg-[#121212] rounded-2xl cursor-pointer"
          >
            <PiOpenAiLogoLight size={24} />
          </button>
        </div>
        <div className=" w-[50%] h-full items-center justify-between px-2 flex">
          <button className="flex items-center justify-center rounded-full h-3/5 aspect-square cursor-pointer ">
            <IoNotificationsOutline size={24} />
          </button>
          <button className="flex items-center justify-center rounded-full h-3/5 aspect-square cursor-pointer ">
            <HiOutlineUserGroup size={24} />
          </button>
          <div className="relative h-4/5 aspect-square">
            <button
              onClick={props.onDropdown}
              className="flex items-center justify-center w-full h-full rounded-full cursor-pointer border-[6px] border-gray-800"
            >
              <img
                src="https://images.pexels.com/photos/28990268/pexels-photo-28990268.jpeg"
                className="h-full w-full object-cover rounded-full"
              />
            </button>

            {/* Render the Dropdown here */}
            {props.dropdown && <DropdownContainer />}
          </div>
        </div>
      </div>
    </header>
  );
}
