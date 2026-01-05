"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight flex">
          <img src="/favicon.png" alt="" className="max-w-[30px] mr-3" />
          Backside<span className="text-primary">Worker</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="#services" className="hover:text-foreground">
            Services
          </Link>
          <Link href="#how-it-works" className="hover:text-foreground">
            How it works
          </Link>
          <Link href="#pricing" className="hover:text-foreground">
            Pricing
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.header>
  )
}
