import ChatPresenter from "./chat-presenter";

export default function ChatContainer() {
  function test() {}
  return <ChatPresenter message={""} onInputChange={test} onKeyDown={test} />;
}
