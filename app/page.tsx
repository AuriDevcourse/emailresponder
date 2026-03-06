import Image from "next/image";
import {
  Sparkles,
  ScanEye,
  FileText,
  BookOpen,
  Bot,
  Key,
  Chrome,
  ArrowRight,
  Mail,
  Shield,
  Linkedin,
  Github,
  ChevronDown,
} from "lucide-react";
import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";

function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 bg-accent-light border border-border-strong rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={14} className="text-accent" />
          <span className="text-sm text-accent font-medium">AI-Powered Email Assistant</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight">
          Email replies that
          <br />
          <span className="text-accent">sound like you</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          A Chrome extension that learns your unique writing style from your sent
          emails, then drafts personalized replies that match your tone of voice.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#install"
            className="inline-flex items-center gap-2 bg-primary text-primary-fg px-6 py-3 rounded-lg text-base font-semibold hover:bg-primary-hover transition-colors shadow-md"
          >
            <Chrome size={20} />
            Add to Chrome
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 border border-border-strong text-text-secondary px-6 py-3 rounded-lg text-base font-medium hover:bg-bg-muted transition-colors"
          >
            Learn more
            <ChevronDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ScreenshotSection() {
  return (
    <section className="pb-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-2xl border border-border-strong bg-bg-secondary p-2 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-border-strong" />
            <div className="w-3 h-3 rounded-full bg-border-strong" />
            <div className="w-3 h-3 rounded-full bg-border-strong" />
            <span className="ml-3 text-xs text-text-muted">Chrome Extension</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
            <div className="rounded-xl bg-bg p-5 border border-border">
              <ScanEye size={24} className="text-accent mb-3" />
              <h3 className="font-semibold text-sm text-text-primary mb-1">Tone Analysis</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Reads your sent emails and builds a profile of your writing style,
                formality, greetings, and vocabulary.
              </p>
            </div>
            <div className="rounded-xl bg-bg p-5 border border-border">
              <Mail size={24} className="text-accent mb-3" />
              <h3 className="font-semibold text-sm text-text-primary mb-1">Smart Inbox</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Browse your inbox, view emails, and generate AI-drafted replies
                with a single click.
              </p>
            </div>
            <div className="rounded-xl bg-bg p-5 border border-border">
              <Bot size={24} className="text-accent mb-3" />
              <h3 className="font-semibold text-sm text-text-primary mb-1">Auto-Drafts</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Automatically checks for new emails and creates draft replies
                every 10 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: ScanEye,
    title: "Learns Your Writing Style",
    desc: "Analyzes your sent emails to understand your tone, formality, greetings, closing style, vocabulary, and characteristic phrases.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Reply Generation",
    desc: "Generates reply drafts that sound exactly like you wrote them. Supports Claude, OpenAI GPT, and Google Gemini.",
  },
  {
    icon: Bot,
    title: "Automatic Draft Creation",
    desc: "Runs in the background every 10 minutes, automatically creating draft replies for emails that need a response.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    desc: "Upload documents and notes so the AI can reference your organization's information when crafting replies.",
  },
  {
    icon: FileText,
    title: "Custom Reply Instructions",
    desc: "Set custom rules like 'Always use we, not I' or 'Keep replies under 3 sentences' to fine-tune the output.",
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    desc: "Your API key stays in your browser. Email data is only sent to your chosen AI provider. No intermediary servers.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Everything you need
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            From tone analysis to automatic drafting, all in one lightweight
            Chrome extension.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-bg-secondary p-6 hover:border-border-strong hover:bg-bg-muted transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-light border border-border-strong flex items-center justify-center mb-4 group-hover:border-accent/40 transition-colors">
                <f.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    num: "1",
    title: "Install the Extension",
    desc: "Add Auri's Email Replier from the Chrome Web Store and sign in with your Google account.",
    icon: Chrome,
  },
  {
    num: "2",
    title: "Add Your API Key",
    desc: "Bring your own key from Anthropic (Claude), OpenAI, or Google Gemini. Your key stays in your browser.",
    icon: Key,
  },
  {
    num: "3",
    title: "Analyze Your Tone",
    desc: "The extension reads your sent emails to build a profile of your unique writing style.",
    icon: ScanEye,
  },
  {
    num: "4",
    title: "Get Personalized Replies",
    desc: "Open any email and click 'Generate Reply' or let auto-draft create replies for you automatically.",
    icon: Sparkles,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-bg-secondary">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            How it works
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Up and running in under 2 minutes
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-light border border-border-strong flex items-center justify-center">
                <span className="text-accent font-bold text-lg">{s.num}</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1 flex items-center gap-2">
                  <s.icon size={16} className="text-text-muted" />
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIProviders() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
          Bring your own AI
        </h2>
        <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
          Choose the AI provider that works best for you. Bring your own API key
          and keep full control.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { name: "Claude", provider: "Anthropic", models: "Sonnet, Haiku, Opus" },
            { name: "GPT", provider: "OpenAI", models: "GPT-4o, GPT-4o mini" },
            { name: "Gemini", provider: "Google", models: "Gemini Pro, Flash" },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-border bg-bg-secondary p-6 hover:border-border-strong transition-colors"
            >
              <h3 className="font-bold text-text-primary text-lg">{p.name}</h3>
              <p className="text-xs text-text-muted mt-1">by {p.provider}</p>
              <p className="text-sm text-text-secondary mt-3">{p.models}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Install() {
  return (
    <section id="install" className="py-20 px-6 bg-bg-secondary">
      <div className="mx-auto max-w-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent-light border border-border-strong flex items-center justify-center mx-auto mb-6">
          <Chrome size={32} className="text-accent" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          Ready to get started?
        </h2>
        <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
          Install the extension from the Chrome Web Store and start getting
          personalized email reply drafts in minutes.
        </p>
        <a
          href="https://chromewebstore.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-fg px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-hover transition-colors shadow-lg"
        >
          <Chrome size={22} />
          Add to Chrome
          <ArrowRight size={18} />
        </a>
        <p className="mt-4 text-sm text-text-muted">
          Free to use. Requires your own AI API key.
        </p>
      </div>
    </section>
  );
}

function Creator() {
  return (
    <section id="creator" className="py-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-8">
          Built by
        </h2>
        <div className="inline-flex flex-col items-center gap-4">
          <Image
            src="/aurimas.jpeg"
            alt="Aurimas Baciauskas"
            width={80}
            height={80}
            className="rounded-full border-2 border-border-strong object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-text-primary">
              Aurimas Baciauskas
            </h3>
            <p className="text-text-secondary mt-1">
              Developer &amp; creator of Auri&apos;s Email Replier
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/auribaci/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/auridevcourse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ScreenshotSection />
        <Features />
        <HowItWorks />
        <AIProviders />
        <Install />
        <Creator />
      </main>
      <Footer />
    </>
  );
}
