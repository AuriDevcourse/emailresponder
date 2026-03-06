import type { Metadata } from "next";
import { NavBar } from "../components/nav-bar";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Auri's Email Replier",
};

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />

      <main className="pt-28 pb-20 px-6">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-text-muted mb-10">Last updated: February 27, 2026</p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                What the extension does
              </h2>
              <p>
                Auri&apos;s Email Replier is a Chrome extension that reads your recent
                Gmail inbox, analyzes your writing tone from sent emails, and creates
                AI-generated reply drafts using your chosen AI provider (Anthropic
                Claude, OpenAI, or Google Gemini).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Data we access
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  <strong className="text-text-primary">Gmail messages</strong> — We
                  read your recent inbox messages and sent emails to generate reply
                  drafts and learn your tone of voice. Access is provided through
                  Google OAuth2 with the{" "}
                  <code className="text-sm bg-bg-muted border border-border rounded px-1.5 py-0.5">
                    gmail.readonly
                  </code>{" "}
                  and{" "}
                  <code className="text-sm bg-bg-muted border border-border rounded px-1.5 py-0.5">
                    gmail.compose
                  </code>{" "}
                  scopes.
                </li>
                <li>
                  <strong className="text-text-primary">Google account email</strong>{" "}
                  — Used to identify your account within the extension.
                </li>
                <li>
                  <strong className="text-text-primary">AI API key</strong> — You
                  provide your own API key, which is stored locally in Chrome
                  extension storage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                How data is processed
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  Email content (subject, snippet, body) is sent to your chosen AI
                  provider to generate reply drafts and analyze your writing tone.
                </li>
                <li>
                  All processing happens on-demand or via a periodic background check
                  (every 10 minutes when enabled).
                </li>
                <li>
                  Generated drafts are saved directly to your Gmail Drafts folder via
                  the Gmail API.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Data storage
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  Your API key, tone profile, activity log, and settings are stored{" "}
                  <strong className="text-text-primary">locally</strong> in
                  Chrome&apos;s{" "}
                  <code className="text-sm bg-bg-muted border border-border rounded px-1.5 py-0.5">
                    chrome.storage.local
                  </code>{" "}
                  on your device.
                </li>
                <li>No data is stored on any server we operate.</li>
                <li>
                  Email content sent to AI providers is subject to their respective
                  privacy policies:{" "}
                  <a
                    href="https://www.anthropic.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Anthropic
                  </a>
                  ,{" "}
                  <a
                    href="https://openai.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    OpenAI
                  </a>
                  ,{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Google
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Data sharing
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  We do <strong className="text-text-primary">not</strong> sell,
                  share, or transfer your data to any third party, except as needed to
                  provide the service (sending email content to your chosen AI
                  provider for processing).
                </li>
                <li>
                  We do <strong className="text-text-primary">not</strong> use your
                  data for advertising or analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Data retention
              </h2>
              <p>
                All data is stored locally on your device and is removed when you
                uninstall the extension or clear extension data. We do not retain any
                data on external servers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Your rights
              </h2>
              <p>
                You can revoke Gmail access at any time through your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Google Account permissions
                </a>
                . You can uninstall the extension to delete all locally stored data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. The &quot;last
                updated&quot; date at the top will reflect any changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this privacy policy, contact:{" "}
                <a
                  href="mailto:aurimas.baciauskas@gmail.com"
                  className="text-accent hover:underline"
                >
                  aurimas.baciauskas@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
