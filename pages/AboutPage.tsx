"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
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
        <Badge>About BacksideWorker</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          We Build. You Scale.
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          BacksideWorker helps businesses get work done without hiring teams.
          You submit the task — we handle everything behind the scenes.
        </p>
      </motion.div>

      {/* ================= WHO WE ARE ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>
              <strong>BacksideWorker</strong> is a service-based digital platform
              where startups, founders, and businesses can submit projects
              directly through a dashboard.
            </p>
            <p>
              Our internal team of developers, designers, and technical experts
              completes the work efficiently, securely, and on time — without
              clients needing to manage freelancers or employees.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* ================= WHAT WE DO ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>What We Do</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground list-disc pl-5">
              <li>Website & Web App Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX & Product Design</li>
              <li>Automation & Backend Systems</li>
              <li>Project Execution & Management</li>
              <li>Custom Technical Solutions</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* ================= VISION ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              To remove operational headaches for businesses and let founders
              focus only on growth.
            </p>
            <p className="mt-2 font-semibold">
              “You focus on scaling. We work in the background.”
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <Separator />

      {/* ================= FOUNDERS ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Founder */}
        <Card>
          <CardHeader>
            <CardTitle>Founder</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h3 className="text-xl font-semibold">Rohit Verma</h3>
            <p className="text-muted-foreground">
              Founder & Developer, BacksideWorker
            </p>
            <p className="text-muted-foreground">
              A full-stack developer and problem solver who believes in building
              scalable systems that simplify real-world business operations.
            </p>
          </CardContent>
        </Card>

        {/* Co-Founder */}
        <Card>
          <CardHeader>
            <CardTitle>Co-Founder</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h3 className="text-xl font-semibold">Saniya Khan</h3>
            <p className="text-muted-foreground">
              Co-Founder, BacksideWorker
            </p>
            <p className="text-muted-foreground">
              A management-focused thinker with a strong vision for creating a
              user-friendly, reliable, and trust-driven service platform.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
