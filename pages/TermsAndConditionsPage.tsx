export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-3xl font-bold">
        Terms & Conditions
      </h1>

      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mt-10 space-y-6 text-sm text-muted-foreground">
        <p>
          These Terms & Conditions govern your use of the
          BacksideWorker platform. By accessing or using our
          services, you agree to be bound by these terms.
        </p>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            1. Use of Services
          </h2>
          <p className="mt-2">
            You agree to use BacksideWorker only for lawful
            purposes. Any misuse, abuse, or illegal activity may
            result in suspension or termination of your account.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            2. Project Submission & Delivery
          </h2>
          <p className="mt-2">
            By submitting a project, you confirm that all provided
            information is accurate. Delivery timelines may vary
            based on project complexity and requirements.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            3. Payments
          </h2>
          <p className="mt-2">
            All payments must be made as agreed before or after
            project delivery. BacksideWorker reserves the right to
            change pricing or plans at any time.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            4. Intellectual Property
          </h2>
          <p className="mt-2">
            Upon full payment, ownership of the delivered work is
            transferred to the client unless stated otherwise.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            5. Limitation of Liability
          </h2>
          <p className="mt-2">
            BacksideWorker shall not be liable for any indirect,
            incidental, or consequential damages arising from the
            use of our services.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            6. Termination
          </h2>
          <p className="mt-2">
            We reserve the right to suspend or terminate access to
            our platform if these terms are violated.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            7. Changes to Terms
          </h2>
          <p className="mt-2">
            These terms may be updated from time to time. Continued
            use of the platform implies acceptance of updated
            terms.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            8. Contact Information
          </h2>
          <p className="mt-2">
            For any questions regarding these Terms & Conditions,
            contact us at support@backsideworker.in
          </p>
        </div>
      </section>
    </main>
  )
}
