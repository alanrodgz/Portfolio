"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="font-mono text-base mb-5"
            style={{ color: 'var(--green)' }}
          >
            Hi, my name is
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-2"
          style={{ color: 'var(--lightest-slate)' }}
        >
          Alan Rodriguez.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-5"
          style={{ color: 'var(--slate)' }}
        >
          I build autonomous AI systems.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg max-w-2xl leading-relaxed mb-12"
          style={{ color: 'var(--slate)' }}
        >
          I'm an AI Agentic Engineer focused on designing and deploying autonomous systems 
          that reason, plan, and act toward complex goals with real-world impact. Currently, 
          I'm exploring the intersection of multi-agent collaboration and human-AI alignment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 font-mono text-base border border-green-400 text-green-400 hover:bg-green-400/10 transition-all rounded"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}