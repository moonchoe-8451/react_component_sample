import React from "react";
import type { ChatPresenterProps } from "../../types/types";

export default function ChatPresenter(props: ChatPresenterProps) {
  return (
    <div className="flex flex-col h-full w-full p-2">
      <div className="flex-1 overflow-y-auto bg-red-500 rounded-lg mb-2">
        {/* Messages Area */}
      </div>
      <div className="min-h-20 border-t border-gray-700 bg-blue-500 rounded-lg p-3">
        <textarea
          value={props.message}
          onChange={(e) => props.onInputChange(e.target.value)}
          onKeyDown={props.onKeyDown}
          placeholder="What Do You Need Today?"
          className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-300 resize-none overflow-y-auto leading-relaxed"
          rows={2}
        />
      </div>
    </div>
  );
}
