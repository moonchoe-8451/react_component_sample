import { useEffect, useRef, useState } from "react";
import ChatPresenter from "./chat-presenter";
import { useAuth } from "../../contexts/authContext";
import { useChat } from "../../contexts/chatContext";
import type { User } from "../../types/types";

export default function ChatContainer() {
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const { messages, addMessage } = useChat();

  type Recommendation = {
    header: string;
    songTitle: string;
    songArtist: string;
    songCover: string;
    footer: string;
  };

  const [recs, setRecs] = useState<Recommendation[]>([]);
  const [recsError, setRecsError] = useState<string | null>(null);

  const sendCountRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    async function loadRecs() {
      try {
        setRecsError(null);
        const response = await fetch("/mock-data/recs.json");
        if (!response.ok) {
          throw new Error(`Failed to load recs.json (${response.status})`);
        }
        const data = (await response.json()) as Recommendation[];
        if (!cancelled) {
          setRecs(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        if (!cancelled) {
          setRecsError(
            e instanceof Error ? e.message : "Failed to load recommendations",
          );
        }
      }
    }

    loadRecs();
    return () => {
      cancelled = true;
    };
  }, []);

  function pickRecommendation(
    currentUser: User | null,
    recommendations: Recommendation[],
    sendCount: number,
  ) {
    if (recommendations.length === 0) return null;

    // Deterministic behavior:
    // - premium => first rec
    // - standard/guest => second rec (or fallback to first)
    const baseIndex = currentUser?.isPremium ? 0 : 1;
    const safeBase = Math.min(baseIndex, recommendations.length - 1);
    const index =
      (safeBase + (sendCount % recommendations.length)) %
      recommendations.length;
    return recommendations[index] ?? null;
  }

  function formatRecommendation(rec: Recommendation) {
    return [
      rec.header,
      "",
      `Song: ${rec.songTitle} — ${rec.songArtist}`,
      rec.footer,
    ].join("\n");
  }

  const handleInputChange = (value: string) => {
    setMessage(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Check if Enter is pressed without Shift
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line in the textarea
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    addMessage(trimmed, "user");
    setMessage("");

    // AI reply is hardcoded from recs.json (no model calls)
    const rec = pickRecommendation(user, recs, sendCountRef.current);
    const aiText = rec
      ? formatRecommendation(rec)
      : recsError
        ? `AI is unavailable: ${recsError}`
        : "AI is unavailable: no recommendations loaded.";

    sendCountRef.current += 1;
    window.setTimeout(() => addMessage(aiText, "ai"), 250);
  };

  return (
    <ChatPresenter
      messages={messages}
      message={message}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onSend={handleSendMessage}
    />
  );
}
