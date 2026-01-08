"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Globe } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 space-y-16">
      {/* ================= HERO ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Badge>Contact Us</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let’s Build Something Together
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? Submit your idea and let BacksideWorker
          handle everything behind the scenes.
        </p>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* ===== Contact Form ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Business / Company Name" />
            <Textarea
              placeholder="Tell us about your project..."
              className="min-h-[120px]"
            />
            <Button className="w-full">
              Submit Request
            </Button>
          </CardContent>
        </Card>

        {/* ===== Contact Info ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <span>contact@backsideworker.in</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5" />
              <span>www.backsideworker.in</span>
            </div>

            <Separator />

            <p>
              We usually respond within{" "}
              <span className="font-medium">24 hours</span>.
              Your idea is safe with us.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
