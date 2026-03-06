import type { Metadata } from "next";
import { NavBar } from "../components/nav-bar";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Terms of Service - Auri's Email Replier",
};

export default function TermsOfService() {
  return (
    <>
      <NavBar />

      <main className="pt-28 pb-20 px-6">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-text-muted mb-10">Last updated: March 6, 2026</p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By installing and using Auri&apos;s Email Replier (&quot;the
                Extension&quot;), you agree to these Terms of Service. If you do not
                agree, please uninstall the Extension.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                2. Description of Service
              </h2>
              <p>
                The Extension is a Chrome browser extension that connects to your
                Gmail account via Google OAuth and uses third-party AI providers
                (Anthropic, OpenAI, or Google Gemini) to analyze your writing style
                and generate email reply drafts. You must provide your own API key
                for the AI provider of your choice.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                3. Requirements
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>A Google account with Gmail access.</li>
                <li>A valid API key from a supported AI provider (Anthropic, OpenAI, or Google Gemini).</li>
                <li>Google Chrome browser.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                4. Your Responsibilities
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  You are responsible for keeping your AI API key secure. Do not share
                  it with others.
                </li>
                <li>
                  You are responsible for reviewing all AI-generated drafts before
                  sending them. The Extension creates drafts, not sent emails.
                </li>
                <li>
                  You are responsible for any costs incurred from your AI provider
                  based on your API usage.
                </li>
                <li>
                  You agree not to use the Extension for spam, harassment, or any
                  unlawful purpose.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                5. AI-Generated Content
              </h2>
              <p>
                The Extension uses AI to generate email reply drafts. These drafts
                are suggestions only. We make no guarantees about the accuracy,
                appropriateness, or quality of AI-generated content. Always review
                drafts before sending.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                6. Third-Party Services
              </h2>
              <p>
                The Extension relies on third-party services including Google Gmail
                API and AI providers. Your use of these services is subject to their
                respective terms of service and privacy policies. We are not
                responsible for the availability, performance, or policies of these
                third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                7. Privacy
              </h2>
              <p>
                Your privacy is important to us. Please review our{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>{" "}
                for details on how your data is accessed, processed, and stored.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                8. Disclaimer of Warranties
              </h2>
              <p>
                The Extension is provided &quot;as is&quot; without warranties of any
                kind, express or implied. We do not warrant that the Extension will be
                error-free, uninterrupted, or meet your specific requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, the developer shall not be
                liable for any indirect, incidental, special, or consequential damages
                arising from the use of the Extension, including but not limited to
                damages from emails sent based on AI-generated drafts.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                10. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. Continued use of the
                Extension after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                11. Contact
              </h2>
              <p>
                If you have questions about these terms, contact:{" "}
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
