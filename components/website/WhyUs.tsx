"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  Clock,
  Wallet,
  ShieldCheck,
} from "lucide-react"

const reasons = [
  {
    title: "No Hiring Needed",
    desc: "No interviews, no salaries, no management stress.",
    icon: Briefcase,
  },
  {
    title: "Fast Delivery",
    desc: "Get your work done on time with expert execution.",
    icon: Clock,
  },
  {
    title: "Cost Effective",
    desc: "Pay only for the work. No extra overhead costs.",
    icon: Wallet,
  },
  {
    title: "Secure & Reliable",
    desc: "Your project is handled professionally and safely.",
    icon: ShieldCheck,
  },
]

export default function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why BacksideWorker?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Focus on your business. We handle the work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-background p-6"
            >
              <item.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
