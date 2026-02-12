import type { ChatPresenterProps } from "../../types/types";

export default function ChatPresenter(props: ChatPresenterProps) {
  const canSend = props.message.trim().length > 0;

  return (
    <div className="flex flex-col h-full w-full p-2">
      <div className="flex-1 overflow-y-auto bg-[#0f0f0f] rounded-lg mb-2">
        {props.messages.length === 0 ? (
          <div className="p-4 text-sm text-gray-400">
            Ask for a recommendation and I’ll reply from recs.json.
          </div>
        ) : (
          <div className="p-2 space-y-2">
            {props.messages.map((m) => {
              const isUser = m.sender === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={[
                      "max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
                      isUser
                        ? "bg-green-600 text-white"
                        : "bg-[#1f1f1f] text-white",
                    ].join(" ")}
                  >
                    <div className="text-[11px] opacity-70 mb-1">
                      {isUser ? "You" : "AI"}
                    </div>
                    {m.text}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="min-h-20 border-t border-gray-700 bg-[#121212] rounded-lg p-3 flex gap-2 items-center">
        <textarea
          value={props.message}
          onChange={(e) => props.onInputChange(e.target.value)}
          onKeyDown={props.onKeyDown}
          placeholder="What Do You Need Today?"
          className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 resize-none overflow-y-auto leading-relaxed"
          rows={2}
        />

        <button
          onClick={props.onSend}
          disabled={!canSend}
          className={[
            "px-4 py-2 rounded-md font-bold shrink-0",
            canSend
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-gray-700 text-gray-400 cursor-not-allowed",
          ].join(" ")}
        >
          Send
        </button>
      </div>
    </div>
  );
}
