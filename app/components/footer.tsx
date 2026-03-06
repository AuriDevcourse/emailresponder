import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center">
          <Image
            src="/fulllogo-dark.png"
            alt="EmailResponder"
            width={140}
            height={40}
            className="h-7 w-auto"
          />
        </a>
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a
            href="/privacy"
            className="hover:text-text-secondary transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-text-secondary transition-colors"
          >
            Terms of Service
          </a>
          <span>&copy; 2025 Aurimas Baciauskas</span>
        </div>
      </div>
    </footer>
  );
}
