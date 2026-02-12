import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Mock } from "vitest";
import ChatPresenter from "./chat-presenter";
import ChatContainer from "./chat-container";

vi.mock("../../contexts/authContext", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../contexts/chatContext", () => ({
  useChat: vi.fn(),
}));

const { useAuth } = await import("../../contexts/authContext");

const { useChat } = await import("../../contexts/chatContext");

describe("Chatbox", () => {
  beforeEach(() => {
    (useChat as unknown as Mock).mockReturnValue({
      messages: [],
      addMessage: vi.fn(),
    });
    (useAuth as unknown as Mock).mockReturnValue({
      user: null,
    });
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it("blocks AI access for non-premium users", async () => {
    const addMessage = vi.fn();
    (useChat as unknown as Mock).mockReturnValue({
      messages: [],
      addMessage,
    });
    (useAuth as unknown as Mock).mockReturnValue({
      user: { id: 1, name: "Standard", isPremium: false, profilePic: "" },
    });

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => [],
      }),
    );

    const user = userEvent.setup();
    render(<ChatContainer />);

    const textarea = screen.getByPlaceholderText("What Do You Need Today?");
    await user.type(textarea, "hello");
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(addMessage).toHaveBeenCalledWith(
      "You must purchase premium to use the AI agent.",
      "ai",
    );
    expect(addMessage).not.toHaveBeenCalledWith("hello", "user");
  });

  it("sends a hardcoded AI recommendation (with cover metadata) for premium users", async () => {
    vi.useFakeTimers();

    const addMessage = vi.fn();
    (useChat as unknown as Mock).mockReturnValue({
      messages: [],
      addMessage,
    });
    (useAuth as unknown as Mock).mockReturnValue({
      user: { id: 1, name: "Premium", isPremium: true, profilePic: "" },
    });

    const recs = [
      {
        header: "Header",
        songTitle: "Song",
        songArtist: "Artist",
        songCover: "https://example.com/cover.png",
        footer: "Footer",
      },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => recs,
      }),
    );

    render(<ChatContainer />);

    // Let the effect fetch + set state settle
    await Promise.resolve();
    await Promise.resolve();

    const textarea = screen.getByPlaceholderText("What Do You Need Today?");
    fireEvent.change(textarea, { target: { value: "recommend" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(addMessage).toHaveBeenCalledWith("recommend", "user");

    vi.advanceTimersByTime(300);

    const lastCall = addMessage.mock.calls[addMessage.mock.calls.length - 1];
    expect(lastCall[1]).toBe("ai");
    expect(lastCall[2]).toMatchObject({
      header: "Header",
      songTitle: "Song",
      songArtist: "Artist",
      songCover: "https://example.com/cover.png",
      footer: "Footer",
    });
  });

  it("renders an album cover when songCover is provided", () => {
    render(
      <ChatPresenter
        messages={[
          {
            id: "1",
            sender: "ai",
            timestamp: new Date(),
            text: "AI text",
            header: "Header",
            songTitle: "Song",
            songArtist: "Artist",
            songCover: "https://example.com/cover.png",
            footer: "Footer",
          },
        ]}
        message=""
        onInputChange={() => {}}
        onKeyDown={() => {}}
        onSend={() => {}}
      />,
    );

    const img = screen.getByRole("img", { name: /song/i });
    expect(img.getAttribute("src")).toBe("https://example.com/cover.png");
  });
});
