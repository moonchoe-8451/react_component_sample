type Variant = "user" | "assistant";

export function ChatMessage({
  variant,
  header,
  songTitle,
  songArtist,
  songCover,
  footer,
}: {
  variant: Variant;
  header: string;
  songTitle?: string;
  songArtist?: string;
  songCover?: string;
  footer?: string;
}) {
  return (
    <div
      className={[
        "max-w-[75%] rounded-xl border p-3 mb-3",
        "flex flex-col items-center gap-2",
        variant === "user"
          ? "ml-auto bg-blue-400 text-white"
          : "mr-auto bg-white text-black",
      ].join(" ")}
    >
      {/* Header */}
      <div className="text-center font-medium">{header}</div>

      {/* Body (AI only) */}
      {songTitle && (
        <div className="flex flex-col items-center gap-1">
          <div className="font-semibold">{songTitle}</div>
          <div className="text-sm text-gray-600">{songArtist}</div>

          {songCover && (
            <img
              src={songCover}
              className="w-36 h-36 rounded-lg object-cover border"
            />
          )}
        </div>
      )}

      {/* Footer */}
      {footer && (
        <div className="text-xs text-gray-500 text-center">{footer}</div>
      )}
    </div>
  );
}
