import type * as React from "react";

export interface User {
  id: number;
  name: string;
  isPremium: boolean;
  profilePic: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (isPremium: boolean) => void | Promise<void>;
  logout: () => void;
}

export interface HeaderPresenterProps {
  user: User | null | undefined;
  onChat: () => void;
  dropdown: boolean;
  onDropdown: () => void;
}

export interface IndexPresenterProps {
  chatOpen: boolean;
}

export interface ChatPresenterProps {
  messages: Message[];
  message: string;
  onInputChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;

  // Optional structured payload for hardcoded AI recommendations
  header?: string;
  songTitle?: string;
  songArtist?: string;
  songCover?: string;
  footer?: string;
}

export interface ChatContextType {
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  messages: Message[];
  addMessage: (
    text: string,
    sender: "user" | "ai",
    meta?: Partial<
      Pick<
        Message,
        "header" | "songTitle" | "songArtist" | "songCover" | "footer"
      >
    >,
  ) => void;
  clearChat: () => void;
}

export interface DropdownPresenterProps {
  onLogin: (isPremium: boolean) => void | Promise<void>;
  onLogout: () => void;
  user: User | null;
}
