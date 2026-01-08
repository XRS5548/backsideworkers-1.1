export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-3xl font-bold">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mt-10 space-y-6 text-sm text-muted-foreground">
        <p>
          BacksideWorker respects your privacy and is committed
          to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your
          data when you use our platform.
        </p>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            We may collect personal information such as your name,
            email address, contact details, and project-related
            information when you register or submit work on our
            platform.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <p className="mt-2">
            Your information is used to provide services, manage
            projects, communicate with you, process payments, and
            improve our platform experience.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            3. Data Security
          </h2>
          <p className="mt-2">
            We implement industry-standard security measures to
            protect your data. However, no method of transmission
            over the internet is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            4. Third-Party Services
          </h2>
          <p className="mt-2">
            We may use third-party tools for analytics, payments,
            or communication. These services have their own
            privacy policies.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            5. Your Rights
          </h2>
          <p className="mt-2">
            You have the right to access, update, or request
            deletion of your personal data by contacting us.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            6. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time.
            Changes will be reflected on this page.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            7. Contact Us
          </h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy,
            please contact us at support@backsideworker.in
          </p>
        </div>
      </section>
    </main>
  )
}
