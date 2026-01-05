"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "₹0",
    desc: "Launch offer for first-time clients",
    features: [
      "FREE 5-page website",
      "Responsive design",
      "Basic SEO",
      "3–5 days delivery",
      "First project only",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹15,000",
    oldPrice: "₹30,000",
    desc: "Best for startups & growing businesses",
    features: [
      "Custom coded website",
      "8–12 pages",
      "Admin / dashboard",
      "SEO optimized",
      "Fast delivery",
      "1 month free support",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "₹50,000+",
    desc: "Advanced & long-term development",
    features: [
      "Full-stack development",
      "Backend & APIs",
      "Auth & payments",
      "Automation features",
      "Dedicated developer",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Simple & Honest Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            No hiring. No salaries. Just pure development work.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border bg-background p-8 ${
                plan.popular ? "border-primary shadow-xl scale-[1.02]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  50% OFF • Recommended
                </span>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.desc}
              </p>

              <div className="mt-6 text-3xl font-bold">
                {plan.price}
                {plan.oldPrice && (
                  <span className="ml-2 text-lg text-muted-foreground line-through">
                    {plan.oldPrice}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
