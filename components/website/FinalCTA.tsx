"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Ready to Get Your Work Done?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-muted-foreground"
        >
          Stop hiring. Stop managing.  
          Just submit your work and relax.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button size="lg">Start a Project</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
