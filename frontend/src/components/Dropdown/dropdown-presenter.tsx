import type { DropdownPresenterProps } from "../../types/types";

export default function DropdownPresenter(props: DropdownPresenterProps) {
  return (
    /* Solid light gray background */
    <div className="absolute -right-2 top-full mt-2 w-56 bg-black text-white shadow-xl rounded-lg py-2 z-50">
      <ul className="flex flex-col text-sm font-medium">
        <li
          onClick={() => props.onLogin(true)}
          className="px-4 py-3 hover:bg-gray-300 cursor-pointer"
        >
          {props.user?.isPremium
            ? `Logged In: ${props.user.name} (Premium)`
            : "Login (Premium)"}
        </li>
        <li
          onClick={() => props.onLogin(false)}
          className="px-4 py-3 hover:bg-gray-300 cursor-pointer"
        >
          {props.user && !props.user.isPremium
            ? `Logged In: ${props.user.name} (Standard)`
            : "Login (Standard)"}
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
