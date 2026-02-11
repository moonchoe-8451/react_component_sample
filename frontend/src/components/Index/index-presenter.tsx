import { HeaderContainer } from "../Header/header-container";
import type { IndexPresenterProps } from "../../types/types";
import ChatContainer from "../Chatbox/chat-container";

// const account = useState<User>();
// const chatOpen = useState<boolean>(false);
export function IndexPresenter(props: IndexPresenterProps) {
  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans overflow-hidden">
      {/* Header */}
      <div className="bg-black h-18 shrink-0 ">
        <HeaderContainer />
      </div>

      {/* Middle section */}
      <div className="flex flex-1 flex-row overflow-hidden gap-2 px-2">
        <div className="w-70 bg-[#121212] rounded-lg"></div>
        <div className="flex-1 flex bg-[#121212] rounded-lg overflow-hidden p-4">
          <div className="rounded-lg w-full">
            <img
              src="/other-images/colab.png"
              alt="Spotify X OpenAI Collab"
              className="w-full h-auto block rounded-lg "
            />
          </div>
        </div>
        {/* <div className="w-70 bg-[#121212] rounded-lg"></div> */}
        <div
          className={`${props.chatOpen ? "w-105" : "w-70"} bg-[#121212] rounded-lg transition-all duration-300 ease-in-out`}
        >
          {/* If you want to render the different component here when open */}
          {props.chatOpen && <ChatContainer />}
        </div>
        {/* 105 */}
      </div>
      {/* Footer */}
      <div className="bg-black h-18 shrink-0"></div>
    </div>
  );
}
