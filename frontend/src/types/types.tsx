export interface User {
  id: number;
  name: string;
  isPremium: boolean;
  profilePicture: string;
}

export interface AuthContextType {
  user: User;
  isLoading: boolean;
  login: (isPremium: boolean) => void;
  logout: () => void;
}

export interface HeaderPresenterProps {
  user: User | null | undefined;
  isLoading: boolean;
  onLogin: (isPremium: boolean) => void;
  onLogout: () => void;
  onChat: () => void;
  isChatOpen: boolean;
  dropdown: boolean;
  onDropdown: () => void;
}

export interface IndexPresenterProps {
  chatOpen: boolean;
}

export interface ChatPresenterProps {
  message: string;
  onInputChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export interface ChatContextType {
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  messages: Message[];
  addMessage: (text: string, sender: "user" | "ai") => void;
  clearChat: () => void;
}

// export interface DropdownContainerProps {
//   onClose: () => void;
// }

export interface DropdownPresenterProps {
  onLogin: (isPremium: boolean) => void;
  onLogout: () => void;
}
