'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {

  const pathname = usePathname()

  if (pathname?.startsWith("/dashboard"))
    return <></>

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* ================= Brand ================= */}
          <div>
            <h3 className="text-lg font-bold">
              Backside<span className="text-primary">Worker</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Get your business work done without hiring or managing workers.
            </p>
          </div>

          {/* ================= Company ================= */}
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= Support ================= */}
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= Get Started ================= */}
          <div>
            <h4 className="font-semibold">Get Started</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              Submit your project and let us handle the rest.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/auth/login"
                className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground text-center"
              >
                Login
              </Link>

              <Link
                href="/dashboard"
                className="inline-block rounded-lg border px-4 py-2 text-sm text-center hover:bg-muted"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* ================= Bottom ================= */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BacksideWorker. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
