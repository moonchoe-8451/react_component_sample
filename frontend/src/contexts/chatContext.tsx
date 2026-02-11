/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ChatContextType, Message } from "../types/types";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export default function ChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  // Function to handle adding new messages to the history
  function addMessage(text: string, sender: "user" | "ai") {
    const newMessage: Message = {
      id: crypto.randomUUID(), // Generates a unique ID
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  }

  function clearChat() {
    setMessages([]);
  }

  return (
    <ChatContext.Provider
      value={{
        isChatOpen,
        setIsChatOpen,
        messages,
        addMessage,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

// Custom hook to retrieve the chat context
export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
