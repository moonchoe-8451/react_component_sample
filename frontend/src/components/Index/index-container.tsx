import { IndexPresenter } from "./index-presenter";
import { useChat } from "../../contexts/chatContext";

export function IndexContainer() {
  const { isChatOpen } = useChat();
  return <IndexPresenter chatOpen={isChatOpen} />;
}
