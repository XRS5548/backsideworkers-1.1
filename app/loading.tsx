"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <motion.div
          className="h-12 w-12 rounded-full border-4 border-muted border-t-primary"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Text */}
        <motion.p
          className="text-sm text-muted-foreground tracking-wide"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Loading BacksideWorker…
        </motion.p>
      </div>
    </div>
  )
}
