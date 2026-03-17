import Image from "next/image";
import {
  ScanEye,
  BookOpen,
  Bot,
  Chrome,
  ArrowRight,
  Mail,
  Shield,
  Linkedin,
  Github,
  Users,
  Zap,
} from "lucide-react";
import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";

const providers = ["Anthropic", "OpenAI", "Gemini"];

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-sm tracking-widest uppercase text-text-muted mb-6">
              Chrome Extension
            </p>
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-text-primary leading-[1.05]">
              Your emails,
              <br />
              <span className="text-accent">your voice.</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-md leading-relaxed">
              EmailResponder learns how you write from your sent emails, then
              drafts replies that actually sound like you. Not a bot. You.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-fg px-5 py-2.5 rounded-lg text-sm font-semibold">
                <Chrome size={18} />
                Coming Soon
              </div>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                See how it works
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Provider pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {providers.map((p) => (
                <span
                  key={p}
                  className="text-xs text-text-muted border border-border rounded-full px-3 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right — floating UI preview */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl border border-border-strong bg-bg-secondary/80 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60">
                <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              </div>

              {/* Mock email */}
              <div className="p-5 border-b border-border/40">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-text-primary">Re: Partnership proposal</p>
                    <p className="text-xs text-text-muted mt-0.5">from alex@startup.io</p>
                  </div>
                  <span className="text-[10px] text-text-muted">2 min ago</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Hi! Would love to discuss a potential partnership between our teams.
                  Are you available for a quick call this week?
                </p>
              </div>

              {/* Mock generated reply */}
              <div className="p-5 bg-accent/[0.03]">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={12} className="text-accent" />
                  <span className="text-[10px] font-medium text-accent uppercase tracking-wider">
                    Generated reply
                  </span>
                </div>
                <p className="text-xs text-text-primary leading-relaxed">
                  Hey Alex, thanks for reaching out! A partnership sounds interesting.
                  I&apos;m free Thursday afternoon or Friday morning if either works for you.
                  Looking forward to chatting!
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] bg-accent/20 text-accent rounded px-2 py-0.5 font-medium">
                    Save as Draft
                  </span>
                  <span className="text-[10px] bg-bg-muted text-text-muted rounded px-2 py-0.5">
                    Regenerate
                  </span>
                </div>
              </div>
            </div>

            {/* Floating tone badge */}
            <div className="absolute -bottom-4 -left-4 sm:left-auto sm:-right-4 rounded-xl border border-border-strong bg-bg-secondary p-3 shadow-lg">
              <p className="text-[10px] text-text-muted mb-1">Tone match</p>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 rounded-full bg-border overflow-hidden">
                  <div className="w-[92%] h-full bg-accent rounded-full" />
                </div>
                <span className="text-xs font-semibold text-accent">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <p className="text-sm tracking-widest uppercase text-text-muted mb-4">
          What it does
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary max-w-lg">
          Learns your style.
          <br />
          <span className="text-text-secondary">Writes like you.</span>
        </h2>

        {/* Asymmetric feature layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Large feature */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-bg-secondary p-8 sm:p-10 flex flex-col justify-between min-h-[220px] group hover:border-border-strong transition-colors">
            <ScanEye size={24} className="text-accent" />
            <div className="mt-auto">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Tone Analysis
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                Analyzes your sent emails to understand your tone, formality,
                greetings, closing style, vocabulary, and characteristic phrases.
              </p>
            </div>
          </div>
          {/* Stacked small features */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-bg-secondary p-6 flex-1 group hover:border-border-strong transition-colors">
              <Bot size={20} className="text-accent mb-4" />
              <h3 className="font-semibold text-text-primary text-sm mb-1">Auto-Drafts</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Runs every 10 minutes in the background, drafting replies to emails that need a response.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-secondary p-6 flex-1 group hover:border-border-strong transition-colors">
              <Mail size={20} className="text-accent mb-4" />
              <h3 className="font-semibold text-text-primary text-sm mb-1">Smart Inbox</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Filters out newsletters and automated emails. Shows only what needs your attention.
              </p>
            </div>
          </div>
        </div>

        {/* Second row — inverted */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-bg-secondary p-6 group hover:border-border-strong transition-colors">
            <BookOpen size={20} className="text-accent mb-4" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Knowledge Base</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Upload docs so the AI can reference your organization&apos;s info when crafting replies.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-secondary p-6 group hover:border-border-strong transition-colors">
            <Users size={20} className="text-accent mb-4" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Multi-Account</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Manage multiple Gmail accounts. Each gets its own tone profile and settings.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-secondary p-6 group hover:border-border-strong transition-colors">
            <Shield size={20} className="text-accent mb-4" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Privacy-First</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Your API key stays in your browser. No intermediary servers. You own your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — steps */}
          <div>
            <p className="text-sm tracking-widest uppercase text-text-muted mb-4">
              Setup
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-12">
              Two minutes to
              <br />
              <span className="text-text-secondary">your first draft.</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  n: "01",
                  title: "Install & sign in",
                  desc: "Add EmailResponder from the Chrome Web Store. Sign in with Google to connect your Gmail.",
                },
                {
                  n: "02",
                  title: "Paste your API key",
                  desc: "From any supported provider. It\u2019s auto-detected and never leaves your browser.",
                },
                {
                  n: "03",
                  title: "Analyze your tone",
                  desc: "One click reads your sent emails and builds your unique writing profile.",
                },
                {
                  n: "04",
                  title: "Generate replies",
                  desc: "Click on any email to get a draft, or enable auto-draft to handle it automatically.",
                },
              ].map((step, i) => (
                <div key={step.n} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono text-accent/70 font-bold">
                      {step.n}
                    </span>
                    {i < 3 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-semibold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contextual detail */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-bg-secondary p-8">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Bring your own AI
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Works with 3 trusted providers. Paste any API key and the extension
                detects which one it is. Switch anytime.
              </p>
              <div className="flex flex-wrap gap-2">
                {providers.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-medium text-text-primary bg-bg-muted border border-border rounded-full px-3 py-1.5 hover:border-accent/40 transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Privacy callout */}
            <div className="mt-4 rounded-2xl border border-border bg-bg-secondary/50 p-6">
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Your data stays yours
                  </p>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Everything is stored locally in your browser. Emails are only
                    sent to your chosen AI provider using your own API key. No
                    tracking, no analytics, no intermediary servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Creator() {
  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center gap-6">
        <Image
          src="/aurimas.jpeg"
          alt="Aurimas Baciauskas"
          width={56}
          height={56}
          className="rounded-full border border-border-strong object-cover"
        />
        <div className="text-center sm:text-left">
          <p className="text-sm text-text-secondary">
            Built by{" "}
            <span className="text-text-primary font-medium">
              Aurimas Baciauskas
            </span>
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/auribaci/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href="https://github.com/auridevcourse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
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
        <Features />
        <HowItWorks />
        <Creator />
      </main>
      <Footer />
    </>
  );
}
