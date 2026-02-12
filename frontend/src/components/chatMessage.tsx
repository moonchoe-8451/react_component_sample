import type { ReactNode } from "react";

type Variant = "user" | "assistant";

type ChatMessageRootProps = {
  variant: Variant;
  children: ReactNode;
  className?: string;
};

// eslint-disable-next-line react-refresh/only-export-components
function Root({ variant, children, className }: ChatMessageRootProps) {
  return (
    <div
      className={[
        "max-w-[75%] rounded-xl border p-3 mb-3",
        "flex flex-col items-center gap-2",
        variant === "user"
          ? "ml-auto bg-blue-400 text-white"
          : "mr-auto bg-white text-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
function Header({ children }: { children: ReactNode }) {
  return <div className="text-center font-medium">{children}</div>;
}

// eslint-disable-next-line react-refresh/only-export-components
function Body({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center gap-1">{children}</div>;
}
// eslint-disable-next-line react-refresh/only-export-components
function Title({ children }: { children: ReactNode }) {
  return <div className="font-semibold">{children}</div>;
}
// eslint-disable-next-line react-refresh/only-export-components
function Artist({ children }: { children: ReactNode }) {
  return <div className="text-sm text-gray-600">{children}</div>;
}
// eslint-disable-next-line react-refresh/only-export-components
function Cover({ src, alt }: { src: string; alt?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-36 h-36 rounded-lg object-cover border"
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Footer({ children }: { children: ReactNode }) {
  return <div className="text-xs text-gray-500 text-center">{children}</div>;
}

// Compound component export
export const ChatMessage = {
  Root,
  Header,
  Body,
  Title,
  Artist,
  Cover,
  Footer,
};
