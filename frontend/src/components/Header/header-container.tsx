import { useAuth } from "../../contexts/authContext";
import { useChat } from "../../contexts/chatContext";
import { useState } from "react";
import { HeaderPresenter } from "../Header/header-presenter";

export function HeaderContainer() {
  const { user } = useAuth();
  const { isChatOpen, setIsChatOpen } = useChat();
  const [dropdown, setDropdown] = useState<boolean>(false);

  function handleChatToggle() {
    setIsChatOpen(!isChatOpen);
    console.log("TOGGLING Chat");
  }

  function handleDropdownToggle() {
    setDropdown(!dropdown);
    console.log("HANDLING DROPDOWN");
  }

  return (
    <HeaderPresenter
      user={user}
      onChat={handleChatToggle}
      dropdown={dropdown}
      onDropdown={handleDropdownToggle}
    />
  );
}
