"use client"

import { motion } from "framer-motion"
import {
  Code,
  Layout,
  Smartphone,
  Settings,
} from "lucide-react"

const services = [
  {
    title: "Website Development",
    desc: "Modern, fast & SEO-ready websites for your business.",
    icon: Layout,
  },
  {
    title: "Web Apps & Dashboards",
    desc: "Custom dashboards, admin panels & SaaS platforms.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS apps built with modern frameworks.",
    icon: Smartphone,
  },
  {
    title: "Automation & Tech Work",
    desc: "Save time with smart automation & backend systems.",
    icon: Settings,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Heading */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          What We Do
        </h2>
        <p className="mt-4 text-muted-foreground">
          You submit the work. We deliver the result.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-background p-6 transition hover:shadow-lg"
          >
            <service.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-semibold">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
