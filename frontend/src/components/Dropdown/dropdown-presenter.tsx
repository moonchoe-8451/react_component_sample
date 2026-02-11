import type { DropdownPresenterProps } from "../../types/types";

export default function DropdownPresenter(props: DropdownPresenterProps) {
  return (
    /* Solid light gray background */
    <div className="absolute right-0 top-full mt-2 w-56 bg-gray-200 text-black shadow-xl rounded-lg py-2 z-50 border border-gray-400">
      <ul className="flex flex-col text-sm font-medium">
        <li
          onClick={() => props.onLogin(true)}
          className="px-4 py-3 hover:bg-gray-300 cursor-pointer border-b border-gray-300"
        >
          Login: Premium User
        </li>
        <li
          onClick={() => props.onLogin(false)}
          className="px-4 py-3 hover:bg-gray-300 cursor-pointer"
        >
          Login: Non-Premium User
        </li>
        <li
          onClick={props.onLogout}
          className="px-4 py-3 hover:bg-gray-300 cursor-pointer text-red-600 font-bold"
        >
          Log Out
        </li>
      </ul>
    </div>
  );
}
