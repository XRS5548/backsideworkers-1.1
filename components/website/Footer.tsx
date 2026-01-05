import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold">
              Backside<span className="text-primary">Worker</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Get your business work done  
              without hiring or managing workers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">How it works</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold">Get Started</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              Submit your project and let us handle the rest.
            </p>
            <Link
              href="#"
              className="mt-4 inline-block rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground"
            >
              Start Project
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BacksideWorker. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
