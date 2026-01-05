"use client"

import { motion } from "framer-motion"
import { Upload, Users, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Submit Your Work",
    desc: "Share your project details directly on our dashboard.",
    icon: Upload,
  },
  {
    title: "We Assign Experts",
    desc: "Our skilled team starts working on your project.",
    icon: Users,
  },
  {
    title: "Get Delivery",
    desc: "Receive quality work on time. Pay only when satisfied.",
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-muted/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple process. No hiring. No headache.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-background p-8 text-center"
            >
              <step.icon className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-6 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
