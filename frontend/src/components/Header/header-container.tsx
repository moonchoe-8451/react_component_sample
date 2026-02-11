import { useAuth } from "../../contexts/authContext";
import { useChat } from "../../contexts/chatContext";
import { useState } from "react";
import { HeaderPresenter } from "../Header/header-presenter";

export function HeaderContainer() {
  const { user, isLoading, login, logout } = useAuth();
  const { isChatOpen, setIsChatOpen } = useChat();
  const [dropdown, setDropdown] = useState<boolean>(false);

  function handleLogin(isPremium: boolean) {
    login(isPremium);
    handleDropdownToggle();
    console.log("HANDLING LOGIN");
  }

  function handleChatToggle() {
    setIsChatOpen(!isChatOpen);
    console.log("TOGGLING Chat");
  }

  function handleDropdownToggle() {
    setDropdown(!dropdown);
    console.log("HANDLING DROPDOWN");
  }

  function handleLogout() {
    logout();
    handleDropdownToggle();
    console.log("HANDLING LOG OUT");
  }

  return (
    <HeaderPresenter
      user={user}
      isLoading={isLoading}
      onLogin={handleLogin}
      onLogout={handleLogout}
      isChatOpen={isChatOpen}
      onChat={handleChatToggle}
      dropdown={dropdown}
      onDropdown={handleDropdownToggle}
    />
  );
}
