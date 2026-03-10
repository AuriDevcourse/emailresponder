import Image from "next/image";
import { Chrome } from "lucide-react";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center">
          <Image
            src="/fulllogo-dark.png"
            alt="EmailResponder"
            width={220}
            height={60}
            className="h-10 w-auto"
          />
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-text-muted">
          <a
            href="/#features"
            className="hover:text-text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="/#how-it-works"
            className="hover:text-text-primary transition-colors"
          >
            How it works
          </a>
          <span className="inline-flex items-center gap-2 border border-border text-text-secondary px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-default">
            <Chrome size={14} />
            Coming Soon
          </span>
        </div>
      </div>
    </nav>
  );
}
