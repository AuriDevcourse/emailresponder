import Image from "next/image";
import { Chrome } from "lucide-react";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/fulllogo-dark.png"
            alt="EmailResponder"
            width={280}
            height={80}
            className="h-16 w-auto"
          />
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-text-secondary">
          <a href="/#features" className="hover:text-text-primary transition-colors">
            Features
          </a>
          <a href="/#how-it-works" className="hover:text-text-primary transition-colors">
            How it works
          </a>
          <a href="/#install" className="hover:text-text-primary transition-colors">
            Install
          </a>
        </div>
        <span
          className="hidden sm:inline-flex items-center gap-2 bg-primary/60 text-primary-fg px-4 py-2 rounded-lg text-sm font-medium cursor-default"
        >
          <Chrome size={16} />
          Coming Soon
        </span>
      </div>
    </nav>
  );
}
